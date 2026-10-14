// FAQ content — sourced from the "Frequently Asked Questions" Google Doc
// (Phase 2 notes). Rendered with a table of contents + expandable answers.
export interface FaqItem {
  q: string;
  a: string[];
}

export interface FaqSection {
  id: string;
  icon: string;
  title: string;
  items: FaqItem[];
}

export const faqSections: FaqSection[] = [
  {
    id: 'about',
    icon: '\u{1F4CB}',
    title: 'About Rosie\u2019s Heroes',
    items: [
      {
        q: 'What is the purpose of Rosie\u2019s Heroes?',
        a: [
          'Rosie\u2019s Heroes exists to reduce preventable suffering and create safer futures for vulnerable dogs. We support high-impact programs such as spay/neuter, rabies vaccination, emergency and trauma care, reflective collars, feeding in areas of urgent need, and adoption for dogs who cannot safely return to the streets.',
          'Our goal is to help as many dogs as possible by addressing both immediate suffering and its root causes.',
        ],
      },
      {
        q: 'Where are you based? Where do you operate?',
        a: [
          'Rosie\u2019s Heroes is based in the Bay Area in California. We currently support dogs and rescue partners in India, including projects in Bangalore, Hyderabad, and Chennai.',
          'India is where we are starting\u2014not the limit of our mission. As we grow, we hope to help vulnerable dogs wherever we can make a meaningful and sustainable difference.',
        ],
      },
      {
        q: 'Are you a registered 501(c)(3)?',
        a: [
          'Yes. Rosie\u2019s Heroes is a registered U.S. 501(c)(3) nonprofit organization. Donations are tax-exempt.',
        ],
      },
      {
        q: 'How are you funded?',
        a: [
          'We are funded through individual donations, recurring gifts, fundraising campaigns, corporate sponsorships, matching gifts, and community events.',
          'Every donation\u2014large or small\u2014helps us fund lifesaving care and long-term prevention.',
        ],
      },
      {
        q: 'How do you choose which rescues and projects to support?',
        a: [
          'We prioritize projects based on urgency, potential impact, local need, cost-effectiveness, and the partner\u2019s ability to carry out the work responsibly.',
          'We look for rescue partners that communicate openly, provide documentation, follow humane practices, and share our commitment to sustainable solutions\u2014not only temporary relief.',
        ],
      },
      {
        q: 'How do you make sure donations are used responsibly?',
        a: [
          'We work directly with trusted rescue organizations and service providers and ensure transparency through treatment records, photographs, videos, beneficiary details, and completion updates.',
        ],
      },
      {
        q: 'How do you measure your impact?',
        a: [
          'We track measurable outcomes such as: dogs spayed or neutered; rabies vaccinations administered; trauma cases treated; dogs fed or provided emergency support; dogs adopted into safe homes; and communities and local rescuers supported.',
        ],
      },
      {
        q: 'How does helping dogs improve communities?',
        a: [
          'Dog welfare and human welfare are closely connected. Humane street-dog management can reduce uncontrolled population growth, rabies risk, dog bites, traffic accidents, and conflict between people and animals.',
          'Spay/neuter and vaccination programs create healthier dog populations and safer communities. Helping dogs is not separate from helping people\u2014it benefits both.',
        ],
      },
      {
        q: 'Why focus on India?',
        a: [
          'India has an estimated 62 million homeless and free-roaming dogs\u2014widely considered one of the world\u2019s largest street-dog populations. Many live without reliable food, veterinary care, or protection from traffic, disease, and cruelty.',
          'India also carries a significant share of the world\u2019s rabies burden, making vaccination and humane population management important for both dogs and people.',
          'Donations also go much further in India. For example, approximately $25 can fund a spay or neuter surgery that may cost $250 or more in the United States.',
          'India is our starting point because the need is enormous and each dollar can create substantial impact. It is not the permanent boundary of our work.',
        ],
      },
      {
        q: 'What is the difference between Rosie\u2019s Heroes and a traditional animal shelter or rescue?',
        a: [
          'Rosie\u2019s Heroes does not operate a physical shelter. Instead, we fund and coordinate high-impact work through trusted rescue partners, veterinarians, volunteers, and community caregivers.',
          'Traditional rescues often focus primarily on taking individual animals into their care. We support individual rescue when needed, but we also invest heavily in prevention through spay/neuter, vaccination, and community-based programs.',
          'Our aim is to save the dog suffering today while preventing more dogs from facing the same suffering tomorrow.',
        ],
      },
    ],
  },
  {
    id: 'donations',
    icon: '\u{1F4B0}',
    title: 'Donations',
    items: [
      {
        q: 'How can I donate?',
        a: [
          'You can donate through the options listed on our website, including Zeffy, Zelle, PayPal, and Every.org.',
          'Every.org also allows eligible donors to contribute stock or cryptocurrency. Please use the donation method that is most convenient for you.',
        ],
      },
      {
        q: 'Is my donation tax-deductible?',
        a: [
          'Rosie\u2019s Heroes is a registered 501(c)(3) nonprofit organization. Donations are generally tax-deductible for U.S. taxpayers.',
        ],
      },
      {
        q: 'Where exactly does my money go?',
        a: [
          'Donations support programs such as: spay/neuter and rabies vaccination; emergency and trauma care; medical treatment and recovery; feeding in areas of urgent need; reflective collars and other safety measures; transportation and international adoption; and other costs necessary to carry out our charitable programs responsibly.',
          'When a campaign is designated for a particular dog or project, we make every reasonable effort to use those funds for that purpose.',
        ],
      },
      {
        q: 'Can I donate stock or cryptocurrency?',
        a: [
          'Yes. Stock and cryptocurrency donations can be made through our Every.org donation page.',
          'These gifts may offer tax advantages in some circumstances. Please consult your financial or tax advisor for guidance.',
        ],
      },
      {
        q: 'Can my employer match my donation?',
        a: [
          'Many employers match charitable donations made by their employees.',
          'Search for Rosie\u2019s Heroes through your employer\u2019s matching-gift portal. If you need verification or supporting documentation, please contact us.',
        ],
      },
      {
        q: 'Can I make a recurring donation?',
        a: [
          'Yes. Recurring donations provide dependable support and help us plan projects more effectively.',
          'Even a small monthly gift can create meaningful impact over time.',
        ],
      },
      {
        q: 'Can I donate in honor or memory of someone?',
        a: [
          'Yes. You may make a donation in honor or memory of a person or animal who is important to you.',
          'Please include the name and any dedication details with your donation or contact us afterward. If you would like someone to be notified of your gift, provide their contact information as well.',
        ],
      },
      {
        q: 'Can I sponsor a specific dog or project?',
        a: [
          'When sponsorship opportunities are available, you may be able to support a specific dog, medical case, spay/neuter campaign, vaccination drive, or other project.',
          'Because needs can change quickly, please contact us before donating if you would like your gift restricted to a particular purpose.',
        ],
      },
      {
        q: 'Can I donate specifically toward spay/neuter, feeding, or medical care?',
        a: [
          'Yes. You may request that your donation support a particular program.',
          'We will make every reasonable effort to honor your designation. If the original need has already been met or the project can no longer proceed, we will contact you when practical or direct the funds toward the closest related charitable need.',
        ],
      },
      {
        q: 'Can I donate supplies instead of money?',
        a: [
          'Possibly, but please contact us before purchasing or sending anything.',
          'The supplies needed can vary. Financial donations usually allow our partners to obtain exactly what is needed quickly and cost-effectively.',
        ],
      },
      {
        q: 'Can I fundraise for Rosie\u2019s Heroes?',
        a: [
          'Absolutely. You can create a birthday fundraiser, organize a community event, host a workplace campaign, dedicate a personal challenge, or invite friends and family to support a specific project.',
          'Please contact us if you would like campaign language, photographs, impact examples, or help choosing a fundraising goal.',
        ],
      },
      {
        q: 'Is there a minimum donation amount?',
        a: [
          'No. Every donation matters.',
          'Many people giving a few dollars each can collectively fund a surgery, vaccination drive, or lifesaving medical treatment.',
        ],
      },
      {
        q: 'Can I donate anonymously?',
        a: [
          'Yes. If you donate through a platform that offers an anonymous option, you may select it when making your gift.',
          'If you donate directly, contact us and ask that your name not be publicly recognized. We may still need to retain legally required transaction records.',
        ],
      },
      {
        q: 'How do I get a donation receipt?',
        a: [
          'Most online donation platforms automatically email a receipt after your donation is completed.',
          'For direct donations, please include your name and email address or contact us to request a receipt. Keep your receipt for your tax records.',
        ],
      },
    ],
  },
  {
    id: 'adoption',
    icon: '\u{1F415}',
    title: 'Adoption',
    items: [
      {
        q: 'Do you have a physical shelter where I can meet dogs?',
        a: [
          'No. Rosie\u2019s Heroes does not operate a physical shelter.',
          'The dogs we support may be living with partner rescues, foster families, or community caregivers in India. Available dogs are introduced through photographs, videos, medical records, behavioral information, and conversations with the people caring for them.',
        ],
      },
      {
        q: 'Why should I adopt an Indian dog?',
        a: [
          'Indian dogs\u2014often called Indies\u2014are intelligent, resilient, loyal, and deeply loving. Many have survived extremely difficult circumstances and flourish once they experience safety and consistent care.',
          'Adopting an Indian dog gives an overlooked dog a future that may not have been available locally.',
        ],
      },
      {
        q: 'Why support international adoption when so many dogs need homes in the United States?',
        a: [
          'Helping a dog abroad does not make a dog in the United States less deserving. Compassion does not have to stop at a border.',
          'We support international adoption selectively, particularly for dogs who cannot safely return to the streets, have little chance of local adoption, or are a strong match for an approved home.',
          'We also support local rescue efforts by fostering, volunteering, and connecting interested foster families with U.S. rescue organizations. Our broader goal is to help dogs wherever we can make a responsible difference.',
        ],
      },
      {
        q: 'How does international adoption work?',
        a: [
          'The general process includes: completing an adoption application; participating in an interview and home assessment; discussing the dog\u2019s needs, history, and suitability; reviewing available medical and behavioral information; finalizing the adoption agreement and fee; completing required veterinary care and travel documentation; arranging a flight volunteer or approved transportation; and meeting the dog upon arrival and supporting their transition.',
          'The timeline varies depending on the dog\u2019s health, travel requirements, flight-volunteer availability, and destination.',
        ],
      },
      {
        q: 'What is the adoption fee?',
        a: [
          'The adoption fee varies based on the dog and transportation route. International adoption can involve veterinary care, vaccinations, health certificates, travel crates, ground transportation, airline fees, and other documentation.',
          'The applicable fee and what it covers will be clearly explained before an adoption is finalized.',
        ],
      },
    ],
  },
  {
    id: 'flight-volunteering',
    icon: '\u2708\uFE0F',
    title: 'Flight Volunteering',
    items: [
      {
        q: 'How do I become a flight volunteer?',
        a: [
          'Contact us with your airline, itinerary, departure airport, arrival airport, and travel date.',
          'If your route matches a dog waiting to travel, we will confirm airline requirements and coordinate the process with you. Please contact us before adding a pet reservation to your booking.',
        ],
      },
      {
        q: 'What are my responsibilities as a flight volunteer?',
        a: [
          'Your primary responsibility is to accompany the dog as part of your existing trip. Depending on the route, you may need to: share your flight information with us; add the dog to your reservation with our guidance; meet the rescue representative at the departure airport; present the documents prepared for the dog; check in the dog and travel crate; collect the dog after arrival; complete any required customs or arrival procedures; and meet the adopter or rescue representative at the destination.',
          'We coordinate the paperwork and logistics and cover approved dog-related travel expenses. You are not expected to provide medical care or personally supervise a dog traveling in the aircraft\u2019s designated animal area.',
        ],
      },
    ],
  },
  {
    id: 'partnering',
    icon: '\u{1F91D}',
    title: 'Partnering',
    items: [
      {
        q: 'How can my organization partner with Rosie\u2019s Heroes?',
        a: [
          'We welcome partnerships with rescue organizations, veterinarians, businesses, community groups, foundations, and other nonprofits that share our values.',
          'Partnerships may include: funding a spay/neuter or vaccination campaign; sponsoring trauma care or rescue transportation; supporting an ambulance or community program; corporate giving or event sponsorship; donating professional services; organizing a fundraiser; supporting international adoption; or collaborating on education and awareness.',
          'Please contact us with information about your organization, location, proposed partnership, and the impact you hope to create.',
        ],
      },
    ],
  },
  {
    id: 'understanding-the-crisis',
    icon: '\u{1F4A1}',
    title: 'Understanding the Crisis',
    items: [
      {
        q: 'Why are there so many street dogs in India?',
        a: [
          'The street-dog population has grown because of several interconnected factors, including insufficient spay/neuter coverage, abandonment of pets, accessible food waste, limited adoption demand, and inconsistent implementation of animal birth-control programs.',
          'One unsterilized female and her descendants can produce many puppies over time. When sterilization does not reach enough dogs in the same community, the population continues to replenish itself.',
        ],
      },
      {
        q: 'Why can\u2019t the dogs simply be taken to shelters?',
        a: [
          'With tens of millions of free-roaming dogs, there are nowhere near enough shelters, funding, staff, or adopters to house every dog humanely.',
          'Confining healthy community dogs for life is neither realistic nor necessarily humane. Overcrowded shelters can lead to stress, disease, conflict, and poor quality of life.',
          'A more sustainable approach is to spay or neuter, vaccinate, and return healthy community dogs to their familiar territories while rescuing those who are injured, sick, abandoned, or unable to survive safely outside.',
        ],
      },
      {
        q: 'What happens to puppies born on the streets?',
        a: [
          'Many street-born puppies face hunger, parasites, infectious disease, extreme weather, traffic, abuse, and separation from their mothers.',
          'Some are rescued or cared for by community members, but many become sick, are injured, or die before reaching adulthood. Prevention through spay/neuter is one of the most effective ways to stop this cycle before it begins.',
        ],
      },
      {
        q: 'What happens to injured or sick street dogs?',
        a: [
          'Outcomes depend heavily on where the dog is found and whether a rescuer, community caregiver, veterinarian, or organization has the resources to intervene.',
          'Some dogs receive treatment and recover. Others remain untreated because local rescuers are overwhelmed, veterinary facilities are limited, or funding is unavailable.',
          'Rosie\u2019s Heroes helps fund trauma care and medical treatment so that cost is less likely to stand between an injured dog and a chance to survive.',
        ],
      },
      {
        q: 'What can I do if I see a street dog in need?',
        a: [
          'If the dog is in immediate danger, contact a reputable local rescue organization, animal helpline, veterinarian, or municipal animal-welfare service.',
          'When it is safe to do so: take clear photographs or video; record the exact location; describe the dog\u2019s condition; note whether the dog is mobile, approachable, or in traffic; stay nearby until help arrives if you can do so safely; and offer water or food without forcing contact.',
          'Do not attempt to handle a frightened, aggressive, severely injured, or potentially rabid animal without trained assistance. If you are bitten or scratched, wash the area thoroughly with soap and running water for at least 15 minutes and seek medical care immediately.',
        ],
      },
      {
        q: 'Can one person really make a difference?',
        a: [
          'Yes. Every large movement begins with individual choices.',
          'One person can fund a sterilization, help an injured dog receive treatment, volunteer on a flight, foster a dog, organize a fundraiser, share an adoption post, or inspire others to care.',
          'You may not be able to help every dog\u2014but for the dog you help, the difference is everything.',
        ],
      },
      {
        q: 'Why does Rosie\u2019s Heroes focus on prevention?',
        a: [
          'Rescue saves the dog suffering in front of us. Prevention reduces how many dogs will suffer tomorrow.',
          'Spay/neuter and vaccination programs help prevent unwanted births, puppy deaths, rabies, and competition for limited resources. They can also reduce conflict between dogs and people over time.',
          'We believe both are necessary: compassionate intervention for dogs who need help now and sustained prevention to break the cycle for future generations.',
        ],
      },
    ],
  },
];
