import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Error from "./pages/Error.jsx";
import Root from "./pages/Root.jsx";
import Home from "./pages/Home.jsx";
import JobDetail from "./pages/JobDetail.jsx";
import AppliedJob from "./pages/AppliedJob.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <JobDetail />,
      },
      {
        path: "/applies",
        element: <AppliedJob />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
