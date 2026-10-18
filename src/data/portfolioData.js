export const portfolioData = {
  personal: {
    name: "Mayank Singh",
    role: "Full-Stack Developer & CS Faculty",
    headline: "M.Tech CSE Scholar · MERN Stack · Java & DSA · DBMS",
    location: "Kanpur, Uttar Pradesh, India",
    email: "mayanksinghtilak@gmail.com",
    phone: "+91 96606 29283",
    status: "Open to Software Engineering & Teaching Roles",
    summary:
      "A diligent and persistent Computer Science and Engineering student with problem solving skills and programming knowledge, looking for a growth-oriented and challenging career where I can contribute my software knowledge and skills to the organization and further enhance my experience through continuous learning.",
    socials: {
      github: "https://github.com/mayanksinghtilak",
      linkedin: "https://www.linkedin.com/in/mayank-singh-tilak",
      email: "mailto:mayanksinghtilak@gmail.com",
      phone: "tel:+919660629283"
    }
  },

  skills: {
    languages: [
      { name: "Java (DSA, OOPs)", level: "Advanced", tag: "Core" },
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "Full-Stack" },
      { name: "HTML5", level: "Proficient", tag: "Web" },
      { name: "CSS3", level: "Proficient", tag: "Web" }
    ],
    frameworks: [
      { name: "React.js", tag: "Frontend" },
      { name: "Node.js", tag: "Backend" },
      { name: "Express.js", tag: "Backend" }
    ],
    databases: [
      { name: "MySQL", tag: "Relational / SQL" },
      { name: "Mongo DB", tag: "NoSQL" }
    ],
    libraries: [
      { name: "Redux", tag: "State Management" },
      { name: "React Router", tag: "Navigation" },
      { name: "Mongoose", tag: "ODM" },
      { name: "Socket.io", tag: "Real-time" },
      { name: "Passport.js", tag: "Authentication" },
      { name: "Material.io / Material UI", tag: "UI Components" }
    ],
    tools: [
      { name: "Visual Studio / VS Code", tag: "Editor" },
      { name: "GitHub", tag: "Version Control" },
      { name: "Postman", tag: "API Testing" },
      { name: "Git", tag: "VCS" }
    ]
  },

  achievement: {
    title: "IEEE International Conference Publication",
    conference: "2026 IEEE 6th International Conference at Galgotias University",
    status: "Paper Accepted",
    paperTitle: "An Integrated Multi-model Hybrid ANN-CNN-LSTM Framework of Heart Disease Prediction Using Structured, Textual, and Medical Image Data",
    description:
      "Engineered an innovative multimodal deep learning architecture fusing tabular clinical features (ANN), cardiac medical scans/imaging (CNN), and longitudinal textual medical records (LSTM) to achieve higher diagnostic precision and robust risk stratification in early-stage heart disease prediction.",
    tags: ["Deep Learning", "ANN", "CNN", "LSTM", "Multi-modal AI", "Healthcare", "IEEE 2026"]
  },

  experience: [
    {
      role: "Computer Science Faculty",
      organization: "Arya College of Engineering and IT",
      location: "Jaipur, Rajasthan",
      period: "Nov. 2025 – Present",
      type: "Academic Faculty",
      isCurrent: true,
      description:
        "As a Computer Science Faculty, conducting practical-oriented DBMS Lab sessions, emphasizing SQL, database design, normalization, query optimization, and hands-on relational schema implementation.",
      skills: ["Database Management Systems (DBMS)", "SQL", "Database Design", "Schema Modeling", "Query Optimization"]
    },
    {
      role: "Computer Science Faculty",
      organization: "Jaipur Engineering College",
      location: "Jaipur, Rajasthan",
      period: "July 2025 – Nov. 2025",
      type: "Academic Faculty",
      isCurrent: false,
      description:
        "As a Computer Science Faculty, delivered dynamic and interactive lessons in AI ML Theory, enhancing student engagement, foundational algorithm comprehension, and practical project outcomes.",
      skills: ["Artificial Intelligence", "Machine Learning Theory", "Neural Networks", "Student Mentorship"]
    },
    {
      role: "Computer Science Faculty",
      organization: "ACMT Polytechnic College",
      location: "Agra, Uttar Pradesh",
      period: "Oct. 2023 – Aug. 2024",
      type: "Academic Faculty",
      isCurrent: false,
      description:
        "As a Computer Science Faculty, delivered dynamic and interactive lessons in core computer science subjects, enhancing student engagement, technical foundational skills, and academic performance.",
      skills: ["Core Computer Science", "Data Structures", "Operating Systems", "Computer Architecture"]
    },
    {
      role: "Teaching Assistant (Online Mode)",
      organization: "Coding Ninjas",
      location: "Remote / Online",
      period: "Sep. 2023 – Nov. 2023",
      type: "Technical Mentorship",
      isCurrent: false,
      description:
        "As a Teaching Assistant at Coding Ninjas, contributed to the learning journey of students by assisting them in grasping coding concepts, debugging complex code logic, and developing systematic problem-solving techniques.",
      skills: ["Data Structures & Algorithms", "Code Debugging", "Problem Solving", "Student Mentorship"]
    },
    {
      role: "Web Development Intern",
      organization: "Teachnook",
      location: "Remote",
      period: "July 2022 – January 2023",
      type: "Internship",
      isCurrent: false,
      description:
        "Gained valuable hands-on experience in Full Stack Web Development (MERN Stack: MongoDB, Express.js, React.js, Node.js), engineering responsive components, state workflows, and RESTful API backends.",
      skills: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]
    }
  ],

  projects: [
    {
      id: "kisan-mitra",
      title: "Kisan-Mitra Web App",
      featured: true,
      category: "Full Stack / Web App",
      subtitle: "Agricultural Marketplace & Farm Labor Hiring Platform",
      description:
        "A comprehensive web application designed to empower agricultural communities. Facilitates direct buying and selling of agricultural produce between farmers and buyers without middlemen, and incorporates an on-demand hiring module for seasonal agricultural workers and farm equipment operators.",
      highlights: [
        "Farmer-to-buyer direct digital marketplace with transparent product pricing and category filtering",
        "Dedicated labor hiring portal allowing farmers to contract seasonal workers for sowing and harvesting operations",
        "Dynamic backend powered by PHP and MySQL with normalized relational tables for users, listings, and hire bookings",
        "Responsive, mobile-friendly interface designed with vanilla JavaScript, modern CSS3, and structured JSON payloads"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "JSON", "PHP", "MySQL", "PHP Framework"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: "heart-disease-ai",
      title: "Multi-Modal Cardiac Disease Prediction System",
      featured: true,
      category: "AI & Research",
      subtitle: "Hybrid ANN-CNN-LSTM Diagnostic Framework (IEEE 2026)",
      description:
        "Research implementation and interactive evaluation platform for the accepted IEEE paper. Synthesizes clinical electronic health records, diagnostic radiology scans, and unstructured physician notes into a unified multimodal pipeline for cardiovascular risk assessment.",
      highlights: [
        "Tri-branch architecture: ANN for biochemical metrics, CNN for medical imagery, LSTM for longitudinal clinical text",
        "High diagnostic sensitivity and reduced false negatives compared to isolated single-modal classification models",
        "Interactive dashboard for clinical parameter simulation and risk probability scoring"
      ],
      techStack: ["Python", "TensorFlow / PyTorch", "React.js", "Tailwind CSS", "FastAPI", "Multimodal Fusion"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: "collab-task-hub",
      title: "SyncFlow — Realtime Team Workspace",
      featured: false,
      category: "Full Stack / MERN",
      subtitle: "MERN Stack Real-time Collaboration Engine with WebSockets",
      description:
        "A full-stack project collaboration and task tracking system engineered with React, Redux, Node.js, and Socket.io. Features live board updates, chat rooms, and secure session management.",
      highlights: [
        "Real-time state synchronization across active browser clients using Socket.io and Redux",
        "Secure authentication system implementing Passport.js and JWT session tokens",
        "Mongoose schemas with indexes for rapid retrieval of nested task comments and activity timelines"
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redux", "Passport.js"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      id: "java-dsa-bench",
      title: "Algorithmic Workbench & Visualizer",
      featured: false,
      category: "Java & DSA",
      subtitle: "Interactive Data Structures & Object-Oriented Simulator",
      description:
        "An educational visualization engine demonstrating fundamental Data Structures and Algorithms with step-by-step memory pointer models and runtime complexity analytics.",
      highlights: [
        "Visual step-through of Binary Search Trees, Graphs, Sorting algorithms, and Dynamic Programming tables",
        "Clean OOP architectural design patterns illustrating Encapsulation, Polymorphism, and Inversion of Control",
        "Live execution benchmarks measuring time and space complexity across varying input scales"
      ],
      techStack: ["Java (OOPs & DSA)", "JavaScript", "React.js", "Canvas API", "Tailwind CSS"],
      links: {
        github: "#",
        live: "#"
      }
    }
  ],

  education: [
    {
      degree: "Master of Technology (M.Tech)",
      field: "Computer Science and Engineering",
      institution: "CSJMU Kanpur University",
      location: "Kanpur, Uttar Pradesh",
      period: "2024 – 2026",
      score: "77.50%",
      scoreType: "Percentage",
      status: "Currently Pursuing / Final Year",
      details: "Advanced study in distributed systems, modern database architecture, artificial intelligence, and deep learning algorithms."
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "Krishna Institute of Technology",
      location: "Kanpur, Uttar Pradesh",
      period: "2019 – 2023",
      score: "72.10%",
      scoreType: "Percentage",
      status: "Graduated",
      details: "Comprehensive undergraduate engineering foundation in Data Structures & Algorithms, Object-Oriented Programming in Java, DBMS, and Web Technologies."
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      field: "Science & Mathematics",
      institution: "SS International SER. SEC. Public School",
      location: "India",
      period: "2018 – 2019",
      score: "61.00%",
      scoreType: "Percentage",
      status: "Completed",
      details: "Senior secondary education focusing on Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Secondary School Certificate (10th)",
      field: "General Academic Curriculum",
      institution: "Shri Agrasen Public School",
      location: "India",
      period: "2015 – 2016",
      score: "60.00%",
      scoreType: "Percentage",
      status: "Completed",
      details: "Foundational high school education in science, mathematics, and English."
    }
  ],

  certifications: [
    {
      name: "JAVA Certification",
      badge: "Core & Advanced",
      issuer: "Professional Technical Certification",
      topics: ["Object-Oriented Programming (OOPs)", "Data Structures & Algorithms (DSA)", "Multithreading", "Collections Framework"],
      icon: "Code"
    },
    {
      name: "React Certification",
      badge: "Frontend Framework",
      issuer: "Professional Web Development",
      topics: ["React Hooks & Custom Hooks", "Component Architecture", "State Management (Redux)", "React Router", "Virtual DOM Optimization"],
      icon: "Layers"
    },
    {
      name: "Front-End Web Development",
      badge: "Modern UI/UX",
      issuer: "Full Stack Track",
      topics: ["HTML5 Semantic Architecture", "CSS3 / Flexbox & Grid", "Modern JavaScript (ES6+)", "Responsive & Cross-Browser Design"],
      icon: "Layout"
    }
  ]
};
