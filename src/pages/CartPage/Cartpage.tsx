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
    <div className="container mx-auto mt-40">
      <h1 className="text-2xl font-bold mb-6">
        You have {cartItems.length} item(s) in your cart
      </h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4">
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item._id}
                  className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg"
                >
                  <div className="flex items-center mb-4 md:mb-0">
                    <input type="checkbox" className="mr-2" />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-600">$ {item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 md:mb-0">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item._id!,
                          item.quantity - 1,
                          item.stock
                        )
                      }
                      disabled={item.quantity <= 1}
                      className="px-2 py-1 border rounded mr-2"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item._id!,
                          item.quantity + 1,
                          item.stock
                        )
                      }
                      disabled={item.quantity >= item.stock}
                      className="px-2 py-1 border rounded ml-2"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold md:mr-4">
                    $ {item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => handleRemoveProduct(item._id!)}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/4 md:ml-6 mt-6 md:mt-0">
            <div className="p-4 border rounded-lg">
              <h2 className="text-xl font-bold mb-4">Price Details</h2>
              <div className="flex justify-between mb-2">
                <span>Sub Total</span>
                <h2 className="text-2xl font-semibold">
                  ${calculateTotalPrice().toFixed(2)}
                </h2>
              </div>

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>
                  <h2 className="text-2xl font-semibold">
                    ${calculateTotalPrice().toFixed(2)}
                  </h2>
                </span>
              </div>
              <Link to="/order-complete">
                <button
                  disabled={isPlaceOrderDisabled()}
                  className={`mt-4 w-full px-6 py-3 rounded ${
                    isPlaceOrderDisabled()
                      ? "bg-gray-400"
                      : "bg-green-500 text-white"
                  }`}
                >
                  Place Order
                </button>
              </Link>

              <Link to="/products">
                <button
                  onClick={() => alert("Continue Shopping")}
                  className="mt-2 w-full px-6 py-3 rounded bg-black text-white"
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
