import type { SiteEvent } from "@/lib/types";

export const events: SiteEvent[] = [
  {
    slug: "2019-conference",
    title: "Validate AI Conference 2019",
    dateLabel: "5 November 2019",
    location: "The Royal Society, London",
    status: "past",
    summary:
      "The inaugural conference on AI validity and maintenance, with opening remarks from Lord Willetts and leading speakers from government, industry and academia.",
    description: [
      "Algorithms touch every aspect of modern life. Validate AI convened representatives from public, private and academic sectors to share experiences, challenges and solutions for ensuring AI systems are fit for purpose, safe, reliable and trustworthy.",
      "Sessions covered dimensions of invalidity in AI, provable guarantees, multi-agent systems, self-driving assurance, graph machine learning, policing and ethics, with a closing panel on implementing ethical requirements in practice.",
    ],
    heroImage: "/images/royal-society.jpg",
    galleryImages: [
      "/images/events/2019-4795.jpg",
      "/images/events/2019-4956.jpg",
      "/images/events/2019-5345.jpg",
      "/images/events/2019-5578.jpg",
      "/images/events/2019-5626.jpg",
    ],
    speakerIds: [
      "david-willetts",
      "david-hand",
      "marta-kwiatkowska",
      "michael-wooldridge",
      "aldo-faisal",
      "frankie-kay",
      "shakeel-khan",
      "jasmine-grimsley",
      "jonathan-crook",
      "dan-kellett",
      "stan-boland",
      "iain-whiteside",
      "michael-bronstein",
      "pushmeet-kohli",
      "giles-herdale",
      "stephanie-hare",
      "zeynep-engin",
      "carly-kind",
      "martin-goodson",
      "tom-smith",
    ],
    publicationIds: ["2019-conference-white-paper"],
  },
  {
    slug: "2021-conference",
    title: "Validate AI Conference 2021",
    dateLabel: "2–3 December 2021",
    location: "Online",
    status: "past",
    summary:
      "Virtual conference on regulation, standards and frameworks to validate AI, population drift, and robust assurance systems including checklist approaches.",
    description: [
      "The Validate AI Conference was held online on the afternoons of 2–3 December 2021 (1pm to 5:20pm GMT), in partnership with the OR Society and others.",
      "The programme addressed vital issues of AI validation with speakers from the Alan Turing Institute, Oxford, Google DeepMind, ONS and more, fostering cross-sector learning between private, public and academic sectors.",
    ],
    heroImage: "/images/conference-panel.jpg",
    speakerIds: [
      "david-hand",
      "marta-kwiatkowska",
      "subramanian-ramamoorthy",
      "reema-patel",
      "tony-bellotti",
      "matthew-jones",
      "ara-darzi",
      "hutan-ashrafian",
      "malvika-sharan",
      "mark-kennedy",
      "maggie-philbin",
      "arthur-gwagwa",
      "zeynep-engin",
      "paul-martynenko",
      "yves-alexandre-de-montjoye",
      "marc-canellas",
      "shakeel-khan",
      "giles-herdale",
      "tom-smith",
      "ed-humpherson",
      "gavin-blackett",
    ],
    recordingIds: [
      {
        title: "Part 1 — Thursday 2 Dec (1pm to 3:05pm)",
        youtubeId: "jC-gZgZV9iQ",
      },
      {
        title: "Part 2 — Thursday 2 Dec (3:25pm to 5:30pm)",
        youtubeId: "BSqB6-HH6jo",
      },
      {
        title: "Part 3 — Friday 3 Dec (1pm to 3:05pm)",
        youtubeId: "El3Dd4PAdco",
      },
      {
        title: "Part 4 — Friday 3 Dec (3:25pm to 5:25pm)",
        youtubeId: "eGRFc5u92es",
      },
    ],
    publicationIds: ["2021-conference-programme", "predicting-through-a-crisis"],
  },
  {
    slug: "ai-assurance-masterclass-2025",
    title: "AI Assurance Masterclass",
    subtitle: "AI Assurance Masterclass Launch",
    dateLabel: "2–3 September 2025",
    location: "Imperial College London",
    status: "past",
    summary:
      "Two-day introduction to AI assurance across the development lifecycle, developed with Imperial DSI and the Operational Research Society.",
    description: [
      "Validate AI, Imperial DSI and the Operational Research Society collaborated to deliver this masterclass on the principles of AI assurance, ethics, legal compliance and technical best practice for predictive and generative AI.",
      "The programme explores the Six Pillars of AI Assurance, organisational skills, and the responsibilities of AI assurance teams to promote responsible deployment aligned with ethical and legal standards.",
    ],
    heroImage: "/images/events/masterclass-4981.jpg",
    galleryImages: [
      "/images/events/masterclass-2025-a.jpg",
      "/images/events/masterclass-2025-b.jpg",
    ],
    speakerIds: ["shakeel-khan", "david-hand", "mark-kennedy", "gavin-blackett"],
    relatedSlugs: ["ai-bias-masterclass-2025"],
  },
  {
    slug: "ai-bias-masterclass-2025",
    title: "AI Bias and Subpopulations Masterclass",
    subtitle: "AI Bias Masterclass Launch",
    dateLabel: "4 September 2025",
    location: "Imperial College London",
    status: "past",
    summary:
      "One-day session on forms of bias, subpopulation performance, and mitigating poor prediction in sub-populations.",
    description: [
      "The AI Bias Masterclass took place on 4 September 2025 as a one-day session at Imperial College London.",
      "Participants explored bias in AI systems and discussion aligned with Validate AI’s wider assurance masterclass programme.",
    ],
    heroImage: "/images/conference-speaker.jpg",
    speakerIds: ["shakeel-khan", "david-hand", "zeynep-engin"],
    relatedSlugs: ["ai-assurance-masterclass-2025"],
  },
  {
    slug: "roadshow",
    title: "AI Assurance and Certification Roadshow",
    dateLabel: "September 2023 – November 2024",
    location: "UK and international partner universities",
    status: "past",
    summary:
      "Workshop programme exploring evidence needed to assure AI, with university partners across Edinburgh, Southampton, Loughborough, Imperial, Vienna and Commonwealth capability building.",
    description: [
      "Validate AI partnered with its network to deliver workshops from July 2023, each hosted by a university with industry and government partners.",
      "Themes included third-party AI assurance and procurement (Edinburgh), operational research for trustworthy AI (Southampton), AI in education (Loughborough), AI Assurance as a Service (Imperial, 11 July 2024), taxation (Vienna, 15 May 2024), and Commonwealth capability building (26 February 2025).",
      "The roadshow produced discussion summaries, modular learning content for the Trustworthy AI Masterclass, and materials for future conferences and research funding applications.",
    ],
    heroImage: "/images/conference-audience.jpg",
    speakerIds: [],
    publicationIds: ["how-can-or-help-safe-ai", "inside-or-july-2024"],
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function getFeaturedEvent() {
  return events.find((event) => event.slug === "ai-assurance-masterclass-2025")!;
}

export function getEventsOverview() {
  return [...events].sort((a, b) => a.title.localeCompare(b.title));
}
