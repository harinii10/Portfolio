export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  highlightMetric?: string;
  tags: string[];
  keyFeatures: string[];
  keyContributions: string[];
  architectureOverview: string;
  technologiesUsed: { name: string; category: string }[];
  type: string;
  liveUrl?: string;
  date?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    highlight?: boolean;
    description: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "HARINI A K",
  shortName: "Harini",
  tagline: "Building Scalable Systems. AI-Powered Applications. Modern Web.",
  email: "hariniak006@gmail.com",
  phone: "7902010306",
  formattedPhone: "+91 79020 10306",
  location: "Coimbatore, Tamil Nadu, India",
  institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
  degree: "Bachelor of Technology in Computer Science Engineering",
  department: "Computer Science Engineering",
  graduationYear: "2027",
  duration: "2023 – 2027",
  cgpa: "6.51",
  roles: [
    "Full-Stack Web Developer",
    "Backend Systems Engineer",
    "AI & Reinforcement Learning Enthusiast",
  ],
  professionalIntro:
    "Final-year Computer Science student with experience in Java, Python, full-stack development, and AI-powered applications. Skilled in building scalable backend systems, databases, and modern web applications. Seeking an opportunity to contribute to innovative software engineering projects while continuously learning emerging technologies.",
  heroDescription:
    "Final-year Computer Science student skilled in building scalable backend systems, databases, and modern web applications. Experienced in Java, Python, React, Next.js, FastAPI, PostgreSQL, and AI-driven platforms with deployed production applications.",
  aboutContent: [
    "I'm a final-year Computer Science Engineering student at Amrita Vishwa Vidyapeetham, Coimbatore, with hands-on experience in Java, Python, full-stack development, and AI-powered applications.",
    "My technical focus lies in architecting scalable backend systems, robust relational database schemas, and modern responsive web interfaces with React, Next.js, and TypeScript.",
    "I have engineered live production platforms on Vercel, implemented reinforcement learning control systems with SUMO/TraCI, and proudly serve as Elected Class Representative (3rd Year), coordinating communication between faculty and 60+ students.",
  ],
  socials: {
    linkedinPlaceholder: "https://www.linkedin.com/in/#harini-a-k",
    github: "https://github.com/harinii10",
    githubPlaceholder: "https://github.com/harinii10",
    portfolioRepo: "https://github.com/harinii10/Portfolio",
  },
  resumePath: "/Harini_A_K_Resume.pdf",
};

