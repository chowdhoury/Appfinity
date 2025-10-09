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
      { index: true, Component: Home },
      {
        path: "/apps",
        hydrateFallbackElement: <p>Loading...</p>,
        element:<Apps></Apps>
      },
      { path: "/installation", Component: Installation },
      {
        path: "/apps/:appId",
        Component: AppDetails,
      },
      {
        path: "/*",
        Component: PageError
      },
    ],
  },
]);
