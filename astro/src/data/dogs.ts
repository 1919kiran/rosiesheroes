export interface Dog {
  slug: string;
  name: string;
  emoji: string;
  age: string;
  weight: string;
  location: string;
  goodWithDogs: string;
  goodWithCats: string;
  crateTrained?: string;
  photos: string[];
  shortDesc: string;
  fullDesc: string[];
}

export const locations = ["Chennai", "Hyderabad", "Bay Area"] as const;

export const dogs: Dog[] = [
  {
    slug: "nikki",
    name: "Nikki",
    emoji: "🖤",
    age: "1–1.5 years",
    weight: "~44 lbs",
    location: "Chennai",
    goodWithDogs: "Yes",
    goodWithCats: "Unknown",
    crateTrained: "Unknown",
    photos: ["/images/nikki.jpeg"],
    shortDesc:
      "Nikki is the kind of dog who quietly steals your heart. She's incredibly affectionate, gentle, and loves being close to her people—whether that's sitting by your side or following you from place to place.",
    fullDesc: [
      "Nikki is the kind of dog who quietly steals your heart. She's incredibly affectionate, gentle, and loves being close to her people—whether that's sitting by your side or following you from place to place.",
      "She has a calm, loving presence but still has a playful side that comes out once she feels safe. Nikki hasn't had formal leash training yet, so she'll need some guidance with walks—but she's eager to bond and learn with her person.",
      "She would do beautifully in a home looking for a loyal, sweet companion who just wants to love and be loved.",
    ],
  },
  {
    slug: "maddy",
    name: "Maddy",
    emoji: "🤎",
    age: "1–1.5 years",
    weight: "~44–55 lbs",
    location: "Chennai",
    goodWithDogs: "Yes",
    goodWithCats: "Unknown",
    crateTrained: "Unknown",
    photos: ["/images/maddy.jpeg"],
    shortDesc:
      "Maddy is pure joy in dog form. He's playful, friendly, and always ready to make you smile. He loves being around people and brings a light, happy energy wherever he goes.",
    fullDesc: [
      "Maddy is pure joy in dog form. He's playful, friendly, and always ready to make you smile. He loves being around people and brings a light, happy energy wherever he goes.",
      "He's still young and will benefit from basic training and regular walks, but he's smart, eager, and thrives with attention and structure. Maddy would be a great fit for someone who wants an active, affectionate companion to grow with.",
      "If you're looking for a dog who will make every day a little brighter, Maddy is your guy.",
    ],
  },
  {
    slug: "teddy",
    name: "Teddy",
    emoji: "🤍",
    age: "3 years",
    weight: "~44 lbs",
    location: "Chennai",
    goodWithDogs: "Yes",
    goodWithCats: "Unknown",
    crateTrained: "Unknown",
    photos: ["/images/teddy.jpeg"],
    shortDesc:
      "Teddy is gentle in the most beautiful way. He's quiet, soft-natured, and incredibly peaceful—more like a calm presence than a high-energy dog.",
    fullDesc: [
      "Teddy is gentle in the most beautiful way. He's quiet, soft-natured, and incredibly peaceful—more like a calm presence than a high-energy dog. He keeps himself clean, moves through the world gently, and seems almost like a cat in a dog's body!",
      "He would thrive in a calm home where he can feel safe and settle in at his own pace. Teddy hasn't been leash trained yet, but his easygoing personality makes him a wonderful candidate for patient, positive training.",
      "He's the kind of dog who doesn't demand attention—but once he trusts you, his quiet love is something really special.",
    ],
  },
  {
    slug: "sandy",
    name: "Sandy",
    emoji: "🐾",
    age: "1 year",
    weight: "~66 lbs",
    location: "Chennai",
    goodWithDogs: "Yes",
    goodWithCats: "Unknown",
    crateTrained: "Unknown",
    photos: ["/images/sandy.jpeg"],
    shortDesc:
      "Sandy is a big, lovable, happy boy with a playful spirit and a heart to match. He's friendly with everyone he meets and brings a fun, goofy energy wherever he goes.",
    fullDesc: [
      "Sandy is a big, lovable, happy boy with a playful spirit and a heart to match. He's friendly with everyone he meets and brings a fun, goofy energy wherever he goes.",
      "He loves food (including vegetables!) and would be a great candidate for training using positive reinforcement. Sandy will do best with an adopter who can give him structure, daily exercise, and lots of engagement—he's still young and full of life.",
      "If you're looking for a loyal, playful companion who will keep you smiling, Sandy is ready to be your best friend.",
    ],
  },
];
