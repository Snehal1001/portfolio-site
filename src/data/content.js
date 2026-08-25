// Central place to edit your portfolio content.
// Update the values below and every section of the site updates with them.

export const profile = {
  name: "Snehal Prajapati",
  title: "Full-Stack Software Engineer",
  location: "Gujarat, India",
  email: "snehal.prajapati.dev@gmail.com",
  phone: "+91 9106721561",
  // TODO: replace with your real LinkedIn / GitHub URLs
  linkedin: "https://www.linkedin.com/in/snehal-prajapati-582146184/",
  github: "https://github.com/Snehal1001",
  resumeFile: "/Snehal-Prajapati-Resume.pdf",
  runningHead: "Gujarat, India · Est. 2021",
  openingColumns: [
    "Five-plus years designing and delivering production-grade applications across SaaS, government, and enterprise domains — a property management platform used across APAC, a government-grade electoral management system, and a recruiting platform built to unify data from multiple distributed office databases.",
    "The work has centred on modernising legacy frontends and shipping features that matter: migrating AngularJS modules to React, refactoring a 1,500+ line component into modular classes, and delivering search and real-time data-sync capabilities used by thousands of daily active users.",
  ],
  statement:
    "I modernise legacy frontends, connect fragmented backend systems, and ship the features that were stuck behind both.",
  stats: [
    { value: "5+", label: "years designing and delivering production-grade applications across SaaS, government, and enterprise domains." },
    { value: "03", label: "domains — enterprise SaaS, government, and recruiting." },
    { value: "1,000s", label: "daily active users on Property Tree, the APAC SaaS platform where I own core product modules." },
  ],
};

export const index = [
  { num: "00", word: "Colophon", gloss: "Opening", id: "c-colophon" },
  { num: "01", word: "Statement", gloss: "About", id: "c-statement" },
  { num: "02", word: "Record", gloss: "Experience", id: "c-record" },
  { num: "03", word: "Plates", gloss: "Case studies", id: "c-plates" },
  { num: "04", word: "Apparatus", gloss: "Stack", id: "c-apparatus" },
  { num: "05", word: "Correspondence", gloss: "Contact", id: "c-correspondence" },
];

export const skills = [
  {
    category: "Languages",
    items: "TypeScript · JavaScript · C# · SQL · HTML5 · CSS3 · Python (basics)",
  },
  {
    category: "Frontend",
    items: "React.js · Angular · AngularJS · Zustand · Syncfusion Component Library · MUI",
  },
  {
    category: "Backend & APIs",
    items: ".NET / ASP.NET Core · RESTful APIs · Event-Driven Architecture · Entity Framework Core · MS SQL",
  },
  {
    category: "Cloud",
    items: "Microsoft Azure",
  },
  {
    category: "Tools & Practices",
    items: "Git · Agile / Scrum · Code Review · Kanban",
  },
];

export const experience = [
  {
    company: "MRI Software",
    role: "Software Engineer II",
    period: "Jul 2025 — Present",
    lede: "Property Tree is a live cloud-based SaaS platform used across the APAC region for end-to-end property management, serving thousands of daily active users. I own critical product modules — Tenancy, Owner, and Property Management — covering invoicing, inspections, and receipting workflows.",
    highlights: [
      "Led the migration of legacy AngularJS modules to React, modernising frontend architecture and improving long-term maintainability.",
      "Delivered the Global Search feature end-to-end — a high-visibility capability enabling cross-module discovery.",
    ],
    stack: "React · AngularJS · .NET · MS SQL Server · Microsoft Azure",
  },
  {
    company: "Reflik",
    role: "Software Engineer",
    period: "Jun 2024 — Jul 2025",
    lede: "Recruiting data lived across multiple distributed office databases with no centralised way to view it in real time. I architected and built the Application Tracking System (ATS) that consolidated it.",
    highlights: [
      "Architected and built a centralised Application Tracking System (ATS) consolidating real-time data from multiple distributed office databases.",
      "Designed and developed a full-stack admin portal with secure authentication using MSAL and JWT.",
      "Engineered an event-driven data pipeline using Azure Function Apps to orchestrate real-time data synchronisation across SQL Server and CosmosDB.",
    ],
    stack: "React · .NET · Azure Function Apps · MS SQL Server · CosmosDB · MSAL · JWT",
  },
  {
    company: "Civica India",
    role: "Software Engineer",
    period: "Sep 2021 — Jun 2024",
    lede: "A government-grade Electoral Management System, built in a strict Agile/Scrum environment.",
    highlights: [
      "Led a major refactor of a 1,500+ line monolithic component, decomposing it into modular, maintainable classes.",
      "Developed an Electors tree-grid using Syncfusion, enhancing hierarchical data visualisation for large datasets.",
    ],
    stack: ".NET Core · Entity Framework Core · MS SQL Server · Angular 12+",
  },
];

export const education = {
  school: "Neotech Institute of Technology",
  degree: "B.E. Computer Engineering",
  period: "2017 — 2021",
};

export const projects = [
  {
    numeral: "I",
    title: "Centralised ATS",
    company: "Reflik",
    period: "2024 — 2025",
    stack: "React · .NET · Azure Function Apps · MS SQL Server · CosmosDB · MSAL · JWT",
    summary:
      "A centralised Application Tracking System (ATS), architected and built from the ground up to consolidate real-time recruiting data from multiple distributed office databases.",
    diagram: "centralised-ats",
    figCaption: "Fig. II — real-time data consolidation from distributed office databases into one ATS",
    problem:
      "Recruiting data was split across multiple distributed office databases, with no centralised system to bring it together in real time.",
    decision:
      "Architected and built the ATS as a full-stack admin portal secured with MSAL and JWT, backed by an event-driven data pipeline on Azure Function Apps that synchronised SQL Server and CosmosDB in real time.",
    consequence:
      "A single, secured system for real-time recruiting data, replacing the disconnected office databases it consolidated.",
  },
  {
    numeral: "II",
    title: "Electors Tree-Grid",
    company: "Civica India · Electoral Management System",
    period: "2021 — 2024",
    stack: ".NET Core · Entity Framework Core · MS SQL Server · Angular 12+ · Syncfusion",
    summary:
      "A hierarchical tree-grid for visualising large-scale electoral data, built with Syncfusion inside a government-grade Electoral Management System.",
    diagram: "electors-tree-grid",
    figCaption: "Fig. III — a 1,500+ line component refactored, then visualised via a Syncfusion tree-grid",
    problem:
      "A 1,500+ line monolithic component had become hard to maintain, and the system needed a way to visualise deeply hierarchical elector data for large datasets.",
    decision:
      "Led a refactor of the component into modular, maintainable classes, then built the Electors tree-grid on Syncfusion to handle the hierarchical, large-dataset visualisation.",
    consequence:
      "A maintainable codebase and a tree-grid that made large, deeply nested electoral datasets usable, delivered in a strict Agile/Scrum, government-grade environment.",
  },
];
