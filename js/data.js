/* ============================================================
   Portfolio data — exact content from the original React project
   ============================================================ */

const RESUME_URL =
  "https://surya63023.github.io/surya-developer-portfolio/Surya%20Resume.pdf";

const TYPED_STRINGS = [
  "Building scalable backend systems with Java & Spring Boot",
  "Crafting responsive frontends with React",
  "Designing clean REST APIs and MySQL data layers",
];

const SOCIAL_LINKS = [
  { name: "mail", url: "mailto:suryateja36200@gmail.com" },
  { name: "linkedin", url: "https://www.linkedin.com/in/suryateja-developer" },
  { name: "github", url: "https://github.com/Surya63023" },
  { name: "instagram", url: "https://www.instagram.com/surya__teja________/" },
];

const SOCIAL_PROFILES = [
  {
    name: "GitHub",
    handle: "github.com/Surya63023",
    url: "https://github.com/Surya63023",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/suryateja-developer",
    url: "https://www.linkedin.com/in/suryateja-developer",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    handle: "instagram.com/surya__teja________",
    url: "https://www.instagram.com/surya__teja________/",
    icon: "instagram",
  },
];

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const SKILLS = {
  frontend: [
    { name: "HTML5", icon: `${DEVICON}/html5/html5-original.svg` },
    { name: "CSS3", icon: `${DEVICON}/css3/css3-original.svg` },
    {
      name: "JavaScript",
      icon: `${DEVICON}/javascript/javascript-original.svg`,
    },
    { name: "React", icon: `${DEVICON}/react/react-original.svg` },
  ],
  backend: [
    { name: "Java", icon: `${DEVICON}/java/java-original.svg` },
    { name: "Spring Boot", icon: `${DEVICON}/spring/spring-original.svg` },
    { name: "Hibernate", icon: `${DEVICON}/hibernate/hibernate-original.svg` },
    { name: "Tomcat", icon: `${DEVICON}/tomcat/tomcat-original.svg` },
    { name: "Node basics", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
  ],
  databases: [
    { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
    {
      name: "MySQL Workbench",
      icon: `${DEVICON}/mysql/mysql-original-wordmark.svg`,
    },
  ],
  other: [
    { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
    { name: "GitHub", icon: `${DEVICON}/github/github-original.svg` },
    { name: "Eclipse", icon: `${DEVICON}/eclipse/eclipse-original.svg` },
    { name: "VS Code", icon: `${DEVICON}/vscode/vscode-original.svg` },
  ],
};

const SKILL_GROUPS = [
  { key: "frontend", title: "Frontend" },
  { key: "backend", title: "Backend" },
  { key: "databases", title: "Databases" },
  { key: "other", title: "Tools" },
];

const SKILL_TAGS = {
  "Core Backend": [
    "Core Java",
    "OOPS",
    "Exception Handling",
    "Multithreading",
    "Collections",
  ],
  "Java EE": ["JDBC", "Servlets", "JSP", "JEE", "Spring MVC", "REST APIs"],
  Database: ["MySQL", "CRUD Operations", "JDBC Templates", "Workbench"],
};

const PROJECTS = [
  {
    slug: "careerhub",
    name: "CareerHub — Smart Job Portal",
    category: "backend",
    label: "Enterprise Java Application",
    status: "Completed",
    description:
      "An enterprise-level smart job portal that connects candidates, recruiters and admins on a single secure platform. It includes AI-assisted resume matching and resume parsing so recruiters instantly see how well an applicant fits a role. Spring Security with JWT powers role-based authentication, and every module is exposed through clean REST APIs. Dedicated dashboards handle job posting, application tracking and platform administration.",
    image: "assets/projects/careerhub.jpg",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "Spring Data JPA",
      "MySQL",
      "REST API",
      "Maven",
      "JavaScript",
    ],
    liveUrl: "https://surya63023.github.io/careerhub-smart-job-portal/",
    githubUrl: "https://github.com/Surya63023/careerhub-smart-job-portal",
  },
  {
    slug: "foodiehub",
    name: "FoodieHub — Online Food Delivery System",
    category: "backend",
    label: "Full Stack Java Project",
    status: "Completed",
    description:
      "A full stack online food delivery application built on a classic Java web stack. Users can register, browse restaurants, search dishes, manage their cart and place orders end to end. The backend follows an MVC structure with Servlets and JSP, while JDBC handles all MySQL persistence. The interface is fully responsive and deployed on Apache Tomcat.",
    image: "assets/projects/foodiehub.jpg",
    techStack: [
      "Java",
      "Servlets",
      "JSP",
      "JDBC",
      "MySQL",
      "Maven",
      "Apache Tomcat",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveUrl:
      "https://surya63023.github.io/FoodieHub-Online-Food-Delivery-System/",
    githubUrl:
      "https://github.com/Surya63023/FoodieHub-Online-Food-Delivery-System",
  },
  {
    slug: "hospital-management",
    name: "Hospital Management System",
    category: "backend",
    label: "Enterprise Java Project",
    status: "Completed",
    description:
      "An enterprise-grade hospital management system built with Java 11, Jakarta Servlet 6, JSP and JDBC. It implements a layered MVC architecture with the DAO pattern to keep business logic, data access and views cleanly separated. Features cover role-based authentication, appointment scheduling, patient and doctor records, and medical report management. Audit logging tracks every critical action across the system.",
    image: "assets/projects/hospital.jpg",
    techStack: [
      "Java 11",
      "Jakarta Servlet",
      "JSP",
      "JDBC",
      "MySQL",
      "MVC Architecture",
      "DAO Pattern",
      "Apache Tomcat",
    ],
    liveUrl:
      "https://surya63023.github.io/hospital-management-system-java-full-stack-project/",
    githubUrl:
      "https://github.com/Surya63023/hospital-management-system-java-full-stack-project",
  },
  {
    slug: "nova-calculator",
    name: "Nova — Scientific Calculator",
    category: "web",
    label: "Frontend Application",
    status: "Completed",
    description:
      "A modern scientific calculator powered by a custom-built expression engine written from scratch in JavaScript. It supports trigonometric functions, DEG/RAD modes, memory operations and a full calculation history. Live results update as you type, and complete keyboard support makes it fast for power users. Dark and light themes with smooth UI animations round out the experience.",
    image: "assets/projects/calculator.jpg",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Expression Parser",
      "Responsive UI",
    ],
    liveUrl: "https://surya63023.github.io/nova-scientific-calculator/",
    githubUrl: "https://github.com/Surya63023/nova-scientific-calculator",
  },
  {
    slug: "flow-task-manager",
    name: "Task Flow — Task Manager",
    category: "web",
    label: "Productivity Web App",
    status: "Completed",
    description:
      "A responsive task management app designed around a daily timeline view. It offers full task CRUD, smart filters, instant search, category tracking and progress analytics that visualise how the day is going. All data persists in localStorage so nothing is lost between sessions. Dark and light themes with smooth animations keep the interface focused and pleasant.",
    image: "assets/projects/taskflow.jpg",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "localStorage",
      "Responsive Design",
    ],
    liveUrl: "https://surya63023.github.io/flow-task-manager/",
    githubUrl: "https://github.com/Surya63023/flow-task-manager",
  },
  {
    slug: "password-generator-pro",
    name: "Password Generator Pro",
    category: "web",
    label: "Security Utility",
    status: "Completed",
    description:
      "A security-focused generator that creates strong passwords, memorable passphrases and numeric PINs. A live strength analyser scores every result in real time so users understand exactly how safe their credentials are. One-click clipboard support, theme switching and accessible controls make it practical for daily use. The whole tool is responsive and built with clean vanilla JavaScript.",
    image: "assets/projects/password.jpg",
    techStack: ["HTML", "CSS", "JavaScript", "Clipboard API", "Accessibility"],
    liveUrl: "https://surya63023.github.io/password-generator-pro/",
    githubUrl: "https://github.com/Surya63023/password-generator-pro",
  },
  {
    slug: "skycart-weather",
    name: "SkyCart — Weather Dashboard",
    category: "web",
    label: "API Integration Project",
    status: "Completed",
    description:
      "A weather dashboard that delivers real-time conditions and location-based forecasts through the OpenWeather API. The UI adapts dynamically to the current weather, changing visuals as conditions change. Users can search any city and instantly see temperature, humidity and forecast details. It ships with dark and light themes and a clean responsive layout.",
    image: "assets/projects/weather.jpg",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "OpenWeather API",
      "Fetch API",
      "Responsive Design",
    ],
    liveUrl: "https://surya63023.github.io/skycart-weather-app/",
    githubUrl: "https://github.com/Surya63023/skycart-weather-app",
  },
  {
    slug: "modern-quiz-app",
    name: "Modern Quiz Application",
    category: "web",
    label: "Interactive Web App",
    status: "Completed",
    description:
      "An interactive quiz application with a timed question flow and instant scoring feedback. The codebase follows a modular architecture that keeps question data, state and rendering cleanly separated and easy to extend. Local storage keeps track of progress and past results between sessions. Animations, a dark/light theme and a responsive layout make it comfortable on any device.",
    image: "assets/projects/quiz.jpg",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Modular Architecture",
      "localStorage",
    ],
    liveUrl: "https://surya63023.github.io/modern-quiz-app/",
    githubUrl: "https://github.com/Surya63023/modern-quiz-app",
  },
  {
    slug: "cineverse",
    name: "CineVerse — Movie Search App",
    category: "web",
    label: "API Integration Project",
    status: "Completed",
    description:
      "A movie discovery platform with real-time search across a large movie database. Users can explore trending titles, open detailed movie pages and build personal watchlists and favourites. Data is fetched asynchronously through the Fetch API with a modular, maintainable code structure. The responsive UI is optimised for a smooth browsing experience on phones, tablets and desktops.",
    image: "assets/projects/cineverse.jpg",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Movie Database API",
      "Fetch API",
      "Responsive UI",
    ],
    liveUrl: "https://surya63023.github.io/cineverse-movie-search-app/",
    githubUrl: "https://github.com/Surya63023/cineverse-movie-search-app",
  },
];

