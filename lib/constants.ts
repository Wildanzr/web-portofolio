import { CodeIcon, Icon } from "@phosphor-icons/react";
import {
  BriefcaseIcon,
  IdentificationBadgeIcon,
  StudentIcon,
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
