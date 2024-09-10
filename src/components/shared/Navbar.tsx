import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { HiMenu, HiSearch } from "react-icons/hi";
import { BsCartCheck } from "react-icons/bs";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useAppSelector } from "@/redux/hook";
// import { useEffect } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { totalQuantity } = useAppSelector((state) => state.cart);
  // const dispatch = useAppDispatch();

  return (
    <header className="fixed top-0 left-0 right-0 z-50  shadow-md">
      <nav className="container mx-auto py-4 px-4 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8 md:h-18" />
          </Link>
          <Link to="/">
            <p className="hover:text-gray-900 font-bold">CAMPERS SHOP BD</p>
          </Link>
        </div>
        <div className="flex items-center w-full max-w-md mx-auto border border-gray-300 rounded-lg shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-lg"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg focus:outline-none hover:bg-blue-600">
            <HiSearch className="text-xl" />
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <Link className="hover:text-gray-700 font-medium" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-700 font-medium" to="/products">
            Products
          </Link>
          <Link
            className="hover:text-gray-700 font-medium"
            to="/product-management"
          >
            Product Management
          </Link>
          <Link className="hover:text-gray-900 font-medium" to="/about-us">
            About Us
          </Link>
          <div className="relative">
            <Link
              to="/cart-items"
              className="text-body text-2xl flex items-center"
            >
              <CiShoppingCart />
              {totalQuantity > 0 && (
                <div className="ml-2 bg-red-500 text-white w-4 h-4 text-xs rounded-full flex items-center justify-center -top-2 -right-2 absolute">
                  {totalQuantity}
                </div>
              )}
            </Link>
          </div>
          <Link
            to="/cart-items"
            className="text-body text-2xl flex items-center"
          >
            <CiHeart />
          </Link>
        </div>
        <button onClick={toggleMenu} className="lg:hidden text-3xl">
          <HiMenu />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="flex flex-col items-start space-y-4 py-4 px-6">
            <Link className="block w-full py-2 px-4 hover:bg-gray-100" to="/">
              Home
            </Link>
            <Link
              className="block w-full py-2 px-4 hover:bg-gray-100"
              to="/products"
            >
              Products
            </Link>
            <Link
              className="block w-full py-2 px-4 hover:bg-gray-100"
              to="/product-management"
            >
              Product Management
            </Link>
            <Link
              className="block w-full py-2 px-4 hover:bg-gray-100"
              to="/about-us"
            >
              About Us
            </Link>
            <Link
              to="/cart-items"
              className="text-body text-2xl w-full text-left flex items-center"
            >
              <BsCartCheck />
              {totalQuantity > 0 && (
                <div className="ml-2 bg-red-500 text-white w-4 h-4 text-xs rounded-full flex items-center justify-center -top-2 -right-2 absolute">
                  {totalQuantity}
                </div>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
