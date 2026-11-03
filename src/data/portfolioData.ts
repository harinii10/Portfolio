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
  tagline: "Building Software. Exploring Intelligence. Creating Impact.",
  email: "hariniak006@gmail.com",
  phone: "7902010306",
  formattedPhone: "+91 79020 10306",
  location: "Coimbatore, Tamil Nadu, India",
  institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
  degree: "Bachelor of Technology (B.Tech)",
  department: "Computer Science Engineering",
  graduationYear: "2027",
  duration: "2023 – 2027",
  cgpa: "6.52",
  roles: [
    "Computer Science Engineer",
    "Full-Stack Web Developer",
    "AI & Machine Learning Enthusiast",
  ],
  professionalIntro:
    "Motivated Computer Science undergraduate with hands-on project experience in Java, Python, and Web Development. Interested in applying technical skills to collaborative academic and industry projects.",
  heroDescription:
    "Computer Science Engineering undergraduate at Amrita Vishwa Vidyapeetham skilled in modern full-stack web engineering, Python, Java, REST APIs, and machine learning systems. Experienced in developing deployed web platforms and exploring medical AI reliability.",
  aboutContent: [
    "I'm a Computer Science Engineering undergraduate at Amrita Vishwa Vidyapeetham, Coimbatore. My technical expertise spans modern full-stack web development (React, Next.js, Node.js, FastAPI), relational databases (PostgreSQL, MySQL), and machine learning applications.",
    "I have built and deployed production web applications such as multi-view project management tools and charity subscription platforms, alongside exploring research frontiers in medical AI hallucination detection.",
    "Driven by continuous learning, I am also pursuing the IIT Madras BS Degree Programme in Data Science and actively serve as Class Representative for the 3rd year.",
  ],
  socials: {
    linkedinPlaceholder: "https://www.linkedin.com/in/#harini-a-k",
    githubPlaceholder: "https://github.com/#harini-a-k",
  },
  resumePath: "/Harini_A_K_Resume.pdf",
};

