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
  TITLE: "Full Stack & AI Systems Engineer",
  DESCRIPTION: "Full-Stack & AI Systems Engineer with 5+ years of experience architecting high-throughput microservices, event-driven platforms, and AI-native applications. Expert in FastAPI, React, Postgres, Redis, Kafka, Casdoor, and APISIX. Adept at integrating DeepSeek LLMs, optimizing system performance, and delivering enterprise-grade microservices for scalable, high-impact environments.",
  BIG_DESCRIPTION: "Full-Stack & AI Systems Engineer with 5+ years of experience architecting high-throughput microservices, event-driven platforms, and AI-native applications. Expert in FastAPI, React, Postgres, Redis, Kafka, Casdoor, and APISIX, with proven mastery in spec-driven development (OpenSpec) and local cloud emulation using ministack (S3, Lambda, triggers). Adept at integrating DeepSeek LLMs, optimizing system performance, and delivering enterprise-grade microservices for scalable, high-impact environments.",
  PROFILE: "/personal/profile.jpg",
  DETAILS: personal_details,
  LINKS: personal_links
}

export const personal_projects: Project = [
  { TITLE: "Fluidic E-Commerce Application", HREF: "https://github.com/sharukhrahman97" },
  { TITLE: "Modular GenAI Workflow Engine", HREF: "https://github.com/sharukhrahman97/GenAI" },
  { TITLE: "Full-Stack Enterprise Task Management System", HREF: "https://github.com/sharukhrahman97" },
  { TITLE: "Interactive 3D Web Application", HREF: "https://github.com/sharukhrahman97/lowpolycity" },
  { TITLE: "Custom Hardware Control Console (Konsol)", HREF: "https://github.com/sharukhrahman97/Konsol" },
  { TITLE: "Real-Time Computer Vision Counter", HREF: "https://github.com/sharukhrahman97/Line_Counter" },
  { TITLE: "IoT Wake-on-LAN Controller", HREF: "https://github.com/sharukhrahman97" },
  { TITLE: "Automated PDF-to-Video Pipeline", HREF: "https://github.com/sharukhrahman97" },
]

export const techstack: Techstack = [
  {
    TITLE: "Languages",
    LIST: [
      [tech['/public/tech/python.svg'], "Python"],
      [tech['/public/tech/javascript.svg'], "JavaScript"],
      [tech['/public/tech/dart.svg'], "Dart"],
      [tech['/public/tech/golang.svg'], "Go"],
    ]
  },
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
    TITLE: "BackEnd & AI Frameworks",
    LIST: [
      [tech['/public/tech/fastapi.svg'], "FastAPI"],
      [tech['/public/tech/gofiber.svg'], "GoFiber"],
      [tech['/public/tech/expressjs.svg'], "Express.js"],
      [tech['/public/tech/spring.svg'], "Spring Boot"],
      [tech['/public/tech/langchain.svg'], "LangChain"],
      [tech['/public/tech/llamaindex.svg'], "LlamaIndex"],
      [tech['/public/tech/deepseek.svg'], "DeepSeek"],
      [tech['/public/tech/openvino.svg'], "OpenVINO"],
      [tech['/public/tech/openspec.svg'], "OpenSpec"],
      [tech['/public/tech/sqlalchemy.svg'], "SQLAlchemy"],
      [tech['/public/tech/prisma.svg'], "Prisma ORM"],
    ]
  },
  {
    TITLE: "Databases & Caching",
    LIST: [
      [tech['/public/tech/postgresql.svg'], "PostgreSQL"],
      [tech['/public/tech/mysql.svg'], "MySQL"],
      [tech['/public/tech/mongodb.svg'], "MongoDB"],
      [tech['/public/tech/redis.svg'], "Redis"],
      [tech['/public/tech/qdrant.svg'], "Qdrant"],
      [tech['/public/tech/clickhouse.svg'], "ClickHouse"],
      [tech['/public/tech/scylladb.svg'], "ScyllaDB"],
      [tech['/public/tech/meta.svg'], "FAISS"],
    ]
  },
  {
    TITLE: "DevOps & Platforms",
    LIST: [
      [tech['/public/tech/aws.svg'], "AWS (EC2, S3, Bedrock)"],
      [tech['/public/tech/docker.svg'], "Docker"],
      [tech['/public/tech/nix.svg'], "Nix"],
      [tech['/public/tech/kafka.svg'], "Kafka"],
      [tech['/public/tech/apisix.svg'], "APISIX"],
      [tech['/public/tech/github.svg'], "GitHub (repo & actions)"],
      [tech['/public/tech/spark.svg'], "PySpark"],
      [tech['/public/tech/blender.svg'], "Blender"],
      [tech['/public/tech/freecad.svg'], "FreeCAD"],
      [tech['/public/tech/kicad.svg'], "KiCAD"],
      [tech['/public/tech/jira.svg'], "Jira"],
      [tech['/public/tech/selenium.svg'], "Selenium"],
    ]
  },
]

