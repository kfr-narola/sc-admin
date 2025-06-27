import { Fingerprint, LayoutDashboard, UsersRound } from "lucide-react";

export const SidebarLinkList = [
  {
    title: "general",
    items: [
      {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,
      },
      {
        title: "Users",
        url: "/users",
        icon: UsersRound,
      },
      {
        title: "Auth",
        url: "/auth",
        icon: Fingerprint,
        items: [
          {
            title: "Login",
            url: "/auth/login",
          },
          {
            title: "Register",
            url: "/auth/register",
          },
          {
            title: "Forgot Password",
            url: "/auth/forgot-password",
          }
        ]
      }
    ]
  }
]