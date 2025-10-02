import type { Metadata, Site, Personal, Details, Socials, Card, Techstack, Project } from "@types";

export const assets = import.meta.glob('/public/assets/*.svg', { eager: true, as: 'raw' });
export const tech = import.meta.glob('/public/tech/*.svg', { eager: true, as: 'raw' });

const personal_details: Details = [
  {
    TITLE: "Chennai, India",
    ICON: assets["/public/assets/map-pin.svg"]
  },
  {
    TITLE: "Tamil, English",
    ICON: assets["/public/assets/language.svg"]
  },
  {
    TITLE: "Male - Oct 04, 1997",
    ICON: assets["/public/assets/user.svg"]
  },
]

const personal_links: Socials = [
  {
    NAME: "Resume",
    HREF: "https://docs.google.com/document/d/142NpAq6fqHvnjxYzB1pFPOyH8lYTRpJWh-_iHGNNLpY/export?format=pdf",
    ICON: assets["/public/assets/download.svg"]

  },
  {
    NAME: "Email",
    HREF: "mailto:sharukhrahman.sr@gmail.com",
    ICON: assets["/public/assets/envelope.svg"]
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/sharukh-rahman-a411641a1/",
    ICON: assets["/public/assets/linkedin.svg"]
  },
  {
    NAME: "Github",
    HREF: "https://github.com/sharukhrahman97",
    ICON: assets["/public/assets/github.svg"]
  },
]

export const PERSONAL: Personal = {
  NAME: "Sharukh Rahman S",
  TITLE: "Full Stack Developer",
  DESCRIPTION: "A full stack developer and a hobbyist, familiar with Multi Modal GenAI, Nix, Docker, Kubernetes, microservice architecture and more. Can able to work on entire tech stack! Want to know more? Let's have a chat.",
  BIG_DESCRIPTION: "Full-stack developer with over 4 years of experience and my expertise includes designing and deploying solutions for mobile and web applications using MERN stack, Flutter, React Native, ElectronJS and Python with both SQL and NoSQL databases, including DevOps. I'm also familiar with Docker, Kubernetes, microservice architecture, GenAI & Nix. I have a proven track record of successful project deliveries.",
  PROFILE: "/personal/profile.jpg",
  DETAILS: personal_details,
  LINKS: personal_links
}

export const personal_projects: Project = [
  { TITLE: "Konsol", HREF: "https://github.com/sharukhrahman97/Konsol" },
  { TITLE: "GenAI", HREF: "https://github.com/sharukhrahman97/GenAI" },
  { TITLE: "DashDrop", HREF: "https://dashdrop.app" },
  { TITLE: "Live person counter", HREF: "https://github.com/sharukhrahman97/Line_Counter" },
  { TITLE: "Todo app", HREF: "https://github.com/sharukhrahman97/todo" },
  { TITLE: "Nix config", HREF: "https://github.com/sharukhrahman97/nix-config" },
  { TITLE: "Low Poly City", HREF: "https://github.com/sharukhrahman97/lowpolycity" }
]

