import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="ml-3 text-2xl font-bold text-white">
                CAMPERS SHOP BD
              </span>
            </Link>
            <p className="text-gray-400">
              Equip yourself with top-tier outdoor gear and accessories designed
              for every adventure. Join us and embrace the thrill of the great
              outdoors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition duration-300"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-white transition duration-300"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Other Pages
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="hover:text-white transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-white transition duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="hover:text-white transition duration-300"
                >
                  Activities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 mb-6">
              <li>Email: support@campershopbd.com</li>
              <li>Address: 489 5th Avenue, Dhanmondi, BD</li>
              <li>Phone: +880181-4290-528</li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} CAMPERS SHOP BD. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