export const site_work: Card = [
  {
    TITLE: "Full Stack Developer",
    SUBTITLE: ['Yitro Technology Solutions - Chennai, India', 'Oct 2024 - Present'],
    URL: "https://yitro.tech",
    DESCRIPTION: "Architected high-throughput microservices using FastAPI, APISIX API gateway, and Casdoor auth for enterprise clients. Engineered event-driven platforms utilizing Kafka, Redis, and Postgres, enforcing spec-driven development with OpenSpec.",
    LIST: [
      "Architected high-throughput microservices using FastAPI, APISIX API gateway, and Casdoor auth for enterprise clients",
      "Engineered event-driven platforms utilizing Kafka, Redis, and Postgres, enforcing spec-driven development with OpenSpec",
      "Developed React frontends and integrated DeepSeek LLM models into FastAPI backends, accelerating document parsing and automated workflows",
      "Utilized ministack to emulate S3 and Lambda trigger environments locally, streamlining cloud-native integration and local testing",
      "Delivered resilient, isolated microservices deployed with Docker and Kubernetes for scalable production environments",
      "Led and developed Smartally v2.0 — an AI backend learning platform engineered with LlamaIndex, Qdrant as vector DB, hosted AI on AWS Bedrock",
      "Led and developed Clavis — a new face of ATS with integrations to Teams and LinkedIn powered by a resume parser using System One model called Laya"
    ]
  },
  {
    TITLE: "Full Stack Developer",
    SUBTITLE: ['Radioreoom, A Lytus Group Venture - Chennai, India', 'May 2024 - Oct 2024'],
    URL: "https://radioroom.co.in",
    DESCRIPTION: "Built cross-platform web and mobile frontends using React, connected to high-performance REST APIs and real-time data pipelines.",
    LIST: [
      "Built cross-platform web and mobile frontends using React, connected to high-performance REST APIs and real-time data pipelines",
      "Optimized database queries and transaction caching with Postgres and Redis, achieving seamless real-time syncing",
      "Implemented secure payment gateways and webhooks with robust exception handling to ensure continuous stability",
      "Optimized backend performance through parallel processing, reducing application loading times by 10x"
    ]
  },
  {
    TITLE: "Full Stack Developer",
    SUBTITLE: ['Zedbyte Software Solutions - Chennai, India', 'May 2021 - Dec 2023'],
    URL: "https://zedbyte.in",
    DESCRIPTION: "Engineered real-time backend services using FastAPI and Redis, handling up to 10k requests/minute on AWS EC2. Designed automated backend data pipelines and asynchronous processing tasks.",
    LIST: [
      "Engineered real-time backend services using FastAPI and Redis, handling up to 10k requests/minute on AWS EC2",
      "Designed automated backend data pipelines and asynchronous processing tasks using Python, Postgres, and Redis background queues",
      "Implemented a real-time location tracking service using Python and Redis, supporting 10K concurrent connections",
      "Designed and deployed automated data processing workflows using PySpark to process daily trip data from MongoDB"
    ]
  },
]

const site_pipeline: Card = [
  {
    TITLE: "Spec-Driven Development with OpenSpec",
    DESCRIPTION: "Standardizing API contract-first workflows across all microservices at Yitro — writing OpenSpec specs before implementation to enforce consistency, reduce drift, and enable parallel frontend/backend delivery."
  },
  {
    TITLE: "Local Cloud Emulation with Ministack",
    DESCRIPTION: "Building a local dev environment that emulates S3, Lambda, and trigger semantics using ministack so cloud-native integrations can be tested end-to-end before ever touching AWS."
  },
  {
    TITLE: "AI-Native Microservices at Scale",
    DESCRIPTION: "Deepening the integration of DeepSeek LLMs into FastAPI backends for document parsing and workflow automation — targeting lower latency, higher throughput, and tighter observability across the pipeline."
  },
  {
    TITLE: "Event-Driven Architecture Maturity",
    DESCRIPTION: "Evolving Kafka + Redis + Postgres event pipelines toward stronger exactly-once guarantees, dead-letter handling, and backpressure — turning ad-hoc consumers into a coherent event platform."
  },
  {
    TITLE: "RAG & Vector Search Expansion",
    DESCRIPTION: "Growing the LlamaIndex + Qdrant + AWS Bedrock stack behind Smartally v2.0 — better chunking, hybrid retrieval, and evaluation harnesses for measurable answer quality."
  },
  {
    TITLE: "Edge Inference with OpenVINO",
    DESCRIPTION: "Pushing the Modular GenAI Workflow Engine further into low-latency edge inference — quantizing models, optimizing pipelines, and benchmarking against cloud-hosted baselines."
  },
]

export const site_education: Card = [
  {
    TITLE: "M.Tech - Computer Science & Engineering",
    SUBTITLE: ['B.S Abdur Rahman Crescent Institute of Science & Technology - Chennai, India', "Jun 2019 - Mar 2021"],
    DESCRIPTION: "Thesis on comparing the decentralized consensus algorithms"
  },
  {
    TITLE: "B.E - Computer Science & Engineering",
    SUBTITLE: ["St. Peter's College of Engineering and Technology - Chennai, India", "Aug 2015 - May 2019"],
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
