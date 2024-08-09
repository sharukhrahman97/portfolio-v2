import type { Metadata, Site, Personal, Details, Socials } from "@types";

const personal_details: Details = [
  {
    TITLE: "",
    ICON: ""
  }
]

export const PERSONAL: Personal = {
  NAME: "",
  TITLE: "",
  DESCRIPTION: "",
  PROFILE: "",
  DETAILS: personal_details,
  LINKS: []
}

export const SITE: Site = {
  TITLE: "Astro Micro",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  NUM_POSTS_ON_HOMEPAGE: 6,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};
