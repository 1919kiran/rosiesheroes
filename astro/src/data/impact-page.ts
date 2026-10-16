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
  {
    month: 'Jul 2026',
    reportUrl:
      'https://drive.google.com/file/d/1gAW9QoT8MAw_HrL3sxSqyHeUkNPg4daD/view?usp=sharing',
    stories: [
      {
        dogName: 'Baloo',
        story: [
          'Baloo was having an ordinary day when a pack of neighborhood dogs suddenly attacked and chased him. Desperate to escape, he squeezed through a barbed-wire fence \u2014 tearing the skin across his back away and leaving a large, gaping wound.',
          'In pain and frightened, Baloo hid himself for several days, suffering in silence. When he was finally found, he needed urgent and intensive care: his wound cleaned twice a day with saline, intravenous fluids to restore his strength, constant attention and careful wound management.',
          'Thankfully, Baloo responded well to treatment and made a remarkable recovery. Today he is back in his old territory, reunited with his familiar surroundings and friends.',
        ],
      },
      {
        dogName: 'Brian',
        story: [
          'Brian came to CARE with a massive, pendulous tumour hanging from his chest \u2014 so large it struck his front legs every time he tried to walk, making even the simplest movements difficult. To make matters worse, the tumour was infected.',
          'Before surgery, Brian was started on supportive tonics and supplements to stabilise his condition and prepare him for the procedure. Once he was ready, the tumour was surgically removed.',
          'His recovery required intensive post-operative care, close monitoring and dedicated attention from the medical team. Slowly but surely, Brian healed \u2014 a reminder of what timely medical intervention, skilled veterinary care and compassion can achieve.',
        ],
      },
    ],
  },
  {
    month: 'Jun 2026',
    reportUrl: '/reports/june-2026-trauma-cases.pdf',
    stories: [
      {
        dogName: 'Clara',
        story: [
          'Clara had a huge tumour growing in her abdomen, close to her chest. The weight of the growth made even walking an uncomfortable and exhausting task. Radiographs revealed the tumour was also internally attached to part of her chest region, making surgery particularly challenging.',
          'Despite the risks and apprehensions, the team decided to proceed with the tumour removal surgery \u2014 Clara had an incredible zest for life, and they wanted to give her every chance to reclaim it. She endured the surgery bravely and sailed through her post-operative recovery like a trooper.',
          'Once she had healed completely, Clara returned to her guardians, who were overjoyed to have her back, healthy and happy. Thanks to the support that makes such treatment possible, Clara got her second chance at life.',
        ],
      },
      {
        dogName: 'Grey',
        story: [
          'Grey was brought in with significant facial swelling caused by a bee sting. He received the necessary medical treatment, including antibiotics and supplements.',
          'He remained under care for an extended period to ensure his recovery, with prolonged care and close monitoring.',
          'Grey recovered well and was finally ready to return to his familiar surroundings.',
        ],
      },
    ],
  },
  {
    month: 'May 2026',
    reportUrl: '/reports/may-2026-trauma-cases.pdf',
    stories: [
      {
        dogName: 'Pepper',
        story: [
          'Pepper was brought in with a tumour in the rump region that required surgical intervention. The veterinary team carefully assessed the condition and performed surgical excision to remove the growth.',
          'Following the surgery, Pepper received the necessary post-operative care and close monitoring to support healing and ensure a smooth recovery.',
          'With time, care, and patience, Pepper recovered well and was ready to return to the familiar surroundings she calls home \u2014 having received the medical attention she needed to get back on her paws.',
        ],
      },
      {
        dogName: 'Bruno',
        story: [
          'Bruno was brought in with a severe facial wound caused by a tooth abscess that had ruptured and developed into a maggot-infested wound. The condition required immediate medical attention and dedicated wound management.',
          'The veterinary team initiated treatment with antibiotics, regular wound cleaning and dressing, and nutritional supplements to support healing. Since the underlying dental infection needed to be addressed, the affected tooth was also extracted to prevent further complications.',
          'With consistent medical care, patience, and close monitoring, Bruno gradually recovered and was released back to his familiar surroundings \u2014 another life given a second chance through timely treatment and compassionate care.',
        ],
      },
    ],
  },
];
