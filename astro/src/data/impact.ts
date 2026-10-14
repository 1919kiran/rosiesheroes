// Impact counters — source of truth is the "Rosie's Heroes website counters"
// spreadsheet (Drive > Website > Impact page). Dogs Helped is not a sum of
// the other numbers. "Impact reported as of October 4, 2026" per impact mock.
export interface ImpactMetric {
  key: string;
  label: string;
  value: number;
}

export const impactReportedAsOf = 'October 4, 2026';

export const impactMetrics: ImpactMetric[] = [
  { key: 'trauma_surgeries', label: 'Trauma Surgeries', value: 10 },
  { key: 'spay_neuters', label: 'Spay/Neuters', value: 25 },
  { key: 'projects', label: 'Community Infrastructure Projects', value: 1 },
  { key: 'dogs_helped', label: 'Dogs Helped', value: 235 },
];

export const traumaSurgeries = impactMetrics[0].value;
export const spayNeuters = impactMetrics[1].value;
export const infraProjects = impactMetrics[2].value;
export const dogsHelped = impactMetrics[3].value;
