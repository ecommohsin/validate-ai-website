/**
 * AI Assurance Forum — add editions, speakers, and resources here.
 * Keep separate from AI Assurance Profession content.
 */

export type ForumResource = {
  id: string;
  title: string;
  href: string;
  date?: string;
};

export type ForumSpeaker = {
  personId?: string;
  name: string;
  role?: string;
};

export type ForumEdition = {
  id: string;
  title: string;
  dateLabel?: string;
  location?: string;
  summary?: string;
  speakerIds?: string[];
  speakers?: ForumSpeaker[];
  resourceIds?: string[];
};

export const forumPage = {
  title: "AI Assurance Forum",
  /** Short intro when ready; leave empty to omit the header description. */
  intro: "",
} as const;

export const forumUpcoming: ForumEdition[] = [];

export const forumPast: ForumEdition[] = [];

export const forumResources: ForumResource[] = [];
