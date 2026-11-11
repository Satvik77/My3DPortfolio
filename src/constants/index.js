import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

import AEGS from "../assets/AEGS.jpg";
import FoodApp from "../assets/FoodApp.png";
import CAPriyank from "../assets/CAPriyank.jpg";
import ERDeepak from "../assets/ERDeepak.jpg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Products & AI",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "0-to-1 Product Builder & Strategy",
    icon: web,
  },
  {
    title: "Applied AI & Agentic Workflows",
    icon: mobile,
  },
  {
    title: "Solutions & Automation Engineer",
    icon: backend,
  },
  {
    title: "Data Pipelines & ROI Analytics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Automation & Solutions Engineer",
    company_name: "Accenture (Bengaluru, India)",
    icon: web,
    iconBg: "#383E56",
    date: "Aug 2026 - Present",
    points: [
      "Accelerated feature delivery by 22% by collaborating with cross-functional engineering leads and business stakeholders to translate ambiguous client requirements into actionable technical specifications and standardized rollout playbooks.",
      "Accomplished 99.9% pipeline availability by evaluating system options against risk, scalability, and run-cost metrics to deploy resilient cloud automation frameworks for Fortune 500 accounts.",
      "Constructed automated end-to-end telemetry and validation harnesses in Python, capturing data logs to guide iterative performance and control enhancements before production deployment.",
    ],
  },
  {
    title: "0-to-1 Product Developer & Technical Solutions Consultant II",
    company_name: "Teleperformance (Client: Google / Alphabet Account — Hyderabad)",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Aug 2026",
    points: [
      "Accomplished an ecosystem of 50+ internal web products, workflow automations, and Chrome extensions across 18 Alphabet LOBs (gTech, YouTube, gCloud, Developer Support), unlocking $2M+ in cumulative business ROI and receiving the Spotlight Award.",
      "Delivered $500K+ in validated ROI and improved Initial Response Time (IRT) by 24% by identifying user latency bottlenecks, authoring the PRD, and leading the 0-to-1 launch of 'IRT Radar' across global gTech and Trust & Safety queues.",
      "Architected data ingestion models for IRT Radar using GoogleSQL/PLX ETL pipelines and designed user-centric dashboard interfaces with dynamic filters, real-time alert webhooks, and automated export workflows.",
      "Achieved a 26% reduction in Average Handle Time (AHT) and $536K in EPP ROI by conceptualizing and shipping 'Cases Connect' AI Sandbox using Gemini API and SLMs, improving customer sentiment scores and CSAT across 18 product lines.",
      "Eliminated 40+ FTE hours per month by conducting user discovery with frontline operators and launching browser-native Chrome extensions that bridged ticket databases with actionable cloud analytics.",
      "Spearheaded internal technical outreach by preparing and delivering cross-functional presentations and hands-on workshops on Agentic AI and prompt workflows, standardizing daily operational AI adoption for 200+ team members.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Satvik's ability to translate complex operational bottlenecks into automated, data-driven web products saved our teams dozens of hours every month.",
    name: "CA Priyank",
    designation: "Partner",
    company: "Enterprise Client",
    image: CAPriyank,
  },
  {
    testimonial:
      "An exceptional technical product builder who bridges full-stack engineering with real business ROI and seamless user experience.",
    name: "Er. Deepak",
    designation: "Engineering Lead",
    company: "Tech Solutions",
    image: ERDeepak,
  },
];

const projects = [
  {
    name: "TP Buddy — Autonomous Operational Decision Agent",
    description:
      "Defined product vision, scoped user journeys, and deployed an agentic L1 decision-support tool delivering automated policy guidance and context retrieval to frontline teams, driving a 30% lift in operational platform utilization.",
    tags: [
      { name: "GCP", color: "blue-text-gradient" },
      { name: "Gemini-API", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
      { name: "Agentic-AI", color: "blue-text-gradient" },
    ],
    image: AEGS,
    source_code_link: "https://github.com/Satvik77",
  },
  {
    name: "IRT Radar — Global Queue Latency & Alerting Platform",
    description:
      "Identified user latency bottlenecks, authored the 0-to-1 PRD, and architected GoogleSQL/PLX ETL pipelines with real-time alert webhooks across global gTech and Trust & Safety queues, improving IRT by 24% and unlocking $500K+ in validated ROI.",
    tags: [
      { name: "GoogleSQL-PLX", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "Looker-Studio", color: "pink-text-gradient" },
    ],
    image: FoodApp,
    source_code_link: "https://github.com/Satvik77",
  },
  {
    name: "Cases Connect — Enterprise AI Sandbox",
    description:
      "Conceptualized and shipped a 0-to-1 AI Sandbox utilizing Gemini API and Small Language Models (SLMs) across 18 Alphabet product lines, reducing Average Handle Time (AHT) by 26% and delivering $536K in validated EPP ROI.",
    tags: [
      { name: "Gemini-API", color: "blue-text-gradient" },
      { name: "SLMs", color: "green-text-gradient" },
      { name: "Chrome-Extensions-API", color: "pink-text-gradient" },
    ],
    image: AEGS,
    source_code_link: "https://github.com/Satvik77",
  },
  {
    name: "Shared Gemini Workspace — Real-Time Collaborative Tool",
    description:
      "Built and launched a real-time collaborative workspace integrating Gemini API with full-stack web architectures and WebSockets, solving multi-user prompt state synchronization to enable synchronized multi-stakeholder evaluations.",
    tags: [
      { name: "Full-Stack-Web", color: "blue-text-gradient" },
      { name: "LLM-APIs", color: "green-text-gradient" },
      { name: "WebSockets", color: "pink-text-gradient" },
    ],
    image: FoodApp,
    source_code_link: "https://github.com/Satvik77",
  },
  {
    name: "Automated Document Intelligence & Semantic Scoring",
    description:
      "Engineered a data-driven text classification engine incorporating NLP models, automated regression suites, and strict acceptance criteria, reducing manual audit turnaround time by 35% through algorithmic consistency checks.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NLP-Models", color: "green-text-gradient" },
      { name: "CI-CD", color: "pink-text-gradient" },
    ],
    image: AEGS,
    source_code_link: "https://github.com/Satvik77",
  },
];

export { services, technologies, experiences, testimonials, projects };