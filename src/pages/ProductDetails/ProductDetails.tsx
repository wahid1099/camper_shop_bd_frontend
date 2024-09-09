/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import productApis from "@/redux/features/ProductSlice/ProductsApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { setProduct } from "@/redux/features/ProductSlice/ProductSLice";
import { addToCart } from "@/redux/features/cartSlice/cartSlice";
import { toast } from "sonner";
import ClipLoader from "react-spinners/ClipLoader";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const {
    data: product,
    error,
    isLoading,
  } = productApis.useGetProductByIdQuery(id);

  useEffect(() => {
    if (product) {
      dispatch(setProduct(product));
    }
  }, [product, dispatch]);

  const handleAddToCart = (product: any) => {
    const cartItem = cartItems.find((item) => item._id === product.data._id);
    if (!cartItem || (cartItem && cartItem.quantity < product.stock)) {
      dispatch(addToCart(product.data));
      toast.success("Product added to cart!", { position: "top-center" });
    } else {
      toast.error(
        "Product added to cart only once. You can add more quantity!",
        {
          position: "top-center",
        }
      );
    }
  };

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

  if (!product) {
    return <div>Product not found</div>;
  }

  const cartItem = cartItems.find((item) => item._id === product?.data._id);

  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <div className="flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={product?.data.image} // Assuming the first image is to be displayed
            alt={product?.data.name}
            className="w-full h-auto max-h-96 object-fill rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 lg:pl-8">
          <h2 className="text-4xl font-bold mb-4">{product?.data.name}</h2>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl mr-2">
              ★ {product?.data.rating}
            </span>
            <a href="#reviews" className="text-blue-600 underline">
              {product?.data.reviewCount} reviews
            </a>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            <b> Product Details:</b> {product?.data.description}
          </p>
          <div className="space-y-4 mb-6">
            <p className="text-3xl text-gray-800 font-semibold">
              Tk.{product?.data.price}
            </p>
            <p className="text-lg text-gray-600">
              Stock: {product?.data.stock}
            </p>
            <p className="text-lg text-gray-600">
              Category: {product?.data.category}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddToCart(product)}
            disabled={!cartItem?.quantity >= product?.data.stock}
            className={`px-6 py-3 rounded-md text-white ${
              !cartItem?.quantity >= product?.data.stock
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {!cartItem?.quantity >= product?.data.stock
              ? "Out of Stock"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
