/* eslint-disable @typescript-eslint/no-explicit-any */
import productApis from "@/redux/features/ProductSlice/ProductsApi";
import AOS from "aos";
import "aos/dist/aos.css";
import ClipLoader from "react-spinners/ClipLoader";
import "./BestSelling.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import ProductCard from "@/components/ProductCard/ProductCard";
const BestSelling = () => {
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

  const products = data?.data?.slice(0, 3);

  return (
    <div className="best-selling-products mt-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">Recommended Products</h2>
        <Link
          to="/products"
          className="flex items-center text-primary hover:text-primary-dark"
        >
          <span className="mr-2">See All</span>
          <GoArrowRight className="text-xl" />
        </Link>
      </div>
      <div className="products-grid">
        {products?.map((product: any, index: any) => (
          <ProductCard
            {...product}
            key={index}
            delay={index * 300}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
