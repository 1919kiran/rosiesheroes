// fetch-counters.mjs — pull website counters from the public Google Sheet
// ("Rosie's Heroes Website Counters") at build time and write them to
// src/data/impact.generated.json, which impact.ts imports.
//
// The sheet must be shared as "Anyone with the link can view". If the fetch
// fails for any reason (network, sharing, bad data), the previously generated
// file is left untouched (or written with safe defaults), so the build never
// breaks. Run automatically via the `prebuild` npm script.

import { writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SHEET_ID = '10UvQAq6x8yvrXynjiYCbJ1yro1YQmKl0C4nEm-K_PTQ';
const OUT_PATH = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'impact.generated.json');
const FETCH_TIMEOUT_MS = 15000;

const EXPECTED_KEYS = ['trauma_surgeries', 'spay_neuters', 'projects', 'dogs_helped'];

const DEFAULTS = [
  { key: 'trauma_surgeries', label: 'Trauma Surgeries', value: 10 },
  { key: 'spay_neuters', label: 'Spay/Neuters', value: 25 },
  { key: 'projects', label: 'Community Infrastructure Projects', value: 1 },
  { key: 'dogs_helped', label: 'Dogs Helped', value: 235 },
];

function parseCsv(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c === '\r') { /* skip */ }
    else field += c;
  }
  if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

async function fetchCsv() {
  // COUNTERS_CSV_URL override exists for local testing (e.g. a fixture server).
  const url = process.env.COUNTERS_CSV_URL
    || `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: controller.signal, redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    // A login page instead of CSV means the sheet isn't link-shared.
    if (!text || text.trimStart().startsWith('<')) {
      throw new Error('Response was not CSV (sheet may not be link-shared)');
    }
    return text;
  } finally {
    clearTimeout(timer);
  }
}

function extractMetrics(csvText) {
  const rows = parseCsv(csvText);
  const byKey = new Map();
  for (const row of rows) {
    const key = (row[0] || '').trim();
    if (!EXPECTED_KEYS.includes(key)) continue;
    const label = (row[1] || '').trim();
    const value = Number((row[2] || '').trim());
    if (!Number.isFinite(value) || value < 0) {
      throw new Error(`Invalid total for "${key}": ${row[2]}`);
    }
    byKey.set(key, { key, label: label || undefined, value: Math.round(value) });
  }
  const missing = EXPECTED_KEYS.filter((k) => !byKey.has(k));
  if (missing.length > 0) throw new Error(`Missing keys in sheet: ${missing.join(', ')}`);
  return EXPECTED_KEYS.map((k) => byKey.get(k));
}

function writeGenerated(metrics, source) {
  const payload = {
    source,
    fetchedAt: new Date().toISOString(),
    sheetId: SHEET_ID,
    metrics: EXPECTED_KEYS.map((k) => {
      const m = metrics.find((x) => x.key === k);
      const fallback = DEFAULTS.find((x) => x.key === k);
      return {
        key: k,
        label: m?.label || fallback.label,
        value: m ? m.value : fallback.value,
      };
    }),
  };
  writeFileSync(OUT_PATH, JSON.stringify(payload, null, 2) + '\n');
}

try {
  const csv = await fetchCsv();
  const metrics = extractMetrics(csv);
  writeGenerated(metrics, 'google-sheet');
  console.log(`[counters] Updated from Google Sheet: ${metrics.map((m) => `${m.key}=${m.value}`).join(', ')}`);
} catch (err) {
  if (!existsSync(OUT_PATH)) {
    writeGenerated(DEFAULTS, 'fallback-defaults');
    console.warn(`[counters] Fetch failed (${err.message}); wrote fallback defaults.`);
  } else {
    console.warn(`[counters] Fetch failed (${err.message}); keeping previously generated values.`);
  }
}
