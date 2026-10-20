export const zeffyModalUrl = (slug: string) =>
  `https://www.zeffy.com/embed/donation-form/${slug}?modal=true`;

export const zeffyEmbedUrl = (slug: string) =>
  `https://www.zeffy.com/embed/donation-form/${slug}`;

export const zeffyThermometerUrl = (slug: string) =>
  `https://www.zeffy.com/embed/thermometer/${slug}`;

export const mainCampaignSlug = 'from-survival-to-safety-2';

// Campaign info is our own styling — no Zeffy embeds on the cards.
// Cards show the project location and how many dogs it helps
// (per Pri, 2026-10-19 — no raised amounts on the cards).
// Locations and dog counts come from the Canva campaign flyers
// (design DAHWYq0o4Jw, read 2026-10-19). The Medical Equipment flyer
// gives no dog count ("equips a lifesaving clinic"), so it is null.
export interface Campaign {
  title: string;
  slug: string;
  blurb: string;
  location: string | null;
  dogsHelped: string | null;
}

export const campaigns: Campaign[] = [
  {
    title: 'ICU Roof and Floor Repair',
    slug: 'a-safe-icu-for-dogs',
    blurb: 'Repairing the ICU roof and floor so recovering dogs have a safe, dry place to heal.',
    location: 'Noida, Uttar Pradesh, India',
    dogsHelped: 'Up to 240 dogs helped per year',
  },
  {
    title: 'Trauma Care for Street Dogs',
    slug: 'trauma-care-for-street-dogs',
    blurb: 'Provides 100 life-saving trauma surgeries for injured street dogs in India.',
    location: 'Bangalore, Karnataka, India',
    dogsHelped: '100 dogs helped',
  },
  {
    title: 'Spay & Neuter: Stop Suffering Before It Starts',
    slug: 'spay-and-neuter-stop-suffering-before-it-starts',
    blurb: 'Provides 100 spay/neuter surgeries through CARE, Bangalore — stopping suffering before it starts.',
    location: 'Bangalore, Karnataka, India',
    dogsHelped: '100 dogs helped',
  },
  {
    title: 'Medical Equipment for Rescue Dogs',
    slug: 'medical-equipment-for-rescue-dogs',
    blurb: 'Provides diagnostic and treatment equipment so rescue teams can triage and treat more dogs.',
    location: 'Bangalore, Karnataka, India',
    dogsHelped: null,
  },
  {
    title: 'Emergency Dog Ambulance',
    slug: 'dog-ambulance-for-pfa',
    blurb: 'Provides a dog ambulance for PFA to reach injured and sick dogs across India.',
    location: 'All Across India',
    dogsHelped: 'Countless dogs helped',
  },
  {
    title: 'Portable XRay Machine',
    slug: 'portable-xray-machine',
    blurb: 'Provides a portable X-ray machine so vets can diagnose fractures and trauma on the spot.',
    location: 'Agartala, Tripura, India',
    dogsHelped: 'Up to 1,000 dogs helped per year',
  },
];
