import { lazy } from "react";

const routes = [
  {
    path: "/home",
    exact: true,
    component: lazy(() => import("../pages/Home")),
    animation: "fadeIn",
  },
  {
    path: "/user/:userId",
    exact: true,
    component: lazy(() => import("../pages/Users")),
    animation: "fadeIn",
  },
  {
    path: "/add-attendance",
    exact: true,
    component: lazy(() => import("../pages/AddAttendance")),
    animation: "fadeIn",
  },
];

export default routes;
