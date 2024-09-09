import productApis from "@/redux/features/ProductSlice/ProductsApi";
import { CategoryType } from "@/types";

import { GoArrowRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

const CategoriesProduct = () => {
  const navigate = useNavigate();
  const { data } = productApis.useGetProductsQuery({
    search: "",
    sortBy: "",
  });

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="categories-product-section py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Top Categories</h2>
          <Link
            to="/products"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <span className="mr-2 inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300">
              See All <GoArrowRight className="ml-2 text-xl" />
            </span>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {data?.data.map((category: CategoryType) => (
            <div
              key={category.id}
              className="category-card relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => handleCategoryClick(category.category)}
            >
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.category}
                className="w-full h-40 object-cover"
              />
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity"></div>
              {/* Category Info */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  {category.category}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesProduct;
