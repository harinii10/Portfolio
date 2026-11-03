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
  email: "hariniakk006@gmail.com",
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
    "Software Developer",
    "AI & Technology Enthusiast",
  ],
  professionalIntro:
    "Motivated Computer Science undergraduate with hands-on project experience in Java, Python, and Web Development. Interested in applying technical skills to collaborative academic and industry projects.",
  heroDescription:
    "I'm a Computer Science Engineering student passionate about software development, problem-solving, and emerging technologies. I enjoy transforming ideas into practical applications using programming, web technologies, and intelligent systems.",
  aboutContent: [
    "I'm a Computer Science Engineering undergraduate at Amrita Vishwa Vidyapeetham, Coimbatore. My technical interests include programming, web development, artificial intelligence, and data science.",
    "Through academic projects and hackathon participation, I have gained practical experience developing software applications, implementing algorithms, and working collaboratively to solve problems.",
    "I continuously explore new technologies and enjoy building solutions that combine technical knowledge with real-world applications.",
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
      "Strong theoretical foundation in Data Structures, Algorithms, Object-Oriented Programming, and Computer Science fundamentals at Amrita Vishwa Vidyapeetham.",
    icon: "GraduationCap",
    points: ["Algorithm Design & Analysis", "Object-Oriented Architecture", "Database Management (SQL)"],
  },
  {
    id: "soft-dev",
    title: "Software Development",
    badge: "Full-Stack & Systems",
    description:
      "Hands-on development experience building robust applications using Java, Python, and modern Web technologies with modular, readable, and efficient architectures.",
    icon: "Code2",
    points: ["Modern Web Development (React, Node.js)", "Modular Java Applications", "Clean Code & Data Structures"],
  },
  {
    id: "ai-ds",
    title: "AI & Data Science",
    badge: "Emerging Tech",
    description:
      "Active practitioner exploring Reinforcement Learning (PPO), Artificial Neural Networks (ANN), and Data Science through the IIT Madras BS Degree Programme.",
    icon: "BrainCircuit",
    points: ["Reinforcement Learning & ANNs", "Data Analysis (Pandas, NumPy)", "Simulation & TraCI Integration"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Terminal",
    description: "Core languages used for systems, data science, and web development.",
    skills: [
      { name: "Java", description: "Modular systems, OOP principles, data structure implementations", highlight: true },
      { name: "Python", description: "AI/ML algorithms, reinforcement learning, simulation scripts", highlight: true },
      { name: "C", description: "Procedural programming, low-level memory, core computation" },
      { name: "HTML", description: "Semantic markup, modern web accessibility structure" },
      { name: "CSS", description: "Responsive styling, modern layouts, flexbox and grid" },
      { name: "SQL", description: "Relational database querying, schema design, data manipulation" },
    ],
  },
  {
    title: "Frameworks and Libraries",
    icon: "Layers",
    description: "Modern tools and frameworks for interactive web apps and intelligent data pipelines.",
    skills: [
      { name: "ReactJS", description: "Component-based web architecture, state management, UI design", highlight: true },
      { name: "Node.js", description: "Server runtime environment, backend logic and API services" },
      { name: "Scikit-learn", description: "Machine learning workflows, model evaluation, and classification", highlight: true },
      { name: "Pandas", description: "Structured data analysis, wrangling, and tabular data operations" },
      { name: "NumPy", description: "High-performance vector and matrix numeric computing" },
      { name: "Matplotlib", description: "Data visualization, statistical plotting, and metric charts" },
    ],
  },
  {
    title: "Tools & Environments",
    icon: "Wrench",
    description: "Industry-standard development environments and IDEs used for daily engineering.",
    skills: [
      { name: "VS Code", description: "Primary IDE for full-stack web, Python, and script development", highlight: true },
      { name: "Eclipse", description: "Enterprise Java development, debugging, and class structuring" },
      { name: "Code Blocks", description: "C programming environment, algorithmic prototyping and testing" },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "adaptive-traffic-control",
    title: "Adaptive Traffic Signal Control Using Fog Computing & Reinforcement Learning",
    subtitle: "Intelligent Urban Mobility & Autonomous Decision-Making",
    tagline: "Achieved >99% reduction in intersection waiting time and time loss over static timing.",
    description:
      "Designed an intelligent traffic signal control system integrating Artificial Neural Networks (ANN) and Proximal Policy Optimization (PPO) for real-time adaptive decision-making.",
    highlightMetric: "99% Waiting Time Reduction",
    tags: [
      "Python",
      "ANN",
      "PPO",
      "Reinforcement Learning",
      "SUMO",
      "TraCI",
      "Fog Computing",
    ],
    keyContributions: [
      "Integrated Artificial Neural Networks (ANN) and Proximal Policy Optimization (PPO) for adaptive traffic signal control.",
      "Implemented and rigorously tested the model using the SUMO (Simulation of Urban MObility) environment.",
      "Used TraCI (Traffic Control Interface) for continuous real-time communication between the Python agent and SUMO simulator.",
      "Developed an adaptive real-time decision-making approach distributed at the fog computing layer.",
      "Achieved over 99% reduction in waiting time and time loss compared to fixed-time control, as reported in the project results.",
    ],
    keyFeatures: [
      "Dynamic phase duration adaptation based on queue lengths",
      "Continuous state-space modeling via TraCI API",
      "PPO policy actor-critic gradient updates for policy stability",
      "Simulated urban vehicular density benchmarks",
    ],
    architectureOverview:
      "Vehicular telemetry from the SUMO simulator is intercepted via TraCI by a fog-level controller. An Artificial Neural Network evaluates current queue density and vehicular velocity, while a Proximal Policy Optimization (PPO) policy determines optimal phase transitions to minimize traffic congestion and overall vehicular idling.",
    technologiesUsed: [
      { name: "Python", category: "Core Language" },
      { name: "PPO (Proximal Policy Optimization)", category: "RL Algorithm" },
      { name: "ANN (Artificial Neural Networks)", category: "Deep Learning" },
      { name: "SUMO Simulator", category: "Traffic Simulation" },
      { name: "TraCI", category: "Simulator API" },
      { name: "Fog Computing Architecture", category: "Distributed Systems" },
    ],
    type: "AI & Distributed Systems Research",
  },
  {
    id: "atm-transaction-system",
    title: "ATM Transaction System",
    subtitle: "Object & Pointer-Based Financial Flow Simulation",
    tagline: "Modular financial transaction engine powered by custom linked-list data structures.",
    description:
      "Developed an ATM transaction system using Python and linked-list-based data structures.",
    highlightMetric: "Dynamic Memory Linked-List",
    tags: ["Python", "Data Structures", "Linked List", "Modular Programming"],
    keyContributions: [
      "Collaborated in a team to conceptualize and develop the complete ATM transaction engine in Python.",
      "Architected dynamic linked-list structures to maintain account ledgers and transaction history efficiently.",
      "Engineered validation algorithms preventing unauthorized overdrafts and securing balance inquiries.",
      "Fostered effective collaborative team workflows, code reviews, and structured modular division.",
    ],
    keyFeatures: [
      "Real-time balance checking with zero latency lookup",
      "Cash withdrawal with strict balance boundary validation",
      "Cash deposit with instant dynamic node insertion",
      "Linked-list-based chronological transaction record management",
      "Team collaboration and clean separation of concerns",
    ],
    architectureOverview:
      "Built with a focus on data structure efficiency, every account state and successive transaction is modeled through dynamic linked-list nodes. This ensures $O(1)$ sequential appending of audit logs and disciplined state mutation during financial operations.",
    technologiesUsed: [
      { name: "Python", category: "Core Programming" },
      { name: "Linked List Data Structure", category: "Core CS" },
      { name: "Modular Architecture", category: "Software Design" },
      { name: "Git & Team Collaboration", category: "Team Workflow" },
    ],
    type: "Data Structures & Systems",
  },
  {
    id: "banking-systems",
    title: "Banking Systems",
    subtitle: "Enterprise Java Architecture & Algorithmic Design",
    tagline: "Designed for high runtime efficiency, OOP modularity, and seamless client interactions.",
    description:
      "Designed and developed a modular banking system in Java using object-oriented programming and key data structures, focusing on algorithmic design, runtime efficiency, and user experience.",
    highlightMetric: "Modular OOP Architecture",
    tags: ["Java", "OOP", "Data Structures", "Algorithmic Problem-Solving"],
    keyContributions: [
      "Engineered a scalable, modular banking architecture leveraging OOP principles (encapsulation, inheritance, polymorphism).",
      "Implemented optimized data structures to guarantee predictable algorithmic runtime efficiency for high-frequency operations.",
      "Designed secure input handling and transactional exception recovery routines for resilient user experience.",
      "Authored clean, maintainable, and thoroughly documented Java code suitable for enterprise extension.",
    ],
    keyFeatures: [
      "Modular architecture separating business logic from transaction routing",
      "Robust Object-Oriented design with immutable account models",
      "Key data structure implementation for efficient lookup and updates",
      "Algorithmic problem-solving applied to account reconciliation",
      "Enhanced user experience with formatted interactive workflows",
      "High runtime efficiency and resource optimization",
    ],
    architectureOverview:
      "The banking engine applies pure Java Object-Oriented design patterns. Dedicated service layers handle customer records, transactional balances, and ledger auditing. Algorithmic optimizations ensure minimal computational overhead and safe concurrent state manipulation.",
    technologiesUsed: [
      { name: "Java", category: "Primary Language" },
      { name: "Object-Oriented Programming (OOP)", category: "Paradigm" },
      { name: "Data Structures", category: "Core CS" },
      { name: "Algorithmic Efficiency", category: "Optimization" },
      { name: "Eclipse IDE", category: "Development Tool" },
    ],
    type: "Object-Oriented Software Engineering",
  },
];

export const HACKATHON_EXPERIENCE = {
  title: "ByteVerse 7.0 Hackathon",
  organizer: "NIT Patna (National Institute of Technology, Patna)",
  date: "April 2025",
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
    "Delivered a working prototype under strict hackathon time constraints in a collaborative team environment.",
  ],
  outcomes: [
    "Rapid prototyping under strict 24-48h hackathon deadlines",
    "Collaborative cross-functional teamwork and Git version control",
    "Hands-on conversational AI integration with Streamlit web UI",
  ],
};

