import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TNavBar = {
  isMenuOpen: boolean;
  isSticky: boolean;
};

const initialState: TNavBar = {
  isMenuOpen: false,
  isSticky: false,
};

const navbarslice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleSticky(state, action: PayloadAction<boolean>) {
      state.isSticky = action.payload;
    },
  },
});

export const { toggleMenu, toggleSticky } = navbarslice.actions;

export default navbarslice.reducer;
