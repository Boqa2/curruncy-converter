import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./Home.tsx";
import Currency from "./components/pages/Currency.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PagesStart from "./components/pages/PagesStart.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { path: "/", element: <PagesStart /> },
      { path: "/currency", element: <Currency /> },
     ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
