import { Icon } from "@phosphor-icons/react";
import {
  AddressBookIcon,
  FloppyDiskIcon,
  HouseLineIcon,
  IdentificationBadgeIcon,
  LaptopIcon,
} from "@phosphor-icons/react/dist/ssr";

interface NavigationMenuItem {
  title: string;
  url: string;
  Icon: Icon;
}

export const NAVIGATION_MENU: NavigationMenuItem[] = [
  {
    title: "Home",
    url: "/",
    Icon: HouseLineIcon,
  },
  {
    title: "About",
    url: "#about",
    Icon: IdentificationBadgeIcon,
  },
  {
    title: "Work",
    url: "#work",
    Icon: FloppyDiskIcon,
  },
  {
    title: "Services",
    url: "#services",
    Icon: LaptopIcon,
  },
  {
    title: "Contact",
    url: "#contact",
    Icon: AddressBookIcon,
  },
];