export const ABOUT_HIGHLIGHTS = [
  {
    id: "cse",
    title: "Computer Science Engineering",
    badge: "Core Foundations",
    description:
      "Deep foundation in algorithms, scalable system architectures, object-oriented design in Java/Python, and relational database systems at Amrita Vishwa Vidyapeetham.",
    icon: "GraduationCap",
    points: [
      "Algorithm Design & OOP (Java, Python, C)",
      "Database Architecture (MySQL, PostgreSQL, Supabase)",
      "Elected Class Representative (Coordinating 60+ Students)",
    ],
  },
  {
    id: "backend-fullstack",
    title: "Backend & Full-Stack Systems",
    badge: "Scalable Architecture",
    description:
      "Proven capability building asynchronous backend microservices with FastAPI, Celery, and Redis, alongside modern Next.js and React full-stack applications.",
    icon: "Code2",
    points: [
      "High-Performance APIs (FastAPI, Node.js, Express.js)",
      "Asynchronous Queues & Caching (Redis, Celery)",
      "Modern Frontend UI (React.js, Next.js, TypeScript)",
    ],
  },
  {
    id: "ai-applied",
    title: "AI & Applied Intelligent Systems",
    badge: "RL & Computer Vision",
    description:
      "Practical experience integrating PyTorch machine learning models, Proximal Policy Optimization (PPO), and SUMO/TraCI vehicular simulations.",
    icon: "BrainCircuit",
    points: [
      "Adaptive Signal RL (>99% Wait-Time Cut)",
      "Deep Learning Inference & Severity Classification (~96% Accuracy)",
      "PyTorch, SUMO Simulator & TraCI Integration",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Terminal",
    description: "Core languages for systems, algorithm design, and software engineering.",
    skills: [
      { name: "Java", description: "Modular OOP architecture, design patterns, core data structures", highlight: true },
      { name: "Python", description: "AI/ML modeling, FastAPI REST backends, PyTorch, simulation scripts", highlight: true },
      { name: "C", description: "Procedural programming, low-level memory concepts, computational fundamentals" },
    ],
  },
  {
    title: "Frontend",
    icon: "Globe",
    description: "Modern, component-driven web user interfaces with strict type safety.",
    skills: [
      { name: "HTML", description: "Semantic markup, modern accessibility (a11y), clean document structure" },
      { name: "CSS", description: "Responsive layouts, Flexbox, Grid, custom animations and modern styling" },
      { name: "React.js", description: "Hooks, state management, component lifecycles, virtual scrolling", highlight: true },
      { name: "Next.js", description: "Full-stack framework, App Router, server-rendered views, route protection", highlight: true },
      { name: "TypeScript", description: "Static typing, interfaces, strict compile-time safety and maintainable code", highlight: true },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    description: "Scalable backend services, REST APIs, and asynchronous background queues.",
    skills: [
      { name: "Node.js", description: "Event-driven asynchronous JavaScript runtime for high-throughput APIs", highlight: true },
      { name: "Express.js", description: "Robust REST API routing, custom middleware pipelines, and HTTP services" },
      { name: "FastAPI", description: "High-performance Python ASGI framework for real-time model inference", highlight: true },
      { name: "Redis", description: "In-memory key-value data store, caching layer, and message broker", highlight: true },
      { name: "Celery", description: "Distributed task queue for asynchronous background workload processing", highlight: true },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    description: "Relational database schema design, normalization, and cloud backends.",
    skills: [
      { name: "MySQL", description: "Relational database querying, schema design, transactions, indexing", highlight: true },
      { name: "PostgreSQL", description: "Advanced relational database, complex queries, multi-table schemas, RLS", highlight: true },
      { name: "Supabase", description: "Open-source cloud backend, managed PostgreSQL, authentication, and security policies", highlight: true },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    description: "Daily developer tooling, version control, and collaboration environments.",
    skills: [
      { name: "Git", description: "Distributed version control, branching, rebasing, and collaborative git flows", highlight: true },
      { name: "Github", description: "Source code repository hosting, pull requests, automated actions, and CI/CD", highlight: true },
      { name: "VSCode", description: "Primary development environment customized for full-stack and Python projects" },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "adaptive-traffic-control",
    title: "Adaptive Traffic Signal Control Using Fog Computing & RL",
    subtitle: "Reinforcement Learning & Urban Mobility Optimization",
    tagline: "Achieved over 99% reduction in vehicle waiting time compared to fixed-time signal control.",
    description:
      "Designed an intelligent traffic signal control system integrating Artificial Neural Network (ANN) and Proximal Policy Optimization (PPO) for real-time adaptive decision-making.",
    highlightMetric: ">99% Wait-Time Cut",
    tags: [
      "Python",
      "PPO",
      "ANN",
      "SUMO",
      "TraCI",
      "Reinforcement Learning",
      "Fog Computing",
    ],
    keyContributions: [
      "Designed an intelligent traffic signal control system integrating Artificial Neural Network (ANN) and Proximal Policy Optimization (PPO) for real-time adaptive decision-making.",
      "Implemented and evaluated the model in SUMO simulator using TraCI, achieving over 99% reduction in vehicle waiting time compared to fixed-time signal control.",
      "Engineered continuous state-space monitoring and dynamic phase duration calculation at the fog computing layer.",
      "Validated performance against static baseline signal controls under diverse simulated vehicle traffic densities.",
    ],
    keyFeatures: [
      "Real-time adaptive decision-making based on dynamic queue lengths",
      "TraCI bidirectional communication interfacing Python agent with SUMO simulator",
      "PPO actor-critic optimization ensuring stable policy gradient convergence",
      "Over 99% reduction in vehicle waiting time and congestion latency",
    ],
    architectureOverview:
      "Vehicle queue telemetry is intercepted via TraCI from SUMO. The fog-layer neural network computes density vectors and applies the PPO policy to dynamically trigger phase changes, minimizing intersection idle times.",
    technologiesUsed: [
      { name: "Python", category: "Core Language" },
      { name: "PPO (Proximal Policy Optimization)", category: "RL Algorithm" },
      { name: "ANN", category: "Neural Network" },
      { name: "SUMO Simulator", category: "Traffic Simulation" },
      { name: "TraCI", category: "Simulator API" },
    ],
    type: "AI & Distributed Systems Research",
  },
  {
    id: "crop-disease-diagnosis",
    title: "AI-Enabled Crop Disease Diagnosis & Severity Detection System",
    subtitle: "High-Throughput Asynchronous Agricultural Diagnostics",
    tagline: "FastAPI REST API pipeline with Celery, Redis, and PyTorch achieving ~96% classification accuracy.",
    description:
      "Developed REST APIs using FastAPI for AI model inference and severity classification (~96% accuracy), backed by PostgreSQL and asynchronous Celery/Redis queue processing.",
    highlightMetric: "~96% AI Accuracy",
    tags: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "PyTorch",
      "REST APIs",
      "Asynchronous",
    ],
    keyContributions: [
      "Developed REST APIs using FastAPI for AI model inference and severity classification (~96% accuracy).",
      "Designed backend with PostgreSQL and implemented asynchronous processing using Celery & Redis.",
      "Built scalable architecture to handle multiple prediction requests efficiently without thread starvation.",
      "Integrated PyTorch deep learning models for fine-grained leaf pathology inference and severity metrics.",
    ],
    keyFeatures: [
      "FastAPI REST endpoints for high-throughput client prediction requests",
      "Asynchronous distributed task queue powered by Celery worker pools and Redis broker",
      "PostgreSQL relational schema storing diagnostic logs and remedial recommendations",
      "Fine-tuned PyTorch vision classification delivering ~96% severity precision",
    ],
    architectureOverview:
      "FastAPI receives leaf diagnosis requests and delegates inference tasks to Redis. Celery worker clusters asynchronously execute PyTorch neural network inference, write structured diagnosis logs into PostgreSQL, and notify clients.",
    technologiesUsed: [
      { name: "FastAPI", category: "ASGI Framework" },
      { name: "PyTorch", category: "Deep Learning Framework" },
      { name: "PostgreSQL", category: "Relational Database" },
      { name: "Redis", category: "Message Broker / Cache" },
      { name: "Celery", category: "Asynchronous Queue" },
    ],
    type: "Backend Systems & AI Engineering",
  },
  {
    id: "golf-charity-subscription",
    title: "Golf Charity Subscription Platform",
    subtitle: "Next.js & Supabase Enterprise Subscription Portal",
    tagline: "Full-stack subscription platform with 5-table PostgreSQL schema, automated draws, and admin panel.",
    liveUrl: "https://golf-charity-platform-1gmj.vercel.app/",
    description:
      "Built a full-stack subscription platform with Next.js and Supabase featuring golf score tracking, a monthly charity draw system, and an admin panel for end-to-end management.",
    highlightMetric: "Live on Vercel",
    tags: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Full Stack",
      "Authentication",
      "Route Protection",
      "Vercel",
    ],
    keyContributions: [
      "Built a full-stack subscription platform with Next.js and Supabase featuring golf score tracking, a monthly charity draw system, and an admin panel for end-to-end management.",
      "Designed a 5-table PostgreSQL schema and implemented core logic including a score replacement algorithm, random draw matching, and session-based route protection.",
      "Engineered automated score management allowing golfers to track handicaps and replace scores dynamically.",
      "Integrated secure authentication, role-based admin controls, and production deployment on Vercel.",
    ],
    keyFeatures: [
      "Complete 5-table PostgreSQL relational schema design",
      "Algorithmic score replacement and handicap tracking engine",
      "Automated random draw matching system tied to charity allocations",
      "Session-based route protection and comprehensive admin control panel",
    ],
    architectureOverview:
      "Built with Next.js App Router and Supabase managed PostgreSQL. Session state and route protection guard sensitive portals, while database triggers calculate monthly pool disbursements to selected charities.",
    technologiesUsed: [
      { name: "Next.js", category: "Full-Stack Framework" },
      { name: "Supabase", category: "Cloud Database & Auth" },
      { name: "PostgreSQL", category: "5-Table Relational Schema" },
      { name: "TypeScript", category: "Type Safety" },
      { name: "Vercel", category: "Production Hosting" },
    ],
    type: "Full Stack Cloud Platform",
  },
  {
    id: "project-tracker",
    title: "Project Tracker",
    subtitle: "High-Performance Multi-View Task Management System",
    tagline: "Custom drag-and-drop (native pointer events), virtual scrolling for 500+ tasks, and 85+ Lighthouse score.",
    liveUrl: "https://project-tracker-owa1.vercel.app/",
    description:
      "Built a multi-view project management UI in React and TypeScript with custom drag-and-drop (native pointer events, no libraries), virtual scrolling for 500+ tasks, and instant Kanban/List/Gantt view switching over shared state.",
    highlightMetric: "Lighthouse 85+ Score",
    tags: [
      "React",
      "TypeScript",
      "Native Pointer Events",
      "Virtual Scrolling",
      "Mock WebSocket",
      "Lighthouse 85+",
      "Vercel",
    ],
    keyContributions: [
      "Built a multi-view project management UI in React and TypeScript with custom drag-and-drop (native pointer events, no libraries), virtual scrolling for 500+ tasks, and instant Kanban/List/Gantt view switching over shared state.",
      "Implemented URL-synced filters for shareable views, simulated real-time collaboration indicators via mock WebSocket, and achieved a Lighthouse performance score of 85+.",
      "Architected lightweight shared state eliminating re-render bottlenecks across multi-view projections.",
      "Deployed to production on Vercel with zero external drag-and-drop bundle dependencies.",
    ],
    keyFeatures: [
      "Custom drag-and-drop built entirely with native pointer events (zero third-party dependencies)",
      "High-performance virtual scrolling supporting 500+ concurrent tasks smoothly",
      "Instant multi-view projection switching: Kanban, List, and Gantt views over unified state",
      "URL-synced view and filter state for shareable links",
      "Mock WebSocket real-time collaboration indicators",
      "Lighthouse performance benchmark verified at 85+",
    ],
    architectureOverview:
      "Engineered using React and TypeScript. Instead of heavy drag libraries, native pointer event coordinators handle DOM manipulation. Virtual scroll windowing renders only visible tasks, keeping 60 FPS performance even with 500+ items.",
    technologiesUsed: [
      { name: "React.js", category: "Frontend Library" },
      { name: "TypeScript", category: "Language" },
      { name: "Native Pointer Events", category: "Custom UI Engine" },
      { name: "Virtual Scrolling", category: "Performance" },
      { name: "Mock WebSocket", category: "Collaboration Simulation" },
      { name: "Vercel", category: "Cloud Deployment" },
    ],
    type: "High-Performance Web Application",
  },
];

export const HACKATHON_EXPERIENCE = {
  title: "ByteVerse 7.0 Hackathon",
  organizer: "NIT Patna (National Institute of Technology, Patna)",
  date: "04/2025 – 04/2025",
  formattedDate: "April 2025",
  achievementBadge: "National Level Hackathon Participant",
  technologies: ["Python", "Streamlit", "OpenAI API", "HTML"],
  description:
    "Participated in ByteVerse 7.0 Hackathon organized by NIT Patna, where I collaborated with a team to develop an AI-powered web application promoting mental wellness.",
  keyContributions: [
    "Developed an AI-powered web app promoting mental wellness through conversational AI, mood tracking, and interactive games within a limited time frame as part of a collaborative team effort.",
    "Contributed to front-end and back-end integration, enhancing problem-solving and time management skills.",
    "Engineered empathetic conversational response flows leveraging the OpenAI API in Python.",
    "Integrated interactive wellness mini-games within a responsive Streamlit web interface.",
  ],
  outcomes: [
    "Delivered a functional AI web app under rigorous 24-48h hackathon constraints",
    "Cross-functional teamwork, rapid prototyping, and Git collaboration",
  ],
};

export const EDUCATION_DATA = {
  institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
  degree: "Bachelor of Technology in Computer Science Engineering",
  department: "Computer Science Engineering",
  duration: "2023 – 2027",
  status: "Final-year Computer Science student",
  cgpa: "6.51",
  location: "Coimbatore, Tamil Nadu",
  highlights: [
    "Curriculum in Data Structures, Algorithms, Scalable Backend Systems, and Databases",
    "Elected Class Representative (3rd Year), coordinating communication between faculty and 60+ students",
    "Developed production full-stack web applications and reinforcement learning systems",
  ],
};

export const EXTRACURRICULAR_DATA = {
  title: "Leadership & Community Involvement",
  nss: {
    title: "National Service Scheme (NSS)",
    role: "Active Member & Volunteer",
    duration: "2 Years Active Involvement",
    description:
      "Actively participated in NSS for 2 years, contributing to community service and social welfare programs.",
    points: [
      "Community outreach and social welfare initiative execution",
      "Collaborative grassroots teamwork and public service",
      "Social welfare campaign coordination",
    ],
  },
  leadership: {
    title: "Elected Class Representative (3rd Year)",
    role: "Student Representative & Liaison",
    duration: "3rd Year",
    description:
      "Elected Class Representative (3rd Year), coordinating communication between faculty and 60+ students.",
    points: [
      "Coordinating communication between faculty and 60+ students",
      "Academic scheduling, departmental synchronization, and student feedback liaison",
      "Class-wide initiative planning and peer academic support",
    ],
  },
};
