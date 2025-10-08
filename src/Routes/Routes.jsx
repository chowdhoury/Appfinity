import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: '/apps', Component: Apps },
            {path:"/apps/:appId",Component: AppDetails},
            { path: '/installation', Component: Installation },
        ],
        errorElement: <h1>Page not Found</h1>
    }
])