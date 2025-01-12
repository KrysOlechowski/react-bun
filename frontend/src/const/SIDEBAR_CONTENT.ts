import { onLogoutUser } from "@/store/user/utils/logout_user";
import { BookOpen, Bot, Map, Frame, PieChart } from "lucide-react";

export const SIDEBAR_CONTENT = {
  header_title: "Choose Topic",
  header_options: [
    {
      title: "JavaScript Topics",
      url: "/js",
      icon: BookOpen,
    },
    {
      title: "React Topics",
      url: "/react",
      icon: Bot,
    },
    {
      title: "HTML Topics",
      url: "/html",
      icon: Bot,
    },
    {
      title: "CSS Topics",
      url: "/css",
      icon: Bot,
    },
  ],
  sidebar_middle: [
    {
      title: "Middle test",
      content: [
        {
          title: "Middle content",
          icon: Bot,
          sub_content: [
            {
              title: "SubTitle content",
            },
          ],
        },
      ],
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
  footer_title: "User",
  footer_icon: BookOpen,
  footer_options: [
    {
      title: "Account",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Login",
      url: "/login",
      icon: Bot,
    },
    {
      title: "Logout",
      action: onLogoutUser,
      icon: Bot,
    },
  ],
};
