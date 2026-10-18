export const zeffyModalUrl = (slug: string) =>
  `https://www.zeffy.com/embed/donation-form/${slug}?modal=true`;

export const zeffyEmbedUrl = (slug: string) =>
  `https://www.zeffy.com/embed/donation-form/${slug}`;

export const zeffyThermometerUrl = (slug: string) =>
  `https://www.zeffy.com/embed/thermometer/${slug}`;

export const mainCampaignSlug = 'from-survival-to-safety-2';

export const campaigns = [
  { title: 'A Safe ICU for Dogs',           slug: 'a-safe-icu-for-dogs' },
  { title: 'Dog Shed for Surgery Recovery', slug: 'dog-shed-for-surgery-recovery' },
  { title: 'Critical Care Ambulance',       slug: 'critical-care-ambulance' },
  { title: 'Trauma Care for Street Dogs',                   slug: 'trauma-care-for-street-dogs' },
  { title: 'Spay & Neuter: Stop Suffering Before It Starts', slug: 'spay-and-neuter-stop-suffering-before-it-starts' },
  { title: 'Medical Equipment for Rescue Dogs',              slug: 'medical-equipment-for-rescue-dogs' },
  { title: 'Dog Ambulance for PFA',                         slug: 'dog-ambulance-for-pfa' },
];