export const techstack: Techstack = [
  {
    TITLE: "FrontEnd Stack",
    LIST: [
      [tech['/public/tech/reactjs.svg'], "ReactJS"],
      [tech['/public/tech/react-native.svg'], "React Native"],
      [tech['/public/tech/flutter.svg'], "Flutter"],
      [tech['/public/tech/electronjs.svg'], "Electron"],
      [tech['/public/tech/tauri.svg'], "Tauri"],
    ]
  },
  {
    TITLE: "BackEnd Stack",
    LIST: [
      [tech['/public/tech/nodejs.svg'], "NodeJS"],
      [tech['/public/tech/python.svg'], "Python"],
      [tech['/public/tech/gofiber.svg'], "GoFiber"],
      [tech['/public/tech/spring.svg'], "Spring Boot"],
      [tech['/public/tech/kafka.svg'], "Kafka"],
      [tech['/public/tech/postgresql.svg'], "PostgreSQL"],
      [tech['/public/tech/mysql.svg'], "MySQL"],
      [tech['/public/tech/mongodb.svg'], "MongoDB"],
      [tech['/public/tech/redis.svg'], "Redis"],
    ]
  },
  {
    TITLE: "DevOps Stack",
    LIST: [
      [tech['/public/tech/aws.svg'], "AWS"],
      [tech['/public/tech/docker.svg'], "Docker"],
      [tech['/public/tech/kubernetes.svg'], "Kubernetes"],
      [tech['/public/tech/nix.svg'], "Nix"],
    ]
  },
  {
    TITLE: "AI Stack",
    LIST: [
      [tech['/public/tech/langchain.svg'], "Langchain"],
      [tech['/public/tech/llamaindex.svg'], "Llamaindex"],
      [tech['/public/tech/meta.svg'], "Faiss"],
      [tech['/public/tech/openvino.svg'], "OpenVino"],
    ]
  },
  {
    TITLE: "Other Tools",
    LIST: [
      [tech['/public/tech/blender.svg'], "Blender"],
      [tech['/public/tech/freecad.svg'], "FreeCAD"],
      [tech['/public/tech/github.svg'], "Github"],
      [tech['/public/tech/jira.svg'], "Jira"],
      [tech['/public/tech/kicad.svg'], "KiCAD"],
      [tech['/public/tech/selenium.svg'], "Selenium"],
    ]
  },
]

export const site_work: Card = [
  {
    TITLE: "Full Stack Developer",
    SUBTITLE: ['Yitro Tech - Chennai, India', 'Oct 2024 - Present'],
    URL: "https://yitro.tech",
    DESCRIPTION: "Full-stack development across multiple products using React, Flutter, Python/FastAPI, and PostgreSQL. Led mobile teams and coordinated delivery of enterprise systems.",
    LIST: [
      "Developed React web frontends for Smartally (AI-driven ticket management) and Flutter mobile apps for Passride and Jobconnectz",
      "Engineered scalable backend services with Python/FastAPI & PostgreSQL using microservices architecture deployed with Docker",
      "Led mobile team for B2C app Passride and coordinated in-house team to deliver custom HRMS system",
      "Architected standalone microservices: notification (Kafka, Celery), blob storage, authentication (Casdoor), and location service (Redis)",
      "Implemented database migration service for seamless SQL schema updates across distributed pods"
    ]
  },
  {
    TITLE: "Full Stack Developer",
    SUBTITLE: ['RadioRoom - LYTUS GROUP Venture - Chennai, India', 'May 2024 - Oct 2024'],
    URL: "https://radioroom.co.in",
    DESCRIPTION: "Full-stack development of mobile and web applications using React Native, Node.js, and MySQL with Prisma ORM.",
    LIST: [
      "Integrated payment systems (Apple Subscriptions, RazorPay, Stripe) with secure webhook verification",
      "Enhanced application stability by fixing critical bugs and resolving unhandled crashes during updates",
      "Reduced loading times by 10x through backend parallel processing optimization"
    ]
  },
  {
    TITLE: "Full Stack Developer", 
    SUBTITLE: ['Zedbyte Software Solutions - Chennai, India', 'May 2021 - Dec 2023'],
    URL: "https://zedbyte.in",
    DESCRIPTION: "Full-stack development across mobile and web applications using Flutter, React, Node.js, Python with SQL/NoSQL databases. Led team deliverables and client coordination.",
    LIST: [
      "Built high-performance room search app (Flutter/Python) handling 10k requests/min, deployed on AWS EC2 and Google Play Store",
      "Engineered scalable comment system with Node.js/MongoDB and automated cleanup via Apache Airflow",
      "Implemented real-time location tracking using Python/Redis supporting 10K concurrent connections",
      "Designed ETL workflows with Airflow + PySpark for automated daily data processing from MongoDB",
      "Led sprint reviews, code reviews, and mentored junior developers to maintain code quality standards"
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
    TITLE: "KonSol",
    DESCRIPTION: "This will be a hardware project built using KMK firmware. KonSol will be a controller, a midi device and a keypad for creators supporting most of the apps. Plan is to use non movable components for maximum reliablity, cheaper and eco friendly option."
  },
]

export const site_education: Card = [
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
  TECHSTACK: techstack,
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
