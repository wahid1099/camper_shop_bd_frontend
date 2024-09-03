import { baseApi } from "@/redux/api/baseApi";

const productApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search, sortBy, category, price }) => {
        const params = new URLSearchParams();

        if (sortBy) {
          params.append("sort", sortBy);
        }
        if (search) {
          params.append("search", search);
        }
        if (category) {
          params.append("category", category);
        }
        if (price) {
          params.append("price", price);
        }

        return {
          url: "/product",
          method: "GET",
          params,
        };
      },
      providesTags: ["product"],
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/product/create-Product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ productId, data }) => {
        return {
          url: `product/${productId}`,
          method: "PUT",
          body: data,
        };
      },
    }),

    deleteProduct: builder.mutation({
      query: (productId: string) => {
        return { url: `/product/${productId}`, method: "DELETE" };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export default productApis;
