// Central place to edit your portfolio content.
// Update the values below and every section of the site updates with them.

export const profile = {
  name: "Snehal Prajapati",
  title: "Full-Stack Software Engineer",
  location: "Gujarat, India",
  email: "snehal.prajapati.dev@gmail.com",
  phone: "+91 9106721561",
  // TODO: replace with your real LinkedIn / GitHub URLs
  linkedin: "https://linkedin.com/in/snehal-prajapati",
  github: "https://github.com/snehal-prajapati",
  resumeFile: "/Snehal-Prajapati-Resume.pdf",
  summary:
    "Full-Stack Software Engineer with 4.5+ years of experience designing and delivering scalable, production-grade applications across SaaS, government, and enterprise domains. I specialize in React, Angular, .NET Core, MS SQL, and Azure, with a strong track record of leading frontend modernization initiatives, driving performance improvements, and shipping high-impact features on systems serving thousands of daily active users.",
  heroTagline:
    "I build fast, reliable web applications — from legacy modernization to systems used by thousands of people every day.",
};

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "C#", "SQL", "HTML5", "CSS3", "Python (Basics)"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Angular", "Zustand", "Syncfusion", "MUI"],
  },
  {
    category: "Backend & APIs",
    items: [".NET / ASP.NET Core", "RESTful APIs", "Event-Driven Architecture", "MS SQL"],
  },
  {
    category: "Cloud",
    items: ["Microsoft Azure", "Azure Function Apps", "CosmosDB"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "Agile / Scrum", "Code Review", "MSAL / JWT"],
  },
];

export const experience = [
  {
    company: "MRI Software",
    role: "Software Engineer II",
    period: "July 2025 — Present",
    highlights: [
      "Contribute to Property Tree, a live cloud-based SaaS platform used across the APAC region for end-to-end property management, serving thousands of daily active users.",
      "Own critical product modules including Tenancy, Owner, and Property Management, covering invoicing, inspections, and receipting workflows.",
      "Led the migration of legacy AngularJS modules to React, modernizing frontend architecture and improving long-term maintainability.",
      "Delivered the Global Search feature end-to-end — a high-visibility capability enabling cross-module discovery.",
    ],
    stack: ["React", "AngularJS", ".NET", "MS SQL Server", "Microsoft Azure"],
  },
  {
    company: "Reflik",
    role: "Software Engineer",
    period: "June 2024 — July 2025",
    highlights: [
      "Architected and built a centralized Application Tracking System (ATS) consolidating real-time data from multiple distributed office databases.",
      "Designed and developed a full-stack admin portal with secure authentication using MSAL and JWT.",
      "Engineered an event-driven data pipeline using Azure Function Apps to orchestrate real-time data synchronization across SQL Server and CosmosDB.",
    ],
    stack: ["React", ".NET", "Azure Function Apps", "MS SQL Server", "CosmosDB", "MSAL", "JWT"],
  },
  {
    company: "Civica India",
    role: "Software Engineer",
    period: "Sep 2021 — June 2024",
    highlights: [
      "Worked on a government-grade Electoral Management System operating in a strict Agile/Scrum environment.",
      "Led a major refactor of a 1,500+ line monolithic component, decomposing it into modular, maintainable classes.",
      "Developed an Electors tree-grid using Syncfusion, enhancing hierarchical data visualization for large datasets.",
    ],
    stack: [".NET Core", "Entity Framework Core", "MS SQL Server", "Angular 12+"],
  },
];

export const projects = [
  {
    title: "Global Search",
    company: "MRI Software · Property Tree",
    period: "2025",
    summary:
      "A cross-module search capability that lets property managers instantly find tenancies, owners, properties, and records without navigating a deep menu tree.",
    problem:
      "Property Tree serves thousands of daily active users across APAC managing large portfolios. As the product grew, finding a specific tenancy, owner, or property record meant drilling through several nested screens — a real time cost for staff working through dozens of records a day.",
    approach: [
      "Designed and delivered the Global Search feature end-to-end, from UX flow through implementation.",
      "Worked across the React frontend and .NET / MS SQL backend to surface relevant results in real time.",
      "Coordinated the change as part of a broader migration of legacy AngularJS modules to React, keeping the feature consistent with the modernized architecture.",
    ],
    impact:
      "Shipped a high-visibility feature that cut the number of steps users need to locate a record, directly improving day-to-day efficiency for property management teams on a platform used across the APAC region.",
    stack: ["React", "AngularJS", ".NET", "MS SQL Server", "Microsoft Azure"],
  },
  {
    title: "Centralized Application Tracking System",
    company: "Reflik",
    period: "2024 — 2025",
    summary:
      "A full-stack ATS admin portal that consolidates real-time recruiting data from multiple distributed office databases into a single, secure view.",
    problem:
      "Recruiting data lived across several distributed office databases with no unified way to view or act on it in real time, making it hard for admins to get a consistent, up-to-date picture.",
    approach: [
      "Architected the system from the ground up, including the data model for consolidating records across offices.",
      "Built a full-stack admin portal with secure authentication using MSAL and JWT.",
      "Engineered an event-driven data pipeline with Azure Function Apps to keep SQL Server and CosmosDB in sync in real time.",
    ],
    impact:
      "Gave admins a single, secure, real-time source of truth for tracking applications across offices, replacing fragmented, database-by-database visibility.",
    stack: ["React", ".NET", "Azure Function Apps", "MS SQL Server", "CosmosDB", "MSAL", "JWT"],
  },
  {
    title: "Electors Tree-Grid",
    company: "Civica India · Electoral Management System",
    period: "2021 — 2024",
    summary:
      "A hierarchical tree-grid for visualizing large-scale electoral datasets, built for a government-grade Electoral Management System.",
    problem:
      "The Electoral Management System needed to present deeply hierarchical, large-scale elector data in a way that stayed usable and performant — a hard constraint in a strict Agile/Scrum, government-grade environment.",
    approach: [
      "Designed and developed an Electors tree-grid using the Syncfusion component library to handle large, nested datasets.",
      "Led a major refactor of a 1,500+ line monolithic component into modular, maintainable classes as part of the same effort.",
      "Built on .NET Core, Entity Framework Core, MS SQL Server, and Angular 12+.",
    ],
    impact:
      "Delivered a maintainable, hierarchical data visualization used in a production government system, while substantially improving the codebase's long-term maintainability.",
    stack: [".NET Core", "Entity Framework Core", "MS SQL Server", "Angular 12+", "Syncfusion"],
  },
];

export const education = {
  school: "Neotech Institute of Technology",
  degree: "Bachelor of Engineering — Computer Engineering",
  period: "2017 — 2021",
};
