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
  runningHead: "Gujarat, India · Est. 2021",
  openingColumns: [
    "Five plus years spent on systems that cannot afford to break — property management SaaS serving thousands of daily users across APAC, a government electoral register, a recruiting platform stitched together from a dozen scattered databases.",
    "The work is mostly unglamorous and entirely consequential: migrating legacy AngularJS to React without a freeze, decomposing a 1,500-line component, making a search box return the right record on the first keystroke.",
  ],
  statement:
    "I take production systems that have grown past their original architecture and make them behave — modernising the frontend, straightening the data flow, and shipping the feature that was blocked behind both.",
  stats: [
    { value: "5+", label: "years shipping production code, all of it on systems with real users on the other end." },
    { value: "03", label: "domains — enterprise SaaS, government, and recruiting — each with its own definition of “cannot fail”." },
    { value: "1", unit: "k+", label: "daily active users on Property Tree, the APAC platform I own modules in." },
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
    category: "Frontend",
    items: "React.js · Angular · AngularJS migration · TypeScript · JavaScript · Zustand · Syncfusion · MUI · HTML5 · CSS3",
  },
  {
    category: "Backend & APIs",
    items: ".NET / ASP.NET Core · C# · RESTful APIs · event-driven architecture · Entity Framework Core",
  },
  {
    category: "Data",
    items: "MS SQL Server · CosmosDB · SQL · schema and query design for paged hierarchies",
  },
  {
    category: "Cloud",
    items: "Microsoft Azure · Azure Function Apps · MSAL / JWT authentication",
  },
  {
    category: "Practice",
    items: "Agile / Scrum · code review · incremental migration of live systems · Git · Python (basics)",
  },
];

export const experience = [
  {
    company: "MRI Software",
    role: "Software Engineer II",
    period: "Jul 2025 — Present",
    lede: "Property Tree is a live cloud SaaS platform for end-to-end property management across APAC, with thousands of daily active users and no acceptable downtime. I own Tenancy, Owner and Property Management — invoicing, inspections, receipting.",
    highlights: [
      "Led the migration of legacy AngularJS modules to React, module by module, with the product live throughout.",
      "Delivered Global Search end-to-end, from the UX flow to the indexed reads behind it.",
      "Work across the React frontend and the .NET / MS SQL backend rather than throwing tickets over a wall.",
    ],
    stack: "React · AngularJS · .NET · MS SQL Server · Microsoft Azure",
  },
  {
    company: "Reflik",
    role: "Software Engineer",
    period: "Jun 2024 — Jul 2025",
    lede: "Recruiting data lived in separate office databases with no unified view. I architected and built the centralised Application Tracking System that replaced the guesswork.",
    highlights: [
      "Designed the consolidation model and built the full-stack admin portal, authenticated with MSAL and JWT.",
      "Engineered an event-driven pipeline on Azure Function Apps keeping SQL Server and CosmosDB in sync in real time.",
      "Chose events over scheduled polling so the portal reflected writes within seconds, not hours.",
    ],
    stack: "React · .NET · Azure Function Apps · MS SQL Server · CosmosDB · MSAL · JWT",
  },
  {
    company: "Civica India",
    role: "Software Engineer",
    period: "Sep 2021 — Jun 2024",
    lede: "A government-grade Electoral Management System, built in a strict Agile/Scrum environment where correctness was audited rather than assumed.",
    highlights: [
      "Refactored a 1,500-line monolithic component into modular, testable classes without changing behaviour.",
      "Built the Electors tree-grid on Syncfusion to keep deeply nested, large-scale data usable and performant.",
      "Worked the full stack: .NET Core, Entity Framework Core, MS SQL Server, Angular 12+.",
    ],
    stack: ".NET Core · Entity Framework Core · MS SQL Server · Angular 12+ · Syncfusion",
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
    title: "Global Search",
    company: "MRI Software · Property Tree",
    period: "2025",
    stack: "React · AngularJS · .NET · MS SQL Server · Azure",
    summary:
      "A single search that returns tenancies, owners, properties and records from anywhere in the product — built into a platform that was half AngularJS and half React at the time, and never offline.",
    diagram: "global-search",
    figCaption: "Fig. I — one query contract across a half-migrated frontend",
    problem:
      "Property Tree grew module by module. Finding one tenancy meant drilling through several nested screens — a real cost for staff working dozens of records a day — and no two modules shared a query path.",
    decision:
      "Define one search contract on the .NET side and consume it from a React island inside the AngularJS shell, rather than waiting for the migration to finish. Search shipped modern first.",
    consequence:
      "Users reach any record from one keystroke instead of a menu tree, and the contract became the template for every module migrated after it.",
  },
  {
    numeral: "II",
    title: "Centralised ATS",
    company: "Reflik",
    period: "2024 — 2025",
    stack: "React · .NET · Azure Functions · MS SQL · CosmosDB",
    summary:
      "An admin portal that consolidates recruiting data from several distributed office databases into one secure, real-time view — architected from an empty repository.",
    diagram: "centralised-ats",
    figCaption: "Fig. II — event-driven consolidation across distributed office databases",
    problem:
      "Each office ran its own database. Admins had no consistent picture of an application’s state, and any answer meant checking systems one at a time.",
    decision:
      "Treat every office write as an event rather than something to poll for: Function Apps orchestrate the sync, SQL Server stays the system of record, CosmosDB carries the projections the portal reads.",
    consequence:
      "One secure source of truth, current within seconds of a write, behind MSAL and JWT — replacing database-by-database visibility entirely.",
  },
  {
    numeral: "III",
    title: "Electors Tree-Grid",
    company: "Civica India · Electoral Management System",
    period: "2021 — 2024",
    stack: ".NET Core · EF Core · MS SQL · Angular 12+ · Syncfusion",
    summary:
      "Hierarchical visualisation of large-scale electoral data inside a government system, delivered alongside the refactor that made the surrounding code survivable.",
    diagram: "electors-tree-grid",
    figCaption: "Fig. III — a 1,500-line component decomposed, then fed paged subtrees",
    problem:
      "Deeply nested elector data had to stay usable at national scale, and the component responsible had passed 1,500 lines — every change carried regression risk in an audited environment.",
    decision:
      "Split the component into query, hierarchy, paging and render responsibilities first, then build the Syncfusion tree-grid against paged subtrees rather than loading whole branches.",
    consequence:
      "A hierarchical view that holds up on production-sized datasets, on a codebase where the next engineer can make a change safely.",
  },
];