const ABOUT_VALUES = [
  {
    title: "Clarity over cleverness",
    body: "Readable, layered code that the next developer can pick up without a guided tour.",
  },
  {
    title: "Finish what I start",
    body: "Every project here is deployed and documented, not left half-built in a branch.",
  },
  {
    title: "Learn in public",
    body: "I ship, get feedback, refactor, and push the improved version back to GitHub.",
  },
];

const STATS = [
  { value: "15+", label: "Technologies" },
  { value: "9", label: "Shipped Projects" },
  { value: "100+", label: "DSA Problems" },
  { value: "8.51", label: "B.Tech. CGPA" },
];

const EDUCATION = [
  {
    period: "2022 - 2025",
    title: "Bachelor of Technology (B.Tech)",
    subtitle: "Electrical and Electronics Engineering",
    highlight: "CGPA 8.51",
    description:
      "Built a strong academic foundation with consistent performance and a problem-solving focus.",
  },
  {
    period: "2025 - 2026",
    title: "Java Full Stack Development",
    subtitle: "Professional Training Program",
    highlight: "Tap Academy",
    description:
      "Intensive hands-on training in Java, Spring Boot, JDBC, Servlets, JSP, React, REST APIs, MySQL, Git and full stack development.",
  },
];

const CERTIFICATIONS = [
  {
    title: "Full Stack Development – Tap Academy",
    description:
      "Professional Full Stack Development training covering Java, Spring Boot, JDBC, Servlets, JSP, REST APIs, MySQL, frontend development and modern web application architecture.",
  },
  {
    title: "TCS iON Career Edge – Young Professional (2025)",
    description:
      "Industry-focused certification covering communication skills, workplace readiness, presentation skills, interview preparation and corporate professionalism.",
  },
  {
    title: "Cloud Computing – NPTEL, IIT Kharagpur (2024)",
    description:
      "Academic certification focused on cloud infrastructure, virtualization, distributed computing and scalable cloud-based systems.",
  },
  {
    title: "Young IoT Prodigy Program – Infosys Springboard (2024)",
    description:
      "IoT-focused program covering embedded systems, smart device communication, sensor integration, automation and connected technologies.",
  },
];

const CONTACT_INFO = {
  email: "suryateja36200@gmail.com",
  phone: "+91 6302379483",
  location: "Bengaluru, Karnataka, India",
};

/* EmailJS (https://www.emailjs.com) — used by the contact form so messages
   are sent directly, instead of opening the visitor's mail app. */
const EMAILJS_CONFIG = {
  publicKey: "8497qhfTVx4tYVdM9",
  serviceId: "service_dkeibij",
  templateId: "template_y24er3o",
};
