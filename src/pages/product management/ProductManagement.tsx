import { TProduct } from "@/types";
import AddProductModal from "@/components/productManagement/AddProducts";
import productApis from "@/redux/features/ProductSlice/ProductsApi";
import ProductList from "@/components/productManagement/ProductList";
import ClipLoader from "react-spinners/ClipLoader";

const ProductManagement = () => {
  const { data, isLoading, isError, error, refetch } =
    productApis.useGetProductsQuery({
      search: "",
      sortBy: "",
    });

  const products: TProduct[] = data?.data ?? [];
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

  if (isError) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p className="mt-50 mb-50">Error loading data: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 mt-20">
      <AddProductModal refetch={refetch} />
      <div>
        <div className="w-full rounded-xl mb-20">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
