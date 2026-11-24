export type Project = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  icon: string;
  image: string;
};

export type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  responsibilities: string[];
};

export type Skill = { name: string; category: string };

export const aboutParagraphs = [
  "I’m a Frontend / UI Developer based in Chennai, India, with experience building responsive, user-facing web interfaces and translating UI/UX designs into maintainable frontend code.",
  "I enjoy creating reusable UI components, connecting interfaces to REST APIs and third-party services, and refining layouts for usability, browser compatibility, and performance. I collaborate closely with designers, backend developers, and stakeholders in Agile/Scrum environments.",
];

export const projects: Project[] = [
  {
    title: "Responsive Web Interfaces",
    description:
      "Frontend interface work focused on clear layouts, responsive behavior, and consistent experiences across desktop and mobile screen sizes.",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: "MonitorSmartphone",
    image: "/images/MintHRM.2a58b4b2.png",
  },
  {
    title: "Reusable UI Components",
    description:
      "Structured interface patterns designed to translate wireframes and UI/UX requirements into maintainable, reusable frontend building blocks.",
    tags: ["React.js", "Material UI", "Tailwind CSS", "Reusable Components"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: "Blocks",
    image: "/images/Mint_Benefit.7acd85b2.png",
  },
  {
    title: "API-powered Applications",
    description:
      "User-facing experiences connected to REST APIs and third-party services, with dependable data flow and clear interface states.",
    tags: ["REST APIs", "Node.js", "Express.js", "Redux", "Context API"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    icon: "Brackets",
    image: "/images/gimme_app.e539d91f.png",
  },
  {
    title: "Maps & Location Interfaces",
    description:
      "Interactive frontend experiences that make location-based information easier to explore through integrated maps and responsive layouts.",
    tags: ["Google Maps API", "React.js", "JavaScript", "Responsive Design"],
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    icon: "MapPinned",
    image: "/images/kapruka_driver.33f5d621.png",
  },
  {
    title: "Commerce User Flows",
    description:
      "Frontend flows for product discovery and payments, with attention to usability, feedback, and consistent presentation across devices.",
    tags: ["Razorpay", "REST APIs", "React.js", "Tailwind CSS"],
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    icon: "CreditCard",
    image: "/images/kapruka_ecommerce.7410c118.png",
  },
  {
    title: "Performance-focused Frontends",
    description:
      "Interface refinement focused on debugging, browser compatibility, page-level performance, and maintainable frontend implementation.",
    tags: ["Debugging", "Performance", "Cross-browser UI", "Documentation"],
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    icon: "Gauge",
    image: "/images/minchy_AI.778bef5e.png",
  },
];

export const skills: Skill[] = [
  { name: "React.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Responsive Web Design", category: "UI Development" },
  { name: "Material UI", category: "UI Development" },
  { name: "Tailwind CSS", category: "UI Development" },
  { name: "Reusable UI Components", category: "UI Development" },
  { name: "Redux", category: "State Management" },
  { name: "Context API", category: "State Management" },
  { name: "REST APIs", category: "API Integration" },
  { name: "Google Maps API", category: "API Integration" },
  { name: "Razorpay", category: "API Integration" },
  { name: "Node.js", category: "Backend & Data" },
  { name: "Express.js", category: "Backend & Data" },
  { name: "PostgreSQL", category: "Backend & Data" },
  { name: "Python", category: "Backend & Data" },
  { name: "Debugging", category: "Practices" },
  { name: "Performance Optimization", category: "Practices" },
  { name: "Agile / Scrum", category: "Practices" },
  { name: "Software Documentation", category: "Practices" },
];

export const experiences: Experience[] = [
  {
    role: "UI Developer",
    company: "Absafe IT Solutions",
    type: "Full-time",
    period: "January 2022 – January 2025",
    location: "Chennai, India",
    responsibilities: [
      "Developed and maintained responsive, user-facing web application interfaces using JavaScript (ES6+), HTML5, and CSS3 for desktop and mobile screen sizes.",
      "Built reusable frontend UI components and functional page layouts by translating UI/UX designs, wireframes, and user requirements into maintainable code.",
      "Contributed to frontend development with React.js and modern JavaScript libraries to build structured, maintainable user interfaces.",
      "Implemented responsive styling using CSS3, Material UI, and Tailwind CSS to improve usability and consistency.",
      "Integrated REST APIs and third-party services, including Google Maps API and Razorpay, to connect frontend features with backend functionality.",
      "Used Redux and Context API to support predictable data flow and consistent UI behavior across interfaces.",
      "Collaborated with UI/UX designers, backend developers, and stakeholders in Agile/Scrum workflows to deliver enhancements on schedule.",
      "Performed frontend debugging, UI testing support, browser-compatibility fixes, performance refinement, and technical documentation.",
    ],
  },
];

export const coreCompetencies = [
  "React.js Development",
  "UI Development",
  "Front-End Development",
  "Responsive Web Design",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Reusable UI Components",
  "Redux",
  "Context API",
  "REST API Integration",
  "Material UI",
  "Tailwind CSS",
  "Cross-Browser Compatibility",
  "UI/UX Implementation",
  "Third-Party API Integration",
  "Debugging",
  "Frontend Performance Optimization",
  "Agile",
  "Scrum",
];

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "Sathyabama University, Chennai",
  period: "May 2022",
};

export const certifications = [
  "Front-End Developer Certification — Besant Technologies",
  "System Administrator Certification — Red Hat",
];

export const languages = ["English", "Tamil", "Hindi"];

export const contact = {
  name: "Navin K",
  location: "Chennai, India 600100",
  phone: "6380067070",
  email: "navink9820@gmail.com",
  github: "https://github.com/Navin9820",
  linkedin: "https://linkedin.com/in/navin-k-504227269",
};
