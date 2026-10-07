export const site = {
  name: "Validate AI",
  tagline: "Enabling trusted AI systems",
  email: "contact@validateai.org",
  twitter: "https://www.x.com/Validate_AI",
  twitterHandle: "@Validate_AI",
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our Work" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
] as const;

export const footerNav = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Our Work" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
] as const;

export const sectors = [
  "Government",
  "Industry",
  "Academia",
  "Standards",
  "Civil Society",
] as const;

export const stats = [
  {
    value: "5+",
    label: "years advancing trustworthy AI",
    placeholder: false,
  },
  {
    value: "XX+",
    label: "events and forums",
    placeholder: true,
  },
  {
    value: "XX+",
    label: "expert contributors",
    placeholder: true,
  },
  {
    value: "XX+",
    label: "organisations engaged",
    placeholder: true,
  },
] as const;

export const workAreas = [
  {
    id: "assurance",
    title: "AI Assurance",
    description:
      "Methods and practice for showing that AI systems are reliable, safe and fit for purpose.",
    href: "/work",
  },
  {
    id: "risk",
    title: "AI Risk",
    description:
      "Actionable frameworks for identifying, assessing and managing risk across the AI lifecycle.",
    href: "/resources",
  },
  {
    id: "responsible",
    title: "Responsible AI",
    description:
      "Ethical, legal and accountable implementation — from fairness and bias to public trust.",
    href: "/about",
  },
  {
    id: "profession",
    title: "Professionalisation",
    description:
      "Skills, standards and professional practice for the emerging AI assurance workforce.",
    href: "/events",
  },
] as const;
