import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  removeFromCart,
  updateCartQuantity,
} from "@/redux/features/cartSlice/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Handle quantity change
  const handleQuantityChange = (
    id: string,
    quantity: number,
    stock: number
  ) => {
    if (quantity >= 1 && quantity <= stock) {
      dispatch(updateCartQuantity({ id, quantity }));
    }
  };

  // Remove product from cart
  const handleRemoveProduct = (id: string) => {
    if (
      window.confirm(
        "Are you sure you want to remove this product from the cart?"
      )
    ) {
      dispatch(removeFromCart(id));
    }
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const isPlaceOrderDisabled = () => {
    return cartItems.some((item) => item.stock === 0);
  };
  return (
    <div className="container mx-auto mt-40 px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        You have {cartItems.length} item(s) in your cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="md:w-3/4">
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li
                  key={item._id}
                  className="flex flex-col md:flex-row items-center justify-between p-6 border rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4 md:mb-0 w-full md:w-3/5">
                    <input type="checkbox" className="mr-4" />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg mr-6"
                    />
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-md text-gray-500">
                        Price: &#2547;{item.price}
                      </p>
                      <p className="text-md text-gray-500">
                        Stock: {item.stock}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Adjustment */}
                  <div className="flex items-center mb-4 md:mb-0 w-full md:w-1/5">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item._id!,
                          item.quantity - 1,
                          item.stock
                        )
                      }
                      disabled={item.quantity <= 1}
                      className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-lg mr-2"
                    >
                      -
                    </button>
                    <span className="px-4 text-lg">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item._id!,
                          item.quantity + 1,
                          item.stock
                        )
                      }
                      disabled={item.quantity >= item.stock}
                      className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-lg ml-2"
                    >
                      +
                    </button>
                  </div>

                  {/* Item Total Price and Remove Button */}
                  <div className="flex flex-col items-end w-full md:w-1/5">
                    <p className="text-lg font-bold">
                      &#2547;{item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => handleRemoveProduct(item._id!)}
                      className="px-4 py-2 mt-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Summary Section */}
          <div className="md:w-1/4">
            <div className="p-6 border rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Price Details</h2>

              <div className="flex justify-between mb-4">
                <span className="text-lg">Sub Total</span>
                <span className="text-2xl font-semibold">
                  &#2547;{calculateTotalPrice().toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between font-bold text-xl mb-4">
                <span>Total</span>
                <span>&#2547;{calculateTotalPrice().toFixed(2)}</span>
              </div>

              <Link to="/order-complete">
                <button
                  disabled={isPlaceOrderDisabled()}
                  className={`mt-4 w-full px-6 py-3 rounded-lg ${
                    isPlaceOrderDisabled()
                      ? "bg-sky-400		 cursor-not-allowed"
                      : "bg-red-800			 hover:bg-red-600 text-white"
                  }`}
                >
                  Place Order
                </button>
              </Link>

              <Link to="/products">
                <button
                  onClick={() => alert("Continue Shopping")}
                  className="mt-4 w-full px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
