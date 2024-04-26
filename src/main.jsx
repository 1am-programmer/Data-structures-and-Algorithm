import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "../router/Root.jsx";
import DataStructure from "./DataStructure.jsx";
import Algorithm from "./Algorithm.jsx";
import BigO from "../router/BigO.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/data-structures",
    element: <DataStructure />,
  },
  {
    path: "/algorithm",
    element: <Algorithm />,
  },
  {
    path: "/big-o",
    element: <BigO />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
