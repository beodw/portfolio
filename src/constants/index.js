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
  meta,
  starbucks,
  tesla,
  shopify,
  businessHub,
  jobit,
  tripguide,
  threejs,
  businessHubShop,
  simSwapPortal,
  TMS,
  loadAndGoSite,
  TMSMobileApp,
} from "../assets";

import {
  businessHubAddAttribute,
  businessHubDashboard,
  businessHubImageUpload,
} from "../assets/business_hub";

import {
  LastRecharge,
  SimActivationDate,
  Success,
} from "../assets/sim_swap_portal";

import { Email, Login, Map, Orders } from "../assets/loadAndGoTms";

import {
  Blog,
  LandingPage,
  Offerings,
  Pricing,
  QA,
  SoftwareOfferings,
} from "../assets/loadAndWebsite";

import {
  Congratulations,
  LoginLnGMobile,
  OrdersLnGMobile,
  Schedule,
  SelectRole,
  Settings,
} from "../assets/loadAndGoMobile";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Team Leader",
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
    title: "React.js Developer",
    company_name: "MTN",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MTN Business Hub CMS",
    description:
      "Led development and integration of RESTful API to the dashboard and manage products pages on the CMS. Liasesed with product owner and product team to understand features and implement pixel perfect UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: businessHub,
    carousel_images: [
      businessHubAddAttribute,
      businessHubDashboard,
      businessHubImageUpload,
    ],
  },
  {
    name: "MTN Customer Portal",
    description:
      "Responsible for designing and implment payment microservice to process Visa and MasterCard payments on our platform. Liased with payment provider to understand security protocols and ensure best practices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: businessHubShop,
    carousel_images: [],
  },
  {
    name: "MTN Self Service Portal",
    description: "Worked with UI designer to implement backend user",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: simSwapPortal,
    carousel_images: [LastRecharge, SimActivationDate, Success],
  },
  {
    name: "Transport Management System",
    description:
      "Web based service that helps businesses manage their loogistic needs. From getting the right vehicle to tracking the location and status of each delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: Login,
    source_code_link: "https://github.com/beodw/LoadAndGo",
    carousel_images: [Map, Orders, Login, Email],
    liveSiteLink: "https://att.lng.com.sg/#login",
  },
  {
    name: "Load And Go Site",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: loadAndGoSite,
    source_code_link: "https://github.com/beodw/LoadAndGo",
    carousel_images: [
      Blog,
      LandingPage,
      Offerings,
      Pricing,
      QA,
      SoftwareOfferings,
    ],
    liveSiteLink: "https:lng.com.sg",
  },
  {
    name: "TMS Mobile App",
    description:
      "Corresponding mobile app for drivers and riders to fulfill delviery. Including, map integration, barcode scanning of packages and GPS navigation.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: TMSMobileApp,
    source_code_link: "https://github.com/",
    carousel_images: [
      Congratulations,
      LoginLnGMobile,
      OrdersLnGMobile,
      Schedule,
      SelectRole,
      Settings,
    ],
  },
];

export { services, technologies, experiences, testimonials, projects };
