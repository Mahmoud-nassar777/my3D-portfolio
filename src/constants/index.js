import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  sass,
  vite,
  responsive,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  olspark,
  logo,
  javascriptt,
  reactt,
  githup,
  carrent,
  jobit,
  tripguide,
  threejs,
  Apple,
  BrainwaveAI,
  MultiPage,
  AdminDashboard,
  register,
  AYA,
  DONIA,
  AHMAD,
  AMAL,
  MOHAMED,
  JOO,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Modern Web Interfaces Developer",
    icon: backend,
  },
  {
    title: "JavaScript & React Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "sass",
    icon: sass,
  },
  
  {
    name: "vite",
    icon: vite,
  },
  {
    name: "responsive",
    icon: responsive,
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
  
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
    // icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];
const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Olspark",
    icon: olspark,
    iconBg: "#383E56",
    date: "Sep 2024 - Present",
    points: [
      "Developed responsive websites using HTML, CSS, JS, and Bootstrap.",
      "Worked on company projects like Imamacademy and Jinan Academy.",
    ],
  },
  {
    title: "Frontend Developer Trainee",
    company_name: "Olspark Training Program",
    icon: olspark,
    iconBg: "#ffffff",
    date: "Feb 2024 - Jul 2024",
    points: [
      "Completed intensive frontend training with focus on Figma to code.",
      "Built projects like Admin Dashboard and AI Landing.",
    ],
  },
  {
    title: "Personal Projects",
    company_name: "Self-Developed",
    icon: logo,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "Designed and built portfolio websites and UI experiments.",
      "Notable projects: Movie App, Stunning Portfolio.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Freelance",
    icon: reactt, // أيقونة React لو عندك
    iconBg: "#61DAFB",
    date: "2023 - Present",
    points: [
      "Built dynamic and interactive UIs using React.js.",
      "Developed apps like Todo List and CRUD system with React Hooks.",
    ],
  },
  {
    title: "JavaScript Developer",
    company_name: "Freelance",
    icon: javascriptt, // أيقونة JS لو عندك
    iconBg: "#0395bb",
    date: "2023 - Present",
    points: [
      "Built interactive web features using vanilla JavaScript.",
      "Developed small apps like Todo List and CRUD system.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "GitHub Community",
    icon: githup,
    iconBg: "#292929",
    date: "2023 - Present",
    points: [
      "Shared frontend templates and reusable components.",
      "Collaborated on UI libraries and CSS animations.",
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "Working with Mahmoud made our frontend come to life. He turned simple ideas into stunning web interfaces.",
    name: "Aya Wael",
    designation: "Mobile App Development",
    // company: "Acme Co",
    image: AYA,
  },
  {
    testimonial:
      "I loved how Mahmoud communicated throughout the project. Always professional, and delivered exactly what we needed.",
    name: "Donia Mahmoud",
    designation: "Trainee Software Engineer",
    // company: "DEF Corp",
    image: DONIA,
  },
  {
    testimonial:
      "Mahmoud is one of the most detail-oriented developers I’ve worked with. His designs are clean, modern, and always responsive.",
    name: "Ahmad Mostafa",
    designation: "Data analyst",
    // company: "456 Enterprises",
    image: AHMAD,
  },
  {
    testimonial:
      "Mahmoud is a talented Front-End Developer who delivers pixel-perfect, high-performance websites with creativity and precision.",
    name: "Amal Mostafa.",
    designation: "UI/UX Designer.",
    // company: "456 Enterprises",
    image: AMAL,
  },
  {
    testimonial:
      "Working with Mahmoud was great; he’s a skilled Front-End Developer who creates accurate designs, clean code, and smooth user experiences.",
    name: "Mohamed hesham.",
    designation: "Sales operations manager.",
    // company: "456 Enterprises",
    image: MOHAMED,
  },
  {
    testimonial:
      "Mahmoud is an excellent Front-End Developer, delivering precise designs, clean code, and always ensuring great performance and user experience.",
    name: "Yossef hesham.",
    designation: "Agricultural engineer",
    // company: "456 Enterprises",
    image: JOO,
  },
];

const projects = [
  {
    name: "Apple iPhone 15 Pro",
    description:
      "An elegant demo website inspired by Apple's official website showcases the iPhone 15 Pro's features, including its titanium design, the powerful A17 Pro gaming chip, and the longest optical zoom ever for an iPhone. This design showcases the strength of Apple's branding in a modern and attractive way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "iPhone15Pro",
        color: "green-text-gradient",
      },
      {
        name: "Frontend",
        color: "pink-text-gradient",
      },
    ],
    image: Apple,
    source_code_link: "https://mahmoud-nassar777.github.io/apple-website/",
  },
  {
    name: "Brainwave",
    description:
      "Brainwave is an AI-powered chat app designed to enhance your productivity through smart, fast conversations. It offers natural language understanding, easy device integration, and powerful tools: a video and image generator, image enhancement, and an analytics dashboard—all at flexible pricing, including free, premium, and business versions. Get ready to explore the future of AI with Brainwave.",
    tags: [
      {
        name: "BrainwaveAI",
        color: "blue-text-gradient",
      },
      {
        name: "vite+react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: BrainwaveAI,
    source_code_link: "https://mahmoud-nassar777.github.io/brainwave/",
  },
  {
    name: "Frontend Developer Portfolio",
    description:
      "A multi-page personal portfolio website showcasing my work as a frontend developer, from UI and layout design to UI/UX projects and JavaScript applications. The site includes about-me sections, a blog for articles, and featured work such as designing a login form and a music platform with a modern interface. A simple and elegant experience that reflects my web development skills.",
    tags: [
      {
        name: "WebPortfolio",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: MultiPage,
    source_code_link: "https://mahmoud-nassar777.github.io/Multi-Page/",
  },
  {
    name: "Admin Dashboard",
    description: "An interactive administrative dashboard that brings together all the tools in one place: sales analytics, site visits, searches, recent users, and recent orders. It features a day/night mode, task reminder notifications, and organized schedules for displaying courses and bookings. A modern, easy-to-use design makes management and follow-up faster and more flexible.",
    tags: [
      {
        name: "AdminDashboard",
        color: "blue-text-gradient",
      },
      {
        name: "WebAnalytics",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: AdminDashboard,
    source_code_link: "https://mahmoud-nassar777.github.io/Admin-Dashboard/",
  },
  {
    name: "login page",
    description: "An interactive registration interface developed in JavaScript, supporting data validation such as email and password, with instant alerts when fields are incorrect or mismatched. The page combines ease of use with a seamless user experience.",
    tags: [
      {
        name: "FormValidation",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Animation",
        color: "pink-text-gradient",
      },
    ],
    image: register,
    source_code_link: "https://mahmoud-nassar777.github.io/register/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };