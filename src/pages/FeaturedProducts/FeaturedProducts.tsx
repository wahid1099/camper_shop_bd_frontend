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
        <p className="mt-50 mb-50">Loading data...</p>
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  const features = data?.data?.slice(0, 4);
  return (
    <div>
      <div className="best-selling-products " data-aos="zoom-in">
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

        <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features &&
            features.map((product: any, index: any) => (
              <ProductCard {...product} key={index}></ProductCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
