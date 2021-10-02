import { Dashboard } from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PageNotFound from "../Pages/PageNotFound";

export const RouterConfig = [
  {
    title: "Login",
    path: "/",
    component: Login,
    default: true,
  },
  {
    title: "Register",
    path: "/register",
    component: Register,
    default: true,
  },
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
    path: "/",
    component: PageNotFound,
    errorpage: true,
    setting: { header: true, nav: true },
  },
];
