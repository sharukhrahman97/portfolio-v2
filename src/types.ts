export type Socials = {
  NAME: string;
  HREF: string;
  ICON: string;
}[];

export type Details = {
  TITLE: string;
  ICON: string;
}[];

export type Personal = {
  NAME: string;
  TITLE: string;
  DESCRIPTION: string;
  PROFILE: string;
  DETAILS: Details;
  LINKS: Socials;
}

export type Card = {
  TITLE: string;
  SUBTITLE?: Array<string>;
  DESCRIPTION: string;
  LIST?: Array<string>;
  URL?: string;
}[]

export type Site = {
  TITLE: string;
  DESCRIPTION: string;
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