export type Person = {
  id: string;
  name: string;
  role?: string;
  bio: string;
  image?: string;
};

export type Partner = {
  id: string;
  name: string;
  description: string;
  logo: string;
};

export type Publication = {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  file: string;
  featured?: boolean;
};

export type EventRecording = {
  title: string;
  youtubeId: string;
};

export type SiteEvent = {
  slug: string;
  title: string;
  subtitle?: string;
  dateLabel: string;
  location: string;
  status: "past" | "upcoming";
  summary: string;
  description: string[];
  heroImage: string;
  galleryImages?: string[];
  speakerIds?: string[];
  recordingIds?: EventRecording[];
  publicationIds?: string[];
  relatedSlugs?: string[];
};
