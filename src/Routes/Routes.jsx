import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";
import { Suspense } from "react";

const appsPromise = fetch("/appsData.json").then((res) => res.json());

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/apps",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Apps appsPromise={appsPromise}></Apps>
          </Suspense>
        ),
      },
      { path: "/apps/:appId", Component: AppDetails },
      { path: "/installation", Component: Installation },
    ],
    errorElement: <h1>Page not Found</h1>,
  },
]);