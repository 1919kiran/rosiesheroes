// Team data — copy sourced from the "Meet the Team" mock (Drive > Website > Team page)
// and the Phase 2 notes. Header/subtext overrides come from the Phase 2 doc.
export interface FoundingPackMember {
  id: string;
  name: string;
  fullName: string;
  role: string;
  bio: string;
  whyRosiesHeroes: string;
  dogName: string;
  dogFunFact: string;
  avatarColor: string;
  dogAvatarColor: string;
  initials: string;
  photo?: string;
  photoPosition?: string;
}

export const foundingPack: FoundingPackMember[] = [
  {
    id: 'priyanka-hero',
    name: 'Priyanka',
    fullName: 'Priyanka Rao',
    role: 'President',
    bio: 'After a decade of volunteering and fostering dogs, Priyanka founded Rosie\u2019s Heroes to give more dogs a chance at safety, healing, and love.',
    whyRosiesHeroes:
      'As a child, Priyanka loved Rosie but couldn\u2019t give her the safety and care she deserved. Rosie\u2019s Heroes is her promise to do for dogs like Rosie what she couldn\u2019t do then. After fostering 30+ dogs, she saw that rescue alone could never keep pace with the suffering. She remains committed to every individual dog while tackling the root causes through spay/neuter and empowering communities with the resources to help dogs themselves\u2014creating lasting change beyond a single rescue.',
    dogName: 'Hero',
    dogFunFact:
      'An amazing big brother who keeps his foster siblings in check. His appetite knows no bounds: chai, coffee, instant noodles\u2014even soup ladles are on his wish list!',
    avatarColor: '#D97736',
    dogAvatarColor: '#E09A52',
    initials: 'PR',
    photo: '/images/team/priyanka.jpg',
    photoPosition: 'center 10%',
  },
  {
    id: 'ladoo-archana',
    name: 'Archana',
    fullName: 'Archana Ramamoorthy',
    role: 'Treasurer',
    bio: 'Archana brings her leadership experience and a lifelong connection to India\u2019s street dogs to her role as Treasurer. She helps guide the financial stewardship of Rosie\u2019s Heroes, keeping resources focused on the dogs and communities they serve.',
    whyRosiesHeroes:
      'Growing up in Chennai, Archana knew street dogs as familiar neighborhood guardians. Seeing dogs like them face hunger, injury, and overpopulation today makes this mission deeply personal. Through Rosie\u2019s Heroes, she wants to help give those neighborhood companions the care and safety they deserve.',
    dogName: 'Ladoo',
    dogFunFact:
      'With amazing hearing and a need to lead every walk, Ladoo stays at the front of the pack\u2014exactly where this boss lady belongs.',
    photo: '/images/team/archana.jpg',
    photoPosition: 'center 20%',
    avatarColor: '#7D5265',
    dogAvatarColor: '#E6A15C',
    initials: 'AR',
  },
  {
    id: 'soleil-sonia',
    name: 'Sonia',
    fullName: 'Sonia Dong',
    role: 'Secretary',
    bio: 'As Secretary, Sonia helps keep the work of Rosie\u2019s Heroes organized and moving forward\u2014from documenting board decisions and maintaining records to helping the team follow through on its commitments. She brings that same care to a mission inspired by Soleil, a beloved source of comfort and companionship for her family.',
    whyRosiesHeroes:
      'Soleil has brought so much comfort and companionship to Sonia and her family. Sonia wants more dogs to know the life Soleil has: loved, safe, and surrounded by people who cherish them. Rosie\u2019s Heroes gives her a way to help make that possible.',
    dogName: 'Soleil',
    dogFunFact:
      'With a bark much bigger than you\u2019d expect and the calmest heart, Soleil smiles from ear to ear when her grandparents push her on the swing.',
    avatarColor: '#5B7C64',
    dogAvatarColor: '#F4C430',
    initials: 'SD',
    photo: '/images/team/Sonia.jpg',
  },
];

export interface Volunteer {
  name: string;
  whyICare: string;
  photo?: string;
  photoPosition?: string;
}

export const volunteersWithHeart: Volunteer[] = [
  {
    name: 'Shreya Singh',
    photo: '/images/team/Shreya.jpeg',
    photoPosition: 'center 50%',
    whyICare:
      'Helping plan events is my way of bringing people together for dogs who need them. I love turning a shared love for animals into a gathering that inspires people to help.',
  },
  {
    name: 'Sai Kiran Mudupu',
    photo: '/images/team/Kiran.jpg',
    photoPosition: 'center 22%',
    whyICare:
      'Walking dogs at the shelter in my free time reminds me how much a little attention and kindness can mean. Helping with the Rosie\u2019s Heroes website is another way I can support dogs beyond those walks.',
  },
  {
    name: 'Avani Ashok',
    photo: '/images/team/Avani.jpg',
    photoPosition: 'center 22%',
    whyICare:
      'From walking dogs at the shelter to helping with the Rosie\u2019s Heroes website, I love finding different ways to help. Time spent with the dogs makes the mission feel personal, and the website helps bring more people into it.',
  },
];
