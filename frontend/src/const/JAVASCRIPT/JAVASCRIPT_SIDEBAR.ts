import { BookOpen, Bot, Map, Frame, PieChart } from "lucide-react";

export const JAVASCRIPT_SIDEBAR = {
  header_title: "JavaScript Header",
  header_options: [
    {
      title: "Header Beginner",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Header Professional",
      url: "#",
      icon: Bot,
    },
  ],
  settings_title: "Settings",
  settings: [
    {
      name: "Setting One",
      url: "#",
      icon: Frame,
    },
    {
      name: "Setting Two",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Setting Three",
      url: "#",
      icon: Map,
    },
  ],
  footer_title: "Footer",
  footer_icon: BookOpen,
  footer_options: [
    {
      title: "Account",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Settings",
      url: "#",
      icon: Bot,
    },
    {
      title: "Sign Out",
      url: "#",
      icon: Bot,
    },
  ],
};
