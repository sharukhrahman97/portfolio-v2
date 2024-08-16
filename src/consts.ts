import type { Metadata, Site, Personal, Details, Socials, Card } from "@types";

const personal_details: Details = [
  {
    TITLE: "Chennai, India",
    ICON: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"/>
</svg>
`
  },
  {
    TITLE: "Tamil, English",
    ICON: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15"/>
</svg>
`
  },
  {
    TITLE: "Male - Oct 04, 1997",
    ICON: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
`
  },
]

const personal_links: Socials = [
  {
    NAME: "Resume",
    HREF: "/public/assets/resume-en.pdf",
    ICON: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
</svg>
`
  },
  {
    NAME: "Email",
    HREF: "mailto:sharukhrahman.sr@gmail.com",
    ICON: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
</svg>
`
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/sharukh-rahman-a411641a1/",
    ICON: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
</svg>
`
  },
  {
    NAME: "Github",
    HREF: "https://github.com/sharukhrahman97",
    ICON: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
</svg>
`
  },
]

export const PERSONAL: Personal = {
  NAME: "Sharukh Rahman S",
  TITLE: "Full Stack Developer",
  DESCRIPTION: "A full stack developer, quick learner and a hobbyist. Familiar with MVC patterns, Docker, Kubernetes, microservice architecture and more. Want to know more? Let's have a chat.",
  PROFILE: "/public/assets/profile.jpg",
  DETAILS: personal_details,
  LINKS: personal_links
}

const site_work: Card = [
  {
    TITLE: "Full Stack Developer",
    SUBTITLE: ['RadioRoom - LYTUS GROUP Venture - Chennai,India', 'May 2024 - Present'],
    URL: "https://radioroom.co.in",
    DESCRIPTION: "Responsible to design, develop, and deploy mobile applications and web servers applications, especially in React Native, Node.js, having MySQL database using Prisma ORM.",
    LIST: [
      "Integrated and fixed all payment systems made through the app, including apple subscriptions, razorpay and stripe and integrated respective webhooks for verification.",
      "Stablized the app which is done by bug fixing and rectified unhandled crashes mainly during in app updates.",
      "Reduced loading times in the app by 10 times using parallel processing on backend components.",
    ]
  },
  {
    TITLE: "Full Stack Developer",
    SUBTITLE: ['Zedbyte Software Solutions - Chennai,India', 'May 2021 - Dec 2023'],
    URL: "https://zedbyte.in",
    DESCRIPTION: "Responsible to design, develop, and deploy mobile applications and web servers applications, especially in Flutter, ReactJS, Node.js, Python with both SQL and NoSQL databases. Handled client meets, onboarded new developers, meet product deliveries were my goals.",
    LIST: [
      "Developed a high-performance room/home searching app with Rest APIs (Python-Starlette), AWS S3, MongoDB, and a Flutter/Dart mobile app. The app can handle 10k requests/min and searches over 100,000 houses in less than 100ms. The app is hosted on EC2 and available on the Google Play Store.",
      "Engineered a comment system using Node.js and MongoDB, featuring a capability to delete entire comment/blog structures through Airflow jobs.",
      "Implemented a live location tracking and monitoring tool using Redis and Python, capable of handling nearly 10k messages/second for 10K simultaneous connections.",
      "Designed and deployed a robust Airflow job, integrating with PySpark for efficient and automated extraction, transformation, and loading (ETL) of daily trip data stored in MongoDB.",
      "Collaborated on the development of a social media app with versatile post/comment structures and follow logic.",
      "Led sprint reviews, code reviews, and mentored junior developers to maintain high-quality code standards,fostering a culture of excellence and continuous improvement.",
    ]
  },
]

const site_pipeline: Card = [
  {
    TITLE: "Home network revamp",
    DESCRIPTION: "Create a home server, access my windows machine and server using mac seamlessly and remotely using a managed switch behind a firewall."
  },
  {
    TITLE: "Learn & Hone Nix OS",
    DESCRIPTION: "Creating a reproducible and reliable build using the power of nix config files and using the nix package manager as a drop in replacement for homebrew. Learn and hone nix shells and flakes and when and where to use it. Learn about nix home managers."
  },
  {
    TITLE: "DashDrop 2.0",
    DESCRIPTION: "One of my proud pet projects, where rewriting the entire codebase to rust using tauri framework and backend to golang fiber framework. And adding some features using FFMPEG library."
  },
  {
    TITLE: "ConSol",
    DESCRIPTION: "This will be a hardware project and planning to integrate into dashdrop once its done. ConSol will be a controller, a midi device and a keypad for creators supporting most of the apps. Plan is to use non movable components for maximum reliablity, cheaper and eco friendly option."
  },
]

const site_education: Card = [
  {
    TITLE: "M.Tech - Computer Science & Engineering",
    SUBTITLE: ['B.S Abdur Rahman Crescent Institute of Science & Technology - Chennai,India', "Jun 2019 - Mar 2021"],
    DESCRIPTION: "Thesis on comparing the decentralized consensus algorithms"
  },
  {
    TITLE: "B.E - Computer Science & Engineering",
    SUBTITLE: ["St. Peter's College of Engineering and Technology - Chennai,India", "Aug 2015 - May 2019"],
    DESCRIPTION: "Project on drone collision avoidance system (DCAS)"
  },
]

export const SITE: Site = {
  TITLE: "Portfolio",
  DESCRIPTION: "Lightweight portfolio built using Astro & Tailwind.",
  WORK: site_work,
  PIPELINE: site_pipeline,
  NUM_POSTS_ON_HOMEPAGE: 6,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  EDUCATION: site_education
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Landing Page.",
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
