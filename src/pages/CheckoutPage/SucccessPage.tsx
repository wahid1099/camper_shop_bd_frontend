import { Link } from "react-router-dom";
import Lottie from "react-lottie-player";
import LottieLight from "react-lottie-player/dist/LottiePlayerLight.modern"; // Make sure you have a JSON Lottie file
import lottieJson from "./26514-check-success-animation.json";
import { BsForwardFill } from "react-icons/bs";

const SuccessPage = () => {
  return (
    <div className="container mx-auto mt-40 text-center">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-12 rounded-lg shadow-lg">
        <Lottie
          loop={false}
          animationData={lottieJson}
          play
          style={{ width: 150, height: 150, margin: "0 auto" }}
        />
        <h1 className="text-4xl font-bold text-white mb-4">
          Thank You for Shopping with Us!
        </h1>
        <p className="text-lg text-white mb-6">
          Your order has been placed successfully. We appreciate your business.
        </p>
      </div>

      <div className="mt-8">
        <Link to="/products">
          <button className="px-8 py-3 rounded bg-indigo-600	 text-white hover:bg-indigo-700 transition duration-300 mb-20">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