export const ABOUT_HIGHLIGHTS = [
  {
    id: "cse",
    title: "Computer Science Engineering",
    badge: "Core Discipline",
    description:
      "Rigorous foundations in Data Structures, Algorithms, Object-Oriented Programming (Java/Python), and Database Management Systems (PostgreSQL, MySQL) at Amrita Vishwa Vidyapeetham.",
    icon: "GraduationCap",
    points: ["Algorithm Design & OOP (Java, Python, C)", "Relational Databases (PostgreSQL, MySQL)", "Class Representative (3rd Year Leadership)"],
  },
  {
    id: "soft-dev",
    title: "Full-Stack Development",
    badge: "Production Web Apps",
    description:
      "Hands-on experience architecting full-stack web applications with React, Next.js, TypeScript, Node.js, Express, FastAPI, and Supabase with live Vercel deployments.",
    icon: "Code2",
    points: ["Modern Frontend (React.js, Next.js, TypeScript)", "High-Performance Backends (FastAPI, Express.js)", "Cloud & Database Integration (Supabase, Vercel)"],
  },
  {
    id: "ai-ds",
    title: "AI & Machine Learning",
    badge: "Emerging Tech & Research",
    description:
      "Applied machine learning and computer vision implementations, including Medical Hallucination Detection in LLMs, Facial Recognition Attendance, and Crop Disease Diagnosis (~96% accuracy).",
    icon: "BrainCircuit",
    points: ["Medical LLM Hallucination Research", "FastAPI AI Model Inference & Celery/Redis", "IIT Madras BS Degree in Data Science Scholar"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Terminal",
    description: "Core programming languages for algorithmic systems and engineering workflows.",
    skills: [
      { name: "Java", description: "Modular OOP architecture, design patterns, core data structures", highlight: true },
      { name: "Python", description: "AI/ML modeling, FastAPI REST backends, computer vision, data analysis", highlight: true },
      { name: "C", description: "Low-level computational concepts, structured programming, memory fundamentals" },
    ],
  },
  {
    title: "Frontend Development",
    icon: "Globe",
    description: "Modern, responsive, component-driven client interfaces.",
    skills: [
      { name: "React.js", description: "Modern React with hooks, state management, and reusable component libraries", highlight: true },
      { name: "HTML", description: "Semantic web structure, accessibility, SEO best practices" },
      { name: "CSS", description: "Modern responsive layouts, Flexbox, CSS Grid, clean styling" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "Server",
    description: "Robust server runtimes, RESTful APIs, and asynchronous microservices.",
    skills: [
      { name: "Node.js", description: "Scalable JavaScript server runtime and asynchronous event-driven backend", highlight: true },
      { name: "Express.js", description: "REST API routing, middleware integration, web service endpoints" },
      { name: "FastAPI", description: "High-performance Python ASGI framework for real-time AI model inference", highlight: true },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    description: "Relational data modeling, ACID compliance, and query performance.",
    skills: [
      { name: "MySQL", description: "Relational database schema design, joins, normalization, transactional SQL", highlight: true },
      { name: "PostgreSQL", description: "Advanced relational database, complex querying, index optimization, Supabase integration", highlight: true },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "Wrench",
    description: "Version control, code collaboration, and modern IDE workflows.",
    skills: [
      { name: "Git", description: "Distributed version control, branching strategies, commit history", highlight: true },
      { name: "GitHub", description: "Code collaboration, issue tracking, remote repositories, project hosting", highlight: true },
      { name: "VS Code", description: "Primary IDE configured for full-stack TypeScript, Python, and frontend development" },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "medical-hallucination-detection",
    title: "Medical Hallucination Detection and Classification using Machine Learning",
    subtitle: "Healthcare AI Reliability & Trustworthiness Research",
    tagline: "Structured evaluation frameworks and prompt engineering to detect and mitigate LLM hallucinations in clinical queries.",
    date: "11/2025 – Present",
    description:
      "Analyzed hallucinations in Large Language Models for healthcare-related queries using structured evaluation methods, conducting in-depth research to enhance clinical AI dependability.",
    highlightMetric: "Medical AI Reliability",
    tags: [
      "Machine Learning",
      "LLMs",
      "Healthcare AI",
      "Prompt Engineering",
      "Model Evaluation",
      "Python",
    ],
    keyContributions: [
      "Analyzed hallucinations in Large Language Models for healthcare-related queries using structured evaluation methods.",
      "Conducted in-depth literature review of recent research papers and identified key research gaps in medical AI reliability.",
      "Evaluated model outputs based on factual accuracy, consistency, and domain-specific correctness.",
      "Explored prompt engineering and fact-checking approaches to improve trustworthiness of AI-generated medical responses.",
    ],
    keyFeatures: [
      "Domain-specific medical factual consistency checking",
      "Structured benchmarking for clinical question-answering",
      "Prompt engineering mitigation strategies against false assertions",
      "Systematic taxonomy and classification of medical hallucination types",
    ],
    architectureOverview:
      "Healthcare prompt queries are processed through evaluated LLM pipelines. Responses are parsed into discrete medical claims and evaluated through structured biomedical knowledge references, calculating factual precision, claim consistency, and hallucination severity scores.",
    technologiesUsed: [
      { name: "Python", category: "Core Language" },
      { name: "Large Language Models", category: "AI Paradigm" },
      { name: "Prompt Engineering", category: "Technique" },
      { name: "Structured Evaluation Metrics", category: "Research" },
      { name: "Healthcare AI Guidelines", category: "Domain" },
    ],
    type: "AI & Healthcare Machine Learning Research",
  },
  {
    id: "project-tracker",
    title: "Project Tracker, Full Stack Web Application",
    subtitle: "Interactive Multi-View Project Management Platform",
    tagline: "Deployed production web application featuring Kanban, List, and Timeline views with custom drag-and-drop.",
    liveUrl: "https://project-tracker-owa1.vercel.app/",
    description:
      "Built a multi-view project management tool with Kanban, List, and Timeline views, custom drag-and-drop interactivity, and optimized state management.",
    highlightMetric: "Live on Vercel",
    tags: [
      "React",
      "TypeScript",
      "Full Stack",
      "Drag-and-Drop",
      "Kanban",
      "State Management",
      "Vercel",
    ],
    keyContributions: [
      "Built a multi-view project management tool featuring intuitive Kanban, structured List, and chronological Timeline views.",
      "Implemented custom drag-and-drop functionality with fluid, responsive UI micro-interactions.",
      "Designed a modern, fully responsive frontend using React and TypeScript for strong type safety.",
      "Optimized client state management and rendering lifecycles for instant, high-performance interactions.",
    ],
    keyFeatures: [
      "Kanban board with seamless card reordering and column status dragging",
      "Structured List view with tabular sorting and instant status filters",
      "Timeline schedule visualization for project milestones",
      "Optimized virtualized rendering avoiding unnecessary DOM re-renders",
    ],
    architectureOverview:
      "Built with React and TypeScript, leveraging modular component architecture. Custom drag-and-drop listeners coordinate transactional state updates across multi-view projections (Kanban, List, Timeline) with zero layout shifting.",
    technologiesUsed: [
      { name: "React.js", category: "Frontend Library" },
      { name: "TypeScript", category: "Language" },
      { name: "Custom Drag & Drop", category: "UI Interaction" },
      { name: "Optimized State Architecture", category: "Performance" },
      { name: "Vercel", category: "Production Hosting" },
    ],
    type: "Full Stack Web Engineering",
  },
  {
    id: "golf-charity-subscription",
    title: "Golf Charity Subscription Platform",
    subtitle: "Next.js & Supabase Financial Draw & Charity Portal",
    tagline: "Full-stack subscription platform managing golf scores, automated monthly draws, charity donation selection, and admin controls.",
    liveUrl: "https://golf-charity-platform-1gmj.vercel.app/",
    description:
      "Developed a full-stack web application using Next.js and Supabase that enables users to manage golf scores, subscribe to a platform, and participate in a monthly draw system integrated with charity selection.",
    highlightMetric: "Live on Vercel",
    tags: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Authentication",
      "Route Protection",
      "Admin Panel",
      "Vercel",
    ],
    keyContributions: [
      "Developed full-stack web application using Next.js (App Router) and Supabase cloud infrastructure.",
      "Engineered monthly draw system allowing users to allocate portions of subscription pools to chosen charities.",
      "Implemented secure user authentication, role-based access control, and protected routes.",
      "Designed a comprehensive administrative panel for managing user subscriptions, score submissions, and charity disbursements.",
    ],
    keyFeatures: [
      "Secure authentication and session management via Supabase Auth",
      "Golf scorecard tracking and handicap record storage",
      "Monthly lottery/draw algorithm linked with charity contributions",
      "Comprehensive Admin dashboard with role-guarded management views",
      "Protected routes with server-side validation",
    ],
    architectureOverview:
      "Powered by Next.js and Supabase PostgreSQL. Supabase Auth and Row-Level Security (RLS) policies safeguard sensitive member data. Automated database triggers handle subscription state checks and draw participation entries.",
    technologiesUsed: [
      { name: "Next.js", category: "Full-Stack Framework" },
      { name: "Supabase", category: "Backend-as-a-Service" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Row-Level Security & Auth", category: "Security" },
      { name: "Vercel", category: "Cloud Deployment" },
    ],
    type: "Full-Stack Cloud Application",
  },
  {
    id: "ai-attendance-facial-recognition",
    title: "AI-Based Attendance System Using Facial Recognition",
    subtitle: "Automated Computer Vision Campus Attendance",
    tagline: "Automated student tracking system with React frontend and Python facial recognition backend, cutting manual roll-call effort.",
    description:
      "Developed a full-stack web application with React frontend and Python-based face recognition backend to automate student tracking and eliminate manual attendance overhead.",
    highlightMetric: "Automated Tracking",
    tags: [
      "React",
      "Python",
      "Facial Recognition",
      "OpenCV / DeepFace",
      "REST APIs",
      "Dashboard",
      "Automation",
    ],
    keyContributions: [
      "Developed a full-stack web application with React frontend and Python-based face recognition backend.",
      "Integrated REST APIs for real-time attendance verification, entry logs, and dashboard visualization.",
      "Engineered automated student tracking system, drastically reducing manual attendance roll-call effort.",
      "Designed an administrative dashboard visualizing attendance percentages and daily session logs.",
    ],
    keyFeatures: [
      "High-speed face embedding extraction and similarity comparison",
      "Real-time attendance logging via REST API endpoints",
      "Student presence metrics and dynamic dashboard charts",
      "Automated attendance report generation for instructors",
    ],
    architectureOverview:
      "A React dashboard streams camera capture frames to a Python backend service. Facial feature embeddings are computed and matched against registered student database vectors. Match verifications trigger instant REST API database updates.",
    technologiesUsed: [
      { name: "React.js", category: "Frontend Interface" },
      { name: "Python", category: "Backend Engine" },
      { name: "Face Recognition", category: "Computer Vision" },
      { name: "REST APIs", category: "Integration" },
      { name: "Analytics Dashboard", category: "Visualization" },
    ],
    type: "Computer Vision & Full-Stack System",
  },
  {
    id: "crop-disease-diagnosis",
    title: "AI-Enabled Crop Disease Diagnosis & Severity Detection System",
    subtitle: "Scalable Asynchronous Agricultural Inference Service",
    tagline: "Achieved ~96% classification accuracy with FastAPI REST endpoints, Celery asynchronous processing, and Redis caching.",
    description:
      "Developed REST APIs using FastAPI for AI model inference and severity classification (~96% accuracy), backed by PostgreSQL and asynchronous Celery/Redis queue processing.",
    highlightMetric: "~96% AI Accuracy",
    tags: [
      "FastAPI",
      "AI Inference",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Asynchronous",
      "REST APIs",
    ],
    keyContributions: [
      "Developed high-performance REST APIs using FastAPI for AI model inference and disease severity classification (~96% accuracy).",
      "Designed relational database backend with PostgreSQL to store diagnoses, farmer telemetry, and historical disease records.",
      "Implemented asynchronous background processing using Celery and Redis to offload compute-heavy image inference jobs.",
      "Built scalable microservice architecture capable of handling concurrent prediction requests with zero thread starvation.",
    ],
    keyFeatures: [
      "Disease identification and multi-tier severity classification with ~96% precision",
      "Asynchronous job queuing with Celery worker pools and Redis broker",
      "FastAPI asynchronous request handling for near-instant client acknowledgement",
      "PostgreSQL audit records with diagnosis history and remedial recommendations",
    ],
    architectureOverview:
      "Client requests containing leaf imagery hit FastAPI endpoints, which push inference tasks to a Redis message broker. Celery worker clusters pull tasks asynchronously, execute deep learning classification models, and commit results to PostgreSQL.",
    technologiesUsed: [
      { name: "FastAPI", category: "High-Performance ASGI" },
      { name: "Celery", category: "Distributed Task Queue" },
      { name: "Redis", category: "Message Broker / Cache" },
      { name: "PostgreSQL", category: "Database" },
      { name: "AI Severity Classifier", category: "Computer Vision Model" },
    ],
    type: "Distributed AI & Backend Architecture",
  },
];

export const HACKATHON_EXPERIENCE = {
  title: "ByteVerse 7.0 Hackathon",
  organizer: "NIT Patna (National Institute of Technology, Patna)",
  date: "04/2025",
  formattedDate: "April 2025",
  achievementBadge: "National Level Hackathon Participant",
  technologies: ["Python", "Streamlit", "OpenAI API", "HTML"],
  description:
    "Participated in ByteVerse 7.0 Hackathon organized by NIT Patna, where I collaborated with a team to develop an AI-powered web application promoting mental wellness.",
  keyContributions: [
    "Developed conversational AI functionality leveraging OpenAI API for supportive, empathetic dialogue.",
    "Implemented interactive mood tracking to log emotional patterns over time.",
    "Created interactive wellness mini-games to provide cognitive relaxation.",
    "Contributed across full-stack: frontend interface design and backend API integration.",
    "Delivered a working prototype under strict hackathon time constraints in a collaborative team effort.",
  ],
  outcomes: [
    "Rapid prototyping under strict hackathon deadlines",
    "Collaborative cross-functional teamwork and Git version control",
    "Hands-on conversational AI integration with Streamlit web UI",
  ],
};

export const EDUCATION_DATA = {
  institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
  degree: "Bachelor of Technology (B.Tech)",
  department: "Computer Science Engineering",
  duration: "2023 – 2027",
  status: "Currently in 3rd Year (Undergraduate)",
  cgpa: "6.52",
  location: "Coimbatore, Tamil Nadu",
  highlights: [
    "Curriculum covering Data Structures, Algorithms, Web Engineering, and Database Systems",
    "Elected as Class Representative (3rd Year) leading student-faculty coordination",
    "Active academic projects in full-stack web platforms and applied AI systems",
  ],
};

export const TRAINING_DATA = {
  title: "Data Science",
  institution: "IIT Madras BS Degree Programme",
  duration: "05/2024 – Present",
  mode: "Virtual / Online",
  nature: "Ongoing Undergraduate BS Degree Programme",
  note: "Currently pursuing foundational coursework; not represented as a completed certification.",
  description:
    "Enrolled in the Indian Institute of Technology Madras (IIT Madras) BS Degree Programme in Data Science and Applications. Developing rigorous mathematical, statistical, computational, and data-driven problem-solving competencies.",
  focusAreas: [
    "Foundational Mathematics & Statistics for Data Science",
    "Computational Thinking and Algorithmic Logic",
    "Python for Data Handling & Scientific Computing",
    "Data Exploration, Analysis, and Modeling Techniques",
  ],
};

export const EXTRACURRICULAR_DATA = {
  title: "Community Involvement & Leadership",
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
    title: "Class Representative",
    role: "Elected Student Leader",
    duration: "3rd Year",
    description:
      "Serving as Class Representative for the 3rd year Computer Science Engineering batch, acting as the key liaison between students and departmental faculty.",
    points: [
      "Departmental communication and academic scheduling coordination",
      "Student advocacy and peer support management",
      "Organizing class-wide technical and academic activities",
    ],
  },
};
