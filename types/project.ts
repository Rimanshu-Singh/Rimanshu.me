export interface Project {
  id: string;
  number?: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  badge?: string;
  image?: string;
  gradient?: string;
  liveLink?: string;
  githubLink?: string;
  tags: string[];
  mainTags?: string[];
  date?: string;
  tweetUrl?: string;
  isNew?: boolean;
}
