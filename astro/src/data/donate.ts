export const zeffyModalUrl = (slug: string) =>
  `https://www.zeffy.com/embed/donation-form/${slug}?modal=true`;

export const zeffyEmbedUrl = (slug: string) =>
  `https://www.zeffy.com/embed/donation-form/${slug}`;

export const zeffyThermometerUrl = (slug: string) =>
  `https://www.zeffy.com/embed/thermometer/${slug}`;

export const mainCampaignSlug = 'from-survival-to-safety-2';

// Campaign info is our own styling — no Zeffy embeds on the cards.
// `raised` amounts are snapshots verified on the Zeffy dashboard
// (2026-10-18/19) and are NOT live: update them periodically.
// Goals come from the Zeffy campaign settings. ICU has no published
// goal, so it shows raised-to-date without a progress bar.
export interface Campaign {
  title: string;
  slug: string;
  blurb: string;
  goal: number | null;
  raised: number;
}

export const campaigns: Campaign[] = [
  {
    title: 'ICU Roof and Floor Repair',
    slug: 'a-safe-icu-for-dogs',
    blurb: 'Repairing the ICU roof and floor so recovering dogs have a safe, dry place to heal.',
    goal: null,
    raised: 478,
  },
  {
    title: 'Trauma Care for Street Dogs',
    slug: 'trauma-care-for-street-dogs',
    blurb: 'Provides 100 life-saving trauma surgeries for injured street dogs in India.',
    goal: 5000,
    raised: 253,
  },
  {
    title: 'Spay & Neuter: Stop Suffering Before It Starts',
    slug: 'spay-and-neuter-stop-suffering-before-it-starts',
    blurb: 'Provides 100 spay/neuter surgeries through CARE, Bangalore — stopping suffering before it starts.',
    goal: 2500,
    raised: 338,
  },
  {
    title: 'Medical Equipment for Rescue Dogs',
    slug: 'medical-equipment-for-rescue-dogs',
    blurb: 'Provides diagnostic and treatment equipment so rescue teams can triage and treat more dogs.',
    goal: 2500,
    raised: 371,
  },
  {
    title: 'Emergency Dog Ambulance',
    slug: 'dog-ambulance-for-pfa',
    blurb: 'Provides a dog ambulance for PFA to reach injured and sick dogs across India.',
    goal: 5000,
    raised: 320,
  },
  {
    title: 'Portable XRay Machine',
    slug: 'portable-xray-machine',
    blurb: 'Provides a portable X-ray machine so vets can diagnose fractures and trauma on the spot.',
    goal: 2500,
    raised: 352,
  },
];
