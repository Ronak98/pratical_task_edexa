import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PageNotFound from "../Pages/PageNotFound";

export const RouterConfig = [
  {
    title: "Login",
    path: "/",
    component: Login,
    default: true,
    exact: true,
  },
  {
    title: "Register",
    path: "/register",
    component: Register,
    default: true,
  },
  {
    title: "Page Not Found",
    path: "/*",
    component: PageNotFound,
    errorpage: true,
    setting: { header: true, nav: true },
  },
];
