export interface Dog {
  slug: string;
  name: string;
  emoji: string;
  gender?: string;
  age: string;
  weight: string;
  location: string;
  goodWithDogs: string;
  goodWithCats: string;
  crateTrained?: string;
  quirks?: string;
  vaccinations?: string;
  photos: string[];
  shortDesc: string;
  fullDesc: string[];
}

export const locations = ["Chennai", "Bangalore", "Hyderabad", "Bay Area"] as const;

export const dogs: Dog[] = [
  {
    slug: "hazel",
    name: "Hazel",
    emoji: "🌿",
    gender: "Female",
    age: "2.5 months",
    weight: "6 lbs",
    location: "Bangalore",
    goodWithDogs: "Yes",
    goodWithCats: "Not socialized yet",
    crateTrained: "No",
    quirks: "Very sober",
    vaccinations: "Second vaccination done",
    photos: ["/images/Hazel.jpeg"],
    shortDesc:
      "Hazel is quiet strength in the smallest, softest form. This 2.5-month-old, 2.5 kg girl may have three legs, but she carries herself with a grace that feels almost magical.",
    fullDesc: [
      "Hazel is quiet strength in the smallest, softest form. This 2.5-month-old, 2.5 kg girl may have three legs, but she carries herself with a grace that feels almost magical.",
      "Rescued and incredibly calm, Hazel has a gentle, soulful presence. She loves human hugs and will happily sit beside you, offering a kind of peace that only special dogs seem to bring.",
      "She gets along well with other dogs and asks for nothing more than a loving home where she can continue to blossom at her own serene pace.",
      "✨ Second vaccination done. 🌿 Calm, loving, and beautifully resilient.",
    ],
  },
  {
    slug: "bolt",
    name: "Bolt",
    emoji: "🤍",
    gender: "Male",
    age: "50 days",
    weight: "3 lbs",
    location: "Bangalore",
    goodWithDogs: "Yes",
    goodWithCats: "Not socialized yet",
    crateTrained: "No",
    quirks: "Very sober",
    vaccinations: "First vaccination done",
    photos: ["/images/Bolt.jpeg"],
    shortDesc:
      "Don't let the name fool you, Bolt isn't a streak of lightning. He's the quiet glow that stays. A tiny 3.3 lb rescued pup with a softness that feels rare.",
    fullDesc: [
      "Don't let the name fool you, Bolt isn't a streak of lightning. He's the quiet glow that stays.",
      "At just 50 days old, this tiny 3.3 lb rescued pup carries a softness that feels rare. While other puppies tumble through chaos, Bolt moves gently through the world, taking it all in with calm curiosity. He's incredibly sweet, great with other dogs, and naturally drawn to human comfort, often choosing to sit close, soaking in love rather than demanding it.",
      "There's something deeply peaceful about him. The kind of presence that makes a home feel warmer, quieter, steadier.",
      "Bolt hasn't been crate trained yet and hasn't met cats, but his gentle nature suggests he'll take new experiences in stride with a little patience and care.",
      "If you're looking for a companion who brings calm instead of chaos, softness instead of noise, Bolt might just be your little heart dog.",
      "✨ First vaccination done. 🤍 Gentle, calm, quietly loving.",
    ],
  },
  {
    slug: "potato",
    name: "Potato",
    emoji: "🥔",
    gender: "Male",
    age: "~4 months",
    weight: "Puppy, medium-size expected",
    location: "Chennai",
    goodWithDogs: "Yes",
    goodWithCats: "Unknown",
    photos: ["/images/potato-1.jpeg","/images/potato-2.jpeg","/images/potato-3.jpeg"],
    shortDesc:
      "Potato is an adorable little sunshine pup with a playful spirit and the sweetest smile. He's curious, affectionate, and full of that happy puppy energy that makes every moment feel lighter.",
    fullDesc: [
      "Potato is an adorable little sunshine pup with a playful spirit and the sweetest smile. He's curious, affectionate, and full of that happy puppy energy that makes every moment feel lighter. Whether he's trotting around, striking a pose, or soaking up attention, Potato brings joy wherever he goes.",
      "He's still young, so he'll need guidance with all the puppy basics like leash walking, routines, and continued training. But he seems eager, social, and ready to bond with his people.",
      "Potato would do wonderfully in a home that can give him structure, love, and lots of fun as he grows into the best companion.",
    ],
  },
  {
    slug: "tomato",
    name: "Tomato",
    emoji: "🍅",
    gender: "Female",
    age: "~4 months",
    weight: "Puppy, medium-size expected",
    location: "Chennai",
    goodWithDogs: "Yes",
    goodWithCats: "Unknown",
    photos: ["/images/tomato-1.jpeg","/images/tomato-2.jpeg","/images/tomato-3.jpeg"],
    shortDesc:
      "Tomato is a bright, happy little girl with a playful heart and a face that's impossible not to love. She has a cheerful, affectionate energy and seems to enjoy being around people.",
    fullDesc: [
      "Tomato is a bright, happy little girl with a playful heart and a face that's impossible not to love. She has a cheerful, affectionate energy and seems to enjoy being around people, taking in the world with curiosity and excitement. Sweet, expressive, and full of puppy charm, Tomato is the kind of pup who makes everyone smile.",
      "As a young puppy, she'll benefit from patience, gentle training, and a home ready to help her learn all the basics. With love, consistency, and plenty of positive experiences, Tomato is sure to grow into a wonderful loyal companion.",
      "She's ready to find a family to grow up with and adore.",
    ],
  },
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
  {
    slug: "cooper",
    name: "Cooper",
    emoji: "💛",
    gender: "Male",
    age: "2 months",
    weight: "4 lbs",
    location: "Bangalore",
    goodWithDogs: "Yes",
    goodWithCats: "Not socialized yet",
    crateTrained: "No",
    quirks: "None",
    vaccinations: "First vaccination done",
    photos: ["/images/Cooper.jpeg"],
    shortDesc:
      "Meet Cooper, a tiny bundle of joy with a heart that runs faster than his paws. At just 2 months old, this 1.8 kg sweetheart is all sunshine and wiggles.",
    fullDesc: [
      "Meet Cooper, a tiny bundle of joy with a heart that runs faster than his paws. At just 2 months old, this 1.8 kg sweetheart is all sunshine and wiggles, always ready to turn an ordinary day into a play-filled adventure.",
      "Rescued and already thriving, Cooper absolutely adores human company and will happily be your little shadow, following you from room to room like a loyal sidekick in training. He's great with other dogs and brings an infectious energy wherever he goes.",
      "Still learning the ropes (no crate training yet!), but with his eagerness and love for people, he's the perfect pup to grow with.",
      "✨ First vaccination done. 💛 High-energy, playful, and full of love.",
    ],
  },
  {
    slug: "brownie-blr",
    name: "Brownie",
    emoji: "🐾",
    gender: "Male",
    age: "2 months",
    weight: "4 lbs",
    location: "Bangalore",
    goodWithDogs: "Yes",
    goodWithCats: "Not socialized yet",
    crateTrained: "No",
    quirks: "Stealing other dogs' toys",
    vaccinations: "First vaccination done",
    photos: ["/images/Brownie.jpeg"],
    shortDesc:
      "If joy had a face, it might look a lot like Brownie. This 2-month-old, 2 kg charmer is equal parts cuddle bug and cheeky mischief-maker.",
    fullDesc: [
      "If joy had a face, it might look a lot like Brownie. This 2-month-old, 2 kg charmer is equal parts cuddle bug and cheeky mischief-maker.",
      "Well-socialized with both humans and other dogs, Brownie is the life of the puppy party. His favorite hobby? Sneaking off with toys that technically belong to other dogs… but he insists sharing is overrated.",
      "Rescued and ready for a forever home, Brownie will fill your life with laughter, chaos, and a whole lot of love.",
      "✨ First vaccination done. 🐾 Social, playful, and delightfully naughty.",
    ],
  },
  {
    slug: "coco",
    name: "Coco",
    emoji: "💫",
    gender: "Male",
    age: "2 months",
    weight: "5 lbs",
    location: "Bangalore",
    goodWithDogs: "Yes",
    goodWithCats: "Not socialized yet",
    crateTrained: "No",
    quirks: "Hyper active",
    vaccinations: "First vaccination done",
    photos: ["/images/Coco.jpeg"],
    shortDesc:
      "Coco is a little spark wrapped in fur. At 2.2 kg and just 2 months old, he's a beautiful mix of zoomies and snuggles.",
    fullDesc: [
      "Coco is a little spark wrapped in fur. At 2.2 kg and just 2 months old, he's a beautiful mix of zoomies and snuggles.",
      "This rescued boy is full of energy when it's playtime, but the moment you sit down, he transforms into the gentlest cuddle companion, melting into your arms like he's always belonged there.",
      "Great with other dogs and deeply affectionate with humans, Coco is the kind of pup who gives you both excitement and comfort in equal measure.",
      "✨ First vaccination done. 💫 Playful, affectionate, and irresistibly cuddly.",
    ],
  },
];
