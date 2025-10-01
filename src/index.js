import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Layout } from "./layouts/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // Layout - сделали родительским, чтобы соеденить одну общую вёрстку всех страничек
  // следом Home и Product - дети-странички обладают индивидуальной вёрсткой
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id", // указываем по id карточки через какую перешли на след страничку
        element: <Product />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
