import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";
import { Suspense } from "react";
import PageError from "../Pages/PageError/PageError";
import AppError from "../Pages/AppError/AppError";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        loader: () => fetch("/appsData.json"),
        Component: Installation,
      },
      {
        path: "/apps/:appId",
        loader: () => fetch("/appsData.json"),
        Component: AppDetails,
      },
      {
        path: "/*",
        loader: () => fetch("/appsData.json"),
        Component: PageError,
      },
    ],
  },
]);
