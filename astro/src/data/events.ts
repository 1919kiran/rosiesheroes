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
  /** Set true once the event has happened — it moves to the Past Events list. */
  past?: boolean;
}

export const events: SiteEvent[] = [
  {
    id: "chai-compassion",
    title: "Chai & Compassion",
    date: "2026-10-24",
    month: "October",
    dateLabel: null,
    time: null,
    location: "Los Altos Community Center",
    blurb: "Silent auction and inaugural launch event.",
    note: null,
    past: true,
  },
  {
    id: "tricks-treats-tails",
    title: "Tricks, Treats & Tails",
    date: "2026-10-30",
    month: "October",
    dateLabel: null,
    time: "5:00 – 7:00 PM",
    location: "Treehouse Silicon Valley",
    blurb: "Halloween costume contest, with pupcakes and treats from Treats by Rumi.",
    note: null,
    past: true,
  },
  {
    id: "paws-and-portraits",
    title: "Paws and Portraits",
    date: null,
    month: "June 2026",
    dateLabel: null,
    time: null,
    location: "Shinn Park, Fremont",
    blurb: "Photoshoot celebrating dogs and their loved ones.",
    note: null,
    past: true,
  },
  {
    id: "hike-lake-del-valle",
    title: "Hike at Lake Del Valle",
    date: "2026-11-07",
    month: "November",
    dateLabel: null,
    time: null,
    location: "Lake Del Valle",
    blurb: "A group hike at Lake Del Valle.",
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
    month: "January 2027",
    dateLabel: "TBD, January",
    time: null,
    location: "Los Altos",
    blurb: "Wine and cheese mix and mingle.",
    note: null,
  },
  {
    id: "triveni-classical-arts",
    title: "Triveni Classical Arts Fundraiser",
    date: null,
    month: "March 2027",
    dateLabel: "TBD, March",
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
    month: "February 2027",
    dateLabel: "TBD, February",
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
    month: "February / March 2027",
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
    month: "June 2027",
    dateLabel: "TBD, June",
    time: null,
    location: "Livermore winery (to be confirmed)",
    blurb: "Ghazal night with wine and live music.",
    note: null,
  },
];
