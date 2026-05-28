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
      "Slaying client requirements by building responsive web apps with full requirements analysis, system design, and technical docs – no cap!",
      "Developing robust APIs and microservices that make frontend apps actually work and look fire.",
      "Building, deploying, and interacting with smart contracts on EVM chains and Solana – Web3 wizardry at its finest.",
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
      "Creating custom web applications that match exactly what clients vibe with – no cookie-cutter stuff here.",
      "Dropped at least five projects in the last year – staying busy and building my portfolio like a boss.",
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
      "Built an online video conference app for scheduling, distributing, and managing appointments between customers and bank tellers – making banking way more convenient.",
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
      "Java Developer Scholarship Awardee (July 2021 – September 2021) – leveling up my Java skills!",
      "Oracle Database Scholarship Awardee (May 2022 – November 2022) – database masterclass incoming.",
      "Scored a scholarship from the Ministry of Communication and Information Technology to learn Java and Oracle Database, then crushed the Oracle certification – knowledge unlocked!",
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
      "Teaching Basic and Advanced Programming with Java to three classes of about 40 students each – helping the next gen of coders level up!",
    ],
  },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "VRPlaced",
    description:
      "VRPlaced is a virtual reality-based platform that allows users to take interviews in a virtual environment using AR and VR technology. Experience immersive interviews with cutting-edge VR/AR integration.",
    images: [
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80", // VR headset
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80", // AR interface
    ],
    link: "https://vrplaced.com",
    techStack: ["Next.js", "TypeScript", "WebXR", "Three.js", "WebRTC"],
  },
  {
    id: 2,
    title: "FreehandX",
    description:
      "It's not just another virtual collaborative whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them. Perfect for remote teams and creative collaboration.",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80", // Digital whiteboard
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80", // Collaborative work
    ],
    link: "https://freehandx.com",
    techStack: ["React", "Canvas API", "WebSocket", "Node.js", "Socket.io"],
  },
  {
    id: 3,
    title: "Web3 DeFi Platform",
    description:
      "A comprehensive decentralized finance platform with yield farming, staking, and NFT marketplace integration. Built with security and user experience in mind.",
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80", // Blockchain visualization
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&q=80", // DeFi interface
    ],
    link: "#",
    techStack: ["Solidity", "Next.js", "Web3.js", "Hardhat", "IPFS"],
  },
];
