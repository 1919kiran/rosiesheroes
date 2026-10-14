// Impact page data — copy from the "Our Impact" mock (Drive > Website > Impact page).
// Trauma stories for Aug 2026 come from the "August 2026" PDF in the same folder.
import { zeffyEmbedUrl } from './donate';

export interface RescueProject {
  title: string;
  status: string;
  location: string;
  impact: string;
  description: string;
  zeffySlug: string;
}

export const rescueProjects: RescueProject[] = [
  {
    title: 'Dog Ambulance',
    status: 'Completed',
    location: 'Khamgaon, Maharashtra',
    impact: '~1,200 dogs/year',
    description:
      'Injured dogs currently travel by auto, delaying treatment and putting them at further risk. A dedicated ambulance provides safe transport and care on the way, 24/7.',
    zeffySlug: 'critical-care-ambulance',
  },
  {
    title: 'A Safe ICU for Dogs',
    status: 'Actively funding',
    location: 'Noida, Uttar Pradesh',
    impact: '~240 dogs/year',
    description:
      'A leaking roof and floor without drainage expose critically ill dogs to rain, standing water, and infection. Repairs will give them a clean, protected space to heal.',
    zeffySlug: 'a-safe-icu-for-dogs',
  },
  {
    title: 'A Covered Dog Shed',
    status: 'Actively funding',
    location: 'Agartala, Tripura',
    impact: '~120 dogs/year',
    description:
      'Dogs recovering from surgery have no covered space to protect them from extreme heat and heavy rain. A covered shed will give them a safe, hygienic place to recover.',
    zeffySlug: 'dog-shed-for-surgery-recovery',
  },
];

export const projectDonateUrl = (slug: string) => zeffyEmbedUrl(slug);

export interface TraumaStory {
  dogName: string;
  story: string[];
}

export interface TraumaMonth {
  month: string;
  stories: TraumaStory[];
  reportUrl?: string;
}

export const traumaStoriesByMonth: TraumaMonth[] = [
  { month: 'Oct 2026', stories: [] },
  { month: 'Sep 2026', stories: [] },
  {
    month: 'Aug 2026',
    reportUrl:
      'https://drive.google.com/file/d/1rgjqUF2w-UektKBenPdAV_fzpynE0tRR/view?usp=sharing',
    stories: [
      {
        dogName: 'Ben',
        story: [
          'Ben came to us with a horribly swollen face. At first it looked like it might be a tumor growth, but radiographs revealed a sting wound which resulted in a deep rooted infection and swelling, as it had been neglected.',
          'Ben could hardly open his mouth to eat or drink and was on IV fluids for a longer period. At first he did not respond to the antibiotics \u2014 only after a combination was tried did the swelling and infection subside.',
          'Ben is healed fully and has gone back to his home.',
        ],
      },
      {
        dogName: 'Raja',
        story: [
          'When we saw Raja\u2019s gaping wound in the neck region, we wondered if it would ever heal \u2014 whether the two folds of skin would join together and regenerate fresh cells.',
          'With dedicated treatment, daily cleaning of the wound with IV fluids, antibiotics, pain killers, supplements and tonics, Raja\u2019s wound finally healed. The relief was obvious from the way he would run around the shelter and play with the staff.',
          'Raja went back to his guardian, happy and healed.',
        ],
      },
    ],
  },
];
