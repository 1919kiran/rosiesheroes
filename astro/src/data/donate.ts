export const zeffyModalUrl = (slug: string) =>
  `https://www.zeffy.com/embed/donation-form/${slug}?modal=true`;

export const zeffyEmbedUrl = (slug: string) =>
  `https://www.zeffy.com/embed/donation-form/${slug}`;

export const zeffyThermometerUrl = (slug: string) =>
  `https://www.zeffy.com/embed/thermometer/${slug}`;

export const mainCampaignSlug = 'from-survival-to-safety-2';

export const campaigns = [
  { title: 'ICU Roof and Floor Repair',     slug: 'icu-roof-and-floor-repair' },
  { title: 'Trauma Care for Street Dogs',                   slug: 'trauma-care-for-street-dogs' },
  { title: 'Spay & Neuter: Stop Suffering Before It Starts', slug: 'spay-and-neuter-stop-suffering-before-it-starts' },
  { title: 'Medical Equipment for Rescue Dogs',              slug: 'medical-equipment-for-rescue-dogs' },
  { title: 'Emergency Dog Ambulance',                       slug: 'dog-ambulance-for-pfa' },
];
