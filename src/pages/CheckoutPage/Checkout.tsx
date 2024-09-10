import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCart } from "@/redux/features/cartSlice/cartSlice";
import orderApi from "@/redux/features/order/orderApi";
import { useAppSelector } from "@/redux/hook";
import { BsBagCheckFill } from "react-icons/bs";

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: "cashOnDelivery";
};

const Checkout = () => {
  const cartItem = useAppSelector((state) => state.cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentOrder] = orderApi.usePaymentOrderMutation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const order = { ...cartItem, data };
    paymentOrder(order);
    dispatch(resetCart());
    navigate("/success");
  };

  return (
    <div className="container mx-auto mt-40 px-4 ">
      <h1 className="text-3xl font-bold text-center mb-10 flex items-center justify-center">
        <BsBagCheckFill className="mr-2" />
        <span>Checkout</span>
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-40"
      >
        {/* Name */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className={`w-full p-3 border rounded-lg focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-500 mt-2">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            className={`w-full p-3 border rounded-lg focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your email address"
          />
          {errors.email && (
            <p className="text-red-500 mt-2">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Phone
          </label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            className={`w-full p-3 border rounded-lg focus:outline-none ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your phone number"
          />
          {errors.phone && (
            <p className="text-red-500 mt-2">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Delivery Address
          </label>
          <textarea
            {...register("address", { required: "Address is required" })}
            className={`w-full p-3 border rounded-lg focus:outline-none ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your delivery address"
            rows={4}
          />
          {errors.address && (
            <p className="text-red-500 mt-2">{errors.address.message}</p>
          )}
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Payment Method
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              value="cashOnDelivery"
              {...register("paymentMethod", {
                required: "Payment method is required",
              })}
              className="mr-2"
            />
            <label>Cash on Delivery</label>
          </div>
          {errors.paymentMethod && (
            <p className="text-red-500 mt-2">{errors.paymentMethod.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-500 text-white font-bold py-3 rounded-lg hover:bg-purple-600 transition-colors"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};
export default Checkout;
