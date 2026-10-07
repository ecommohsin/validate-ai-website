import type { Publication } from "@/lib/types";

export const publications: Publication[] = [
  {
    id: "predicting-through-a-crisis",
    title: "Predicting through a crisis",
    category: "Research",
    date: "January 2021",
    description:
      "Looking at the COVID-19 impact on AI stability and building trust to validate AI.",
    file: "/documents/predicting-through-a-crisis.pdf",
    featured: true,
  },
  {
    id: "2019-conference-white-paper",
    title: "2019 Conference white paper",
    category: "Research",
    date: "November 2019",
    description:
      "Insights from the inaugural Validate AI conference at the Royal Society.",
    file: "/documents/2019-conference-white-paper.pdf",
  },
  {
    id: "2021-conference-programme",
    title: "Validate AI Conference 2021 programme",
    category: "Events",
    date: "December 2021",
    description:
      "Agenda for the virtual Validate AI conference held on 2–3 December 2021.",
    file: "/documents/2021-conference-programme.pdf",
  },
  {
    id: "how-can-or-help-safe-ai",
    title: "How can OR help to deliver safe AI",
    category: "Roadshow",
    date: "2024",
    description:
      "Output from the University of Southampton roadshow workshop on operational research and trustworthy AI.",
    file: "/documents/how-can-or-help-to-deliver-safe-ai.pdf",
  },
  {
    id: "inside-or-july-2024",
    title: "Inside OR — July 2024",
    category: "Roadshow",
    date: "July 2024",
    description: "Operational Research Society article related to the AI assurance roadshow.",
    file: "/documents/inside-or-july-2024.pdf",
  },
];

export function getPublication(id: string) {
  return publications.find((item) => item.id === id);
}

export function getFeaturedPublication() {
  return publications.find((item) => item.featured) ?? publications[0];
}

export function getHomePublications() {
  const featured = getFeaturedPublication();
  const secondary = publications.find((item) => item.id === "2019-conference-white-paper");
  return { featured, secondary };
}
