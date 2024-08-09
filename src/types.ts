export type Socials = {
  NAME: string;
  HREF: string;
  ICON: string;
};

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
  LINKS: Array<Socials>;
}

export type Card = {
  TITLE: string;
  SUBTITLE?: string;
  DESCRIPTION: string;
  LIST?: Array<string>;
  URL?: string;
}

export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  WORK: Array<Card>;
  PIPELINE: Array<Card>;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  EDUCATION: Array<Card>;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};