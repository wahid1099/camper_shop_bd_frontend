import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    paymentOrder: builder.mutation({
      query: (data) => {
        return {
          url: "order/create-order",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export default orderApi;
