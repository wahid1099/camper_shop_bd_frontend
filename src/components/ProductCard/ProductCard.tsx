import { TProduct } from "@/types";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // React Icons for rating stars

const ProductCard = ({ image, name, price, rating, _id, delay }: TProduct) => {
  // Function to render the rating stars based on the rating value
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400 h-5 w-5" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-400 h-5 w-5" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400 h-5 w-5" />
        ))}
        <span className="ml-2 text-sm text-gray-500">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div
      className="product-card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Product Image with Hover Zoom Effect */}
      <div className="relative overflow-hidden mx-3 mt-3 h-60 rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Product Information */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 truncate">{name}</h3>

        {/* Rating */}
        <div className="mt-2 mb-4">{renderRating(rating)}</div>

        {/* Price */}
        <div className="mb-5">
          <p className="text-lg font-bold text-slate-900">Tk. {price}</p>
        </div>

        {/* Add to Cart and Show Details */}
        <div className="flex justify-between items-center">
          <Link
            to={`/product-details/${_id}`}
            className="bg-primary text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-primary-dark"
          >
            Show Details
          </Link>
          <button
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 transition duration-300"
            aria-label="Add to cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
