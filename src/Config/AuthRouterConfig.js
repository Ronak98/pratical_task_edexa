import { Dashboard } from "../Pages/Dashboard";
import PageNotFound from "../Pages/PageNotFound";

export const AuthRouterConfig = [
  {
    title: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    authdefault: true,
    auth: true,
    setting: { header: true, nav: true },
  },
  {
    title: "Page Not Found",
    path: "/*",
    component: PageNotFound,
    errorpage: true,
    setting: { header: true, nav: true },
  },
];