export const EDUCATION_DATA = {
  institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
  degree: "Bachelor of Technology (B.Tech)",
  department: "Computer Science Engineering",
  duration: "2023 – 2027",
  status: "Currently in 2nd Year (Undergraduate)",
  cgpa: "6.52",
  location: "Coimbatore, Tamil Nadu",
  highlights: [
    "Comprehensive curriculum in Data Structures, Algorithms, Computer Networks, and DBMS",
    "Active participation in technical workshops and departmental coding initiatives",
    "Focus on bridging theoretical computer science with practical software engineering",
  ],
};

export const TRAINING_DATA = {
  title: "Data Science",
  institution: "IIT Madras BS Degree Programme",
  duration: "May 2024 – Present",
  mode: "Virtual / Online",
  nature: "Ongoing Undergraduate BS Degree Programme",
  note: "Currently pursuing foundational coursework; not represented as a completed certification.",
  description:
    "Enrolled in the prestigious Indian Institute of Technology Madras (IIT Madras) BS Degree Programme in Data Science and Applications. Developing rigorous mathematical, statistical, computational, and data-driven problem-solving competencies.",
  focusAreas: [
    "Foundational Mathematics & Statistics for Data Science",
    "Computational Thinking and Algorithmic Logic",
    "Python for Data Handling & Scientific Computing",
    "Data Exploration, Analysis, and Modeling Techniques",
  ],
};

export const EXTRACURRICULAR_DATA = {
  title: "National Service Scheme (NSS)",
  role: "Active Member & Volunteer",
  duration: "2 Years Active Involvement",
  description:
    "Actively participated in NSS for 2 years, contributing to community service and social welfare programs.",
  impactAreas: [
    "Community outreach and social welfare initiative execution",
    "Collaborative leadership and grassroots teamwork",
    "Civic engagement and youth social responsibility programs",
  ],
};
