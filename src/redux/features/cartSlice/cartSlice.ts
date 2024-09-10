import { TProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = TProduct & {
  quantity: number;
  totalQuantity: number;
};

type CartState = {
  items: CartItem[];
  totalQuantity: number;
  lastUpdated: number; // Timestamp of last update
};

const EXPIRATION_HOURS = 48; // Change this as needed

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  lastUpdated: Date.now(), // Initialize with current timestamp
};

const isCartExpired = (timestamp: number): boolean => {
  const currentTime = Date.now();
  const expirationTime = EXPIRATION_HOURS * 60 * 60 * 1000; // convert hours to milliseconds
  return currentTime - timestamp >= expirationTime;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const product = action.payload;
      const existingItem = state.items.find((i) => i._id === product._id);

      if (existingItem) {
        if (existingItem.quantity < product.stock) {
          existingItem.quantity += 1;
        }
      } else {
        state.items.push({
          ...product,
          quantity: 1,
          totalQuantity: 0,
        });
      }
      state.totalQuantity++;
      state.lastUpdated = Date.now(); // Update the timestamp
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.lastUpdated = Date.now(); // Update the timestamp
    },

    updateCartQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item._id === id);

      if (existingItem && quantity <= existingItem.stock) {
        existingItem.quantity = quantity;
      }
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.lastUpdated = Date.now(); // Update the timestamp
    },

    resetCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.lastUpdated = Date.now(); // Reset timestamp
    },

    checkCartExpiration: (state) => {
      if (isCartExpired(state.lastUpdated)) {
        state.items = [];
        state.totalQuantity = 0;
        state.lastUpdated = Date.now(); // Reset timestamp
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartQuantity,
  resetCart,
  checkCartExpiration,
} = cartSlice.actions;

export default cartSlice.reducer;
