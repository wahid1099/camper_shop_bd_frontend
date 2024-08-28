import { TProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductState = {
  products: TProduct[];
  product: TProduct | null;
};

type UpdateStockPayload = {
  id: string;
  quantity: number;
};

const initialState: ProductState = {
  products: [],
  product: null,
};

export const productSlice = createSlice({
  name: "prodcut",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push({ ...action.payload });
    },

    updateStock: (state, action: PayloadAction<UpdateStockPayload>) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((product) => product._id === id);
      if (product) {
        product.stock -= quantity;
      }
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    setProducts: (state, action: PayloadAction<TProduct[]>) => {
      state.products = action.payload;
    },
    setProduct: (state, action: PayloadAction<TProduct>) => {
      state.product = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  setProduct,
  setProducts,
  updateStock,
} = productSlice.actions;

export default productSlice.reducer;
