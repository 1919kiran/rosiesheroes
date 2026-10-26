// Rosie's Heroes — events for the calendar.
// Source: the "Community Events" sheet (plus the Dublin Diwali Mela).
// Dated events also live on the public "Rosie's Heroes Events" Google
// Calendar (rosiesheroes@gmail.com), which is embedded in the Events section.
// To add an event: add an entry here. Note: internal "next steps" from the
// sheet are deliberately NOT shown here — only public-facing details go on
// the website.

export interface SiteEvent {
  id: string;
  title: string;
  /** ISO date (YYYY-MM-DD) for dated events, or null for TBD events. */
  date: string | null;
  /** Month shown in the upcoming list, e.g. "October" or "February / March". */
  month: string;
  /** Rough window shown for TBD events, e.g. "TBD, December". */
  dateLabel: string | null;
  time: string | null;
  location: string;
  blurb: string;
  /** Small status line shown in the event card, or null. */
  note: string | null;
}

export const events: SiteEvent[] = [
  {
    id: "tricks-treats-tails",
    title: "Tricks, Treats & Tails",
    date: "2026-10-30",
    month: "October",
    dateLabel: null,
    time: "5:00 – 7:00 PM",
    location: "Beer garden, Treehouse Silicon Valley",
    blurb: "Pupcakes from Treats by Rumi.",
    note: null,
  },
  {
    id: "paws-petals",
    title: "Paws & Petals",
    date: "2026-11-14",
    month: "November",
    dateLabel: null,
    time: "11:00 AM – 1:00 PM",
    location: "Event lawn, Treehouse Silicon Valley",
    blurb:
      "Pressed flower arts & crafts, dog friendly, with a fall fashion contest for dogs.",
    note: null,
  },
  {
    id: "wine-cheese",
    title: "Wine & Cheese",
    date: null,
    month: "December",
    dateLabel: "TBD, December",
    time: null,
    location: "Los Altos",
    blurb: "Wine and cheese holiday mix and mingle.",
    note: null,
  },
  {
    id: "triveni-classical-arts",
    title: "Triveni Classical Arts Fundraiser",
    date: null,
    month: "December / January",
    dateLabel: "TBD, December or mid-January",
    time: null,
    location: "San Ramon",
    blurb:
      "An evening of pan-India classical arts — bharatanatyam, kathak, santoor, and Hindustani music.",
    note: null,
  },
  {
    id: "adoption-fair",
    title: "Adoption Fair",
    date: null,
    month: "January / February",
    dateLabel: "TBD, mid-January or February",
    time: null,
    location: "City Center Bishop Ranch",
    blurb:
      "Adoption fair with local vendors, DJs, and rescues — help more dogs find homes.",
    note: null,
  },
  {
    id: "paws-reps",
    title: "Paws & Reps",
    date: null,
    month: "February / March",
    dateLabel: "TBD, February/March",
    time: null,
    location: "Santa Clara",
    blurb:
      "A people-and-dog fitness group class hosted by Bay Area K9, with pup donuts from Treats by Rumi.",
    note: null,
  },
  {
    id: "mehfil-with-heart",
    title: "Mehfil with Heart",
    date: null,
    month: "June",
    dateLabel: "TBD, June",
    time: null,
    location: "Livermore winery (to be confirmed)",
    blurb: "Ghazal night with wine and live music.",
    note: null,
  },
];
