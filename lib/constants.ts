import { CodeIcon, Icon } from "@phosphor-icons/react";
import {
  BriefcaseIcon,
  IdentificationBadgeIcon,
  StudentIcon,
  BuildingsIcon,
  LaptopIcon,
  BankIcon,
  ChalkboardTeacherIcon,
  CertificateIcon,
} from "@phosphor-icons/react/dist/ssr";
interface NavigationMenuItem {
  title: string;
  url: string;
}

interface TabMenuItem {
  Icon: Icon;
  title: string;
}

export const NAVIGATION_MENUS: NavigationMenuItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Work",
    url: "#work",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

export const LOGO_NAME = "Wildannn".split("");

export const TAB_MENUS: TabMenuItem[] = [
  {
    Icon: IdentificationBadgeIcon,
    title: "Background",
  },
  {
    Icon: BriefcaseIcon,
    title: "Experience",
  },
  {
    Icon: StudentIcon,
    title: "Education",
  },
  {
    Icon: CodeIcon,
    title: "Skills",
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    title: "Full-stack Web3 Developer",
    company: "TokenMinds",
    location: "Remote, Singapore",
    period: "August 2023 – Present",
    type: "Full-stack Web3 Developer",
    icon: BuildingsIcon,
    color: "text-tokenminds",
    link: "https://tokenminds.co/",
    achievements: [
      "Build responsive web or apps per client requirements with requirements analysis, system design and technical documentation.",
      "Develop robust APIs and microservices to support frontend applications.",
      "Build, deploy, and interact smart contracts mainly on EVM compatible chain and Solana.",
    ],
  },
  {
    id: 2,
    title: "Freelance Full-stack Developer",
    company: "Remote/Online",
    location: "Side Job",
    period: "July 2022 – Present",
    type: "Full Stack Developer",
    icon: LaptopIcon,
    color: "text-brawijaya",
    achievements: [
      "Creating a custom web application with specific requirements from customers.",
      "Have completed at least five projects in the last 1 year.",
    ],
  },
  {
    id: 3,
    title: "IT Developer Intern",
    company: "Bank Negara Indonesia",
    location: "Jakarta, Indonesia",
    period: "February 2022 – July 2022",
    type: "IT Developer Intern",
    icon: BankIcon,
    color: "text-bni",
    link: "https://www.bni.co.id/",
    achievements: [
      "Responsible for developing online video conference applications with scheduling, distributing, and managing appointments between customers and bank tellers.",
    ],
  },
  {
    id: 4,
    title: "Digital Talent Scholarship",
    company: "Indonesia",
    location: "Indonesia",
    period: "July 2021 – November 2022",
    type: "Scholarship Awardee",
    icon: CertificateIcon,
    color: "text-black-pearl",
    achievements: [
      "Java Developer Scholarship Awardee (July 2021 – September 2021)",
      "Oracle Database Scholarship Awardee (May 2022 – November 2022)",
      "Got a scholarship from the Ministry of Communication and Information Technology of the Republic of Indonesia to learn Java and Oracle Database, then completed Oracle certification.",
    ],
  },
  {
    id: 5,
    title: "Laboratory Assistance",
    company: "Computer Science Faculty",
    location: "Malang, Indonesia",
    period: "August 2020 – May 2021",
    type: "Laboratory Assistance",
    icon: ChalkboardTeacherIcon,
    color: "text-brawijaya",
    achievements: [
      "Being an instructor to teach Basic Programming and Advanced Programming using Java in three classes with an average of 40 students in each class.",
    ],
  },
];
