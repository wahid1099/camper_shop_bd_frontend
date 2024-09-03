import { TProduct } from "@/types";
import AddProductModal from "@/components/productManagement/AddProducts";
import productApis from "@/redux/features/ProductSlice/ProductsApi";
const ProductManagement = () => {
  const { data, isLoading } = productApis.useGetProductsQuery({
    search: "",
    sortBy: "",
  });

  const products: TProduct[] = data?.data ?? [];
  if (isLoading) {
    return <p>Loading data...</p>;
  }
  return (
    <div className="container mx-auto px-4 py-4 mt-20">
      <AddProductModal></AddProductModal>
    </div>
  );
};

export default ProductManagement;
