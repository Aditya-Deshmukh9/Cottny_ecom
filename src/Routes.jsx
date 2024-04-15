import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomepageVOne from "pages/HomepageVOne";
import HomepageVThree from "pages/HomepageVThree";
import ProductList from "pages/ProductList";
import ProductDetails from "pages/ProductDetails";
import Cart from "pages/Cart";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <HomepageVOne />,
    },
    {
      path: "homepagevthree",
      element: <HomepageVThree />,
    },
    {
      path: "productlist",
      element: <ProductList />,
    },
    {
      path: "productdetails",
      element: <ProductDetails />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
