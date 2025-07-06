import {
  CalendarCheck2,
  CalendarClock,
  CirclePlus,
  House,
  Video,
} from "lucide-react";

export const sideBarLinks = [
  {
    icon: <House />,
    route: "/",
    label: "Home",
  },
  {
    icon: <CalendarClock />,
    route: "/upcoming",
    label: "Upcoming",
  },
  {
    icon: <CalendarCheck2 />,
    route: "/previous",
    label: "Previous",
  },
  {
    icon: <Video />,
    route: "/recordings",
    label: "Recordings",
  },
  {
    icon: <CirclePlus />,
    route: "/personal-room",
    label: "Personal Room",
  },
];
