// Impact counters — values are pulled from the "Rosie's Heroes Website
// Counters" Google Sheet at build time (see scripts/fetch-counters.mjs,
// wired via the `prebuild` npm script). The generated JSON is committed as a
// fallback so the build works even if the sheet can't be reached.
// Sheet: https://docs.google.com/spreadsheets/d/10UvQAq6x8yvrXynjiYCbJ1yro1YQmKl0C4nEm-K_PTQ/edit
// Dogs Helped is not a sum of the other numbers.
// "Impact reported as of October 4, 2026" per impact mock.
import generated from './impact.generated.json';

export interface ImpactMetric {
  key: string;
  label: string;
  value: number;
}

const FALLBACK_METRICS: ImpactMetric[] = [
  { key: 'trauma_surgeries', label: 'Trauma Surgeries', value: 10 },
  { key: 'spay_neuters', label: 'Spay/Neuters', value: 25 },
  { key: 'projects', label: 'Community Infrastructure Projects', value: 1 },
  { key: 'dogs_helped', label: 'Dogs Helped', value: 235 },
];

function resolveMetrics(): ImpactMetric[] {
  try {
    const list = (generated as { metrics?: Array<{ key?: string; label?: string; value?: unknown }> })?.metrics;
    if (Array.isArray(list) && list.length > 0) {
      const byKey = new Map(list.map((m) => [m.key, m]));
      return FALLBACK_METRICS.map((f) => {
        const m = byKey.get(f.key);
        const value = Number(m?.value);
        return {
          key: f.key,
          label: typeof m?.label === 'string' && m.label.trim() ? m.label : f.label,
          value: Number.isFinite(value) && value >= 0 ? Math.round(value) : f.value,
        };
      });
    }
  } catch {
    // fall through to hardcoded values
  }
  return FALLBACK_METRICS;
}

export const impactReportedAsOf = 'October 4, 2026';

export const impactMetrics: ImpactMetric[] = resolveMetrics();

export const traumaSurgeries = impactMetrics[0].value;
export const spayNeuters = impactMetrics[1].value;
export const infraProjects = impactMetrics[2].value;
export const dogsHelped = impactMetrics[3].value;
