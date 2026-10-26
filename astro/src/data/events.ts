// Rosie's Heroes — events for the calendar.
// Source: the "Community Events" sheet (plus the Dublin Diwali Mela).
// To add an event: add an entry here. Dated events show on the month grid;
// events with date: null show under "Date to be announced" (with dateLabel
// when the sheet gives a rough window, e.g. "TBD, December").
// To use a real flyer image later, set flyer to a path under /public/images/
// (e.g. "/images/events/diwali-mela.jpg"). While flyer is null, the detail
// panel shows a styled flyer card with the event name, date, and location.
// Note: internal "next steps" from the sheet are deliberately NOT shown here
// — only public-facing details go on the website.

export interface SiteEvent {
  id: string;
  title: string;
  /** ISO date (YYYY-MM-DD) for dated events, or null for TBD events. */
  date: string | null;
  /** Rough window shown for TBD events, e.g. "TBD, December". */
  dateLabel: string | null;
  time: string | null;
  location: string;
  blurb: string;
  /** Small status line shown in the detail panel, or null. */
  note: string | null;
  flyer: string | null;
}

export const events: SiteEvent[] = [
  {
    id: "tricks-treats-tails",
    title: "Tricks, Treats & Tails",
    date: "2026-10-30",
    dateLabel: null,
    time: "5:00 – 7:00 PM",
    location: "Beer garden, Treehouse Silicon Valley",
    blurb:
      "Pupcakes from Treats by Rumi, with a portion of proceeds providing care for rescue dogs.",
    note: null,
    flyer: null,
  },
  {
    id: "dublin-diwali-mela",
    title: "Dublin Diwali Mela",
    date: "2026-11-07",
    dateLabel: null,
    time: "11:00 AM – 8:00 PM",
    location: "Emerald Glen Park, Dublin",
    blurb:
      "Shop Indian-themed dog clothing, with proceeds providing care for rescue dogs.",
    note: "Event date confirmed. Booth confirmation pending.",
    flyer: null,
  },
  {
    id: "paws-petals",
    title: "Paws & Petals",
    date: "2026-11-14",
    dateLabel: null,
    time: "11:00 AM – 1:00 PM",
    location: "Event lawn, Treehouse Silicon Valley",
    blurb:
      "Pressed flower arts & crafts, dog friendly, with a fall fashion contest for dogs. $60 per person, with $40 from each ticket providing care for rescue dogs.",
    note: null,
    flyer: null,
  },
  {
    id: "wine-cheese",
    title: "Wine & Cheese",
    date: null,
    dateLabel: "TBD, December",
    time: null,
    location: "Los Altos",
    blurb: "Wine and cheese holiday mix and mingle.",
    note: null,
    flyer: null,
  },
  {
    id: "triveni-classical-arts",
    title: "Triveni Classical Arts Fundraiser",
    date: null,
    dateLabel: "TBD, December or mid-January",
    time: null,
    location: "San Ramon",
    blurb:
      "An evening of pan-India classical arts — bharatanatyam, kathak, santoor, and Hindustani music.",
    note: null,
    flyer: null,
  },
  {
    id: "adoption-fair",
    title: "Adoption Fair",
    date: null,
    dateLabel: "TBD, mid-January or February",
    time: null,
    location: "City Center Bishop Ranch",
    blurb:
      "Adoption fair with local vendors, DJs, and rescues — help more dogs find homes.",
    note: null,
    flyer: null,
  },
  {
    id: "paws-reps",
    title: "Paws & Reps",
    date: null,
    dateLabel: "TBD, February/March",
    time: null,
    location: "Santa Clara",
    blurb:
      "A people-and-dog fitness group class hosted by Bay Area K9, with pup donuts from Treats by Rumi. All event profits go towards rescue.",
    note: null,
    flyer: null,
  },
  {
    id: "mehfil-with-heart",
    title: "Mehfil with Heart",
    date: null,
    dateLabel: "TBD, June",
    time: null,
    location: "Livermore winery (to be confirmed)",
    blurb: "Ghazal night with wine and live music.",
    note: null,
    flyer: null,
  },
];
