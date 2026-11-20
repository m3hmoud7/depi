import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./About/AboutPage.jsx";
import AllDownload from "./Download/AllDownload.jsx";
import Products from "./Products/Products";
import SingleProduct from "./SingleProducts/SingleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "download",
    element: <AllDownload />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "singleproducts/:id",
    element: <SingleProduct />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
