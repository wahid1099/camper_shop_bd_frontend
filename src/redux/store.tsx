import { configureStore } from "@reduxjs/toolkit";
// ...
import { baseApi } from "./api/baseApi";
import navbarReducer from "./features/navbar/navbarSlice";
import cartReducer from "./features/cartSlice/cartSlice";
import productReducer from "./features/ProductSlice/ProductSLice";
import productApis from "./features/ProductSlice/ProductsApi";
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    navbar: navbarReducer,
    cart: cartReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApis.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
