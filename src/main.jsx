import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./router/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DataStructure from "./DataStructure.jsx";
import Algorithm from "./Algorithm.jsx";

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
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
