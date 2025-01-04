export type Socials = {
  NAME: string;
  HREF: string;
  ICON: string;
}[];

export type Project = {
  TITLE: string;
  HREF: string;
}[];

export type Details = {
  TITLE: string;
  ICON: string;
}[];

export type Personal = {
  NAME: string;
  TITLE: string;
  DESCRIPTION: string;
  BIG_DESCRIPTION: string;
  PROFILE: string;
  DETAILS: Details;
  LINKS: Socials;
}

export type Techstack = {
  TITLE: string,
  LIST: Array<Array<string>>
}[]

export type Card = {
  TITLE: string;
  SUBTITLE?: Array<string>;
  DESCRIPTION: string;
  LIST?: Array<string>;
  URL?: string;
  VERTICAL?: boolean
}[]

export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  TECHSTACK: Techstack;
  WORK: Card;
  PIPELINE: Card;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  EDUCATION: Card;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};