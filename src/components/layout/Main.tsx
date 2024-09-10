import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { useAppSelector } from "@/redux/hook";
const Main = () => {
  const cart = useAppSelector((state) => state.cart);

  window.onbeforeunload = function (event) {
    if (cart.items.length > 0) {
      event.preventDefault();
      event.returnValue = "";
      return "Are you sure you want to refresh? Your cart data will be lost!!.";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
