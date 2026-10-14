export interface TeamMember {
  id: string;
  name: string;
  fullName: string;
  role: string;
  professionalRole: string;
  bio: string;
  dogName: string;
  dogTitle: string;
  dogStory: string;
  dogEmoji: string;
  avatarColor: string;
  dogAvatarColor: string;
  initials: string;
}

export const foundingPack: TeamMember[] = [
  {
    id: "priyanka-hero",
    name: "Priyanka",
    fullName: "Priyanka Rao",
    role: "President",
    professionalRole: "Founder & Product Leader",
    bio: "Priyanka is the Founder and President of Rosie's Heroes. An experienced technology product manager with an engineering degree from Stanford, she brings structured program execution, partner management, and analytical rigor to grassroots animal welfare. Driven by a deep commitment to systemic change, Priyanka oversees the organization’s high-volume sterilization campaigns, veterinary partnerships, and emergency trauma response across India.",
    dogName: "Hero",
    dogTitle: "Meet Hero",
    dogStory:
      "Hero showed Priyanka just how deeply a rescued dog can change a human life. His loyalty and resilient spirit inspired her to turn compassion into structured action, creating pathways to safety for street dogs still waiting for their chance.",
    dogEmoji: "🐕",
    avatarColor: "#D97736",
    dogAvatarColor: "#E09A52",
    initials: "PR",
  },
  {
    id: "soleil-sonia",
    name: "Sonia",
    fullName: "Sonia Dong",
    role: "Secretary",
    professionalRole: "Founding Member & Secretary",
    bio: "Sonia serves as Secretary and a Founding Member of Rosie's Heroes. With an extensive background in non-profit management, community advocacy, and social enterprise leadership, she manages organizational governance and compliance. Sonia ensures that all operational activities adhere to the highest standards of non-profit ethics, transparency, and reporting accountability.",
    dogName: "Soleil",
    dogTitle: "Meet Soleil",
    dogStory:
      "Soleil brings constant warmth and brightness to everyone around her. Her gentle nature inspired Sonia to dedicate time and energy to protecting vulnerable animals and helping turn community empathy into tangible shelter relief.",
    dogEmoji: "☀️",
    avatarColor: "#5B7C64",
    dogAvatarColor: "#F4C430",
    initials: "SD",
  },
  {
    id: "ladoo-archana",
    name: "Archana",
    fullName: "Archana Ramamoorthy",
    role: "Treasurer",
    professionalRole: "Founding Member, CFO & Treasurer",
    bio: "Archana serves as Treasurer and CFO for Rosie's Heroes. A senior technology executive with over fifteen years of product and organizational leadership experience in Silicon Valley, Archana directs the organization’s financial oversight and fiscal planning. She ensures rigorous donor stewardship, transparent fund distribution, and responsible resource management so that every dollar directly serves animal care.",
    dogName: "Ladoo",
    dogTitle: "Meet Ladoo",
    dogStory:
      "Sweet and endlessly affectionate, Ladoo reminds Archana daily of the joy dogs bring into our homes. Her love for her grew into a desire to support dogs in severe hardship, guiding her commitment to Rosie's Heroes.",
    dogEmoji: "🐾",
    avatarColor: "#7D5265",
    dogAvatarColor: "#E6A15C",
    initials: "AR",
  },
];
