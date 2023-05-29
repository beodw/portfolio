import { mobile, backend, creator, web } from "../assets";

import {
  businessHubAddAttribute,
  businessHubDashboard,
  businessHubImageUpload,
  businessHub,
} from "../assets/business_hub";

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
    image: businessHub,
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

export { services, projects };
