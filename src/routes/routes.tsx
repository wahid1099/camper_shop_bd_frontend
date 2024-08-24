import Home from "@/pages/Home/Home";
import AboutUs from "@/pages/About us/Aboutus";
import Products from "@/pages/Products/Products";
import ProductManagement from "@/pages/product management/ProductManagement";
import CartPage from "@/pages/CartPage/Cartpage";
import Notfound from "@/pages/NotFound/Notfound";
import Main from "@/components/layout/Main";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/product-management",
        element: <ProductManagement></ProductManagement>,
      },
      {
        path: "/cart-items",
        element: <CartPage></CartPage>,
      },
      {
        path: "*",
        element: <Notfound></Notfound>,
      },
    ],
  },
]);

export default router;
