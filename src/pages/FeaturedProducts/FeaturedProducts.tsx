/* eslint-disable @typescript-eslint/no-explicit-any */
import productApis from "@/redux/features/ProductSlice/ProductsApi";
import { GoArrowRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";

const FeaturedProducts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const { data, error, isLoading } = productApis.useGetProductsQuery({
    search: "",
    sortBy: "",
  });

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ClipLoader />
        <p>Loading data...</p>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  const features = data?.data?.slice(0, 6);

  return (
    <div className="w-full px-4 py-8">
      <div className="best-selling-products" data-aos="zoom-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
          <Link
            to="/products"
            className="flex items-center text-primary hover:text-primary-dark"
          >
            <span className="mr-2">See All</span>
            <GoArrowRight className="text-xl" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features && features.length > 0 ? (
            features.map((product: any, index: any) => (
              <ProductCard {...product} key={index}></ProductCard>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
