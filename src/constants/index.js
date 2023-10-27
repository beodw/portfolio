import { mobile, backend, creator, web } from "../assets";

import {
  businessHubAddAttribute,
  businessHubDashboard,
  businessHubImageUpload,
  businessHub,
} from "../assets/business_hub";

import {
  sampleresponse,
  homescreen,
  longresponse,
  longresponsemobile
} from "../assets/voicegpt";

import {
  LastRecharge,
  SimActivationDate,
  Success,
  simSwapPortal,
} from "../assets/sim_swap_portal";

import { Email, Login, Map, Orders, TMS } from "../assets/loadAndGoTms";

import {
  Blog,
  LandingPage,
  Offerings,
  Pricing,
  QA,
  SoftwareOfferings,
  loadAndGoSite,
} from "../assets/loadAndWebsite";

import {
  Congratulations,
  LoginLnGMobile,
  OrdersLnGMobile,
  Schedule,
  SelectRole,
  Settings,
  TMSMobileApp,
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
    title: "Systems Design",
    icon: web,
  },
  {
    title: "Frontend Engineering",
    icon: mobile,
  },
  {
    title: "Backend Engineering",
    icon: backend,
  },
  {
    title: "AWS Deployment",
    icon: backend,
  },
  {
    title: "Vercel Deployment",
    icon: backend,
  },
  {
    title: "Team Leader",
    icon: creator,
  },
];

const projects = [
   {
    name: "Voice Assistant",
    description:
      "Web based voice assistant that offers help on daily tasks like writing emails.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: homescreen,
    source_code_link: "https://github.com/beodw/voicegptfrontend",
    carousel_images: [
        sampleresponse,
        homescreen,
        longresponse,
        longresponsemobile
    ],
    liveSiteLink: "https://voicegptbucket.s3.eu-west-2.amazonaws.com/index.html",
  },
  {
    name: "Transport Management System",
    description:
      "Web based service that helps businesses manage their loogistic needs. From getting the right vehicle to tracking the location and status of each delivery.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
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
        name: "React",
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
        name: "React",
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
  {
    name: "MTN Business Hub CMS",
    description:
      "Led development and integration of RESTful API to the dashboard and manage products pages on the CMS. Liasesed with product owner and product team to understand features and implement pixel perfect UI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
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
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: businessHub,
    carousel_images: [],
  },
  {
    name: "MTN Self Service Portal",
    description: "Worked with UI designer to implement backend user",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: simSwapPortal,
    carousel_images: [LastRecharge, SimActivationDate, Success],
    liveSiteLink: "https://internalappstest.mtn.com.gh/",

  },
  
];

export { services, projects };
