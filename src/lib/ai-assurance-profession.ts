export const professionPage = {
  title: "Supporting the development of the AI Assurance profession",
  eyebrow: "Our work",
} as const;

export const professionIntro =
  "Validate AI is proud to support the BCS-led AI Assurance Stakeholder Consortium and its work to establish AI assurance as a recognised and trusted profession.";

export const professionSections = [
  {
    id: "building",
    title: "Building the Profession",
    paragraphs: [
      "Supporting work on how AI assurance can scale across the UK and internationally, how the profession may develop over the next five years, the role of certification and professional registration, and the pathway towards formal professional recognition.",
    ],
  },
  {
    id: "skills",
    title: "Skills and Competencies",
    paragraphs: [
      "Helping define the skills, knowledge and competencies required to practise AI assurance effectively, drawing on established disciplines including cybersecurity, data science and internal audit.",
      "The long-term credibility of AI assurance will depend on more than frameworks and regulation. It will require a trusted professional community with recognised competencies, clear ethical standards, independence and accountability.",
      "Validate AI has long supported the development of professional capability in Responsible AI and AI assurance. We see the emergence of AI Assurance as a natural continuation of this work — and as one of the most important new professions of the AI era.",
    ],
  },
  {
    id: "international",
    title: "An international profession",
    paragraphs: [
      "The Consortium’s ambitions extend beyond the UK.",
      "Its work is exploring how AI assurance can be adopted and scaled internationally, alongside greater alignment between data standards, assurance approaches and international frameworks.",
      "With participation from organisations and experts across countries including the United Kingdom, Singapore and the United States, the initiative reflects the increasingly global nature of AI assurance.",
    ],
  },
] as const;

/** Phrases to emphasise within the intro (first match only). */
export const professionIntroEmphasis = "BCS-led AI Assurance Stakeholder Consortium";

export const professionInternationalEmphasis =
  "United Kingdom, Singapore and the United States";
