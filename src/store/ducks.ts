import { ProductsState } from "./models";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./thunks";
import { ProductItem } from "../shared/models/models";

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: "",
  selectedCategory: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = "";
      state.selectedCategory = "";
      state.isLoading = false;
    },
    category: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    add: (state, action: PayloadAction<ProductItem>) => {
      const newProduct = current(state).products.find(
        (p) => p._id === action.payload._id
      );
      const index = current(state).products.indexOf(newProduct!);
      state.products[index].quantity += 1;
    },
    remove: (state, action: PayloadAction<ProductItem>) => {
      const newProduct = current(state).products.find(
        (p) => p._id === action.payload._id
      );
      const index = current(state).products.indexOf(newProduct!);
      state.products[index].quantity -= 1;
    },
    removeFromCart: (state, action: PayloadAction<ProductItem>) => {
      const newProduct = current(state).products.find(
        (p) => p._id === action.payload._id
      );
      const index = current(state).products.indexOf(newProduct!);
      state.products[index].quantity = 0;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.products = [];
      state.isLoading = true;
    });
    builder.addCase(
      fetchAllProducts.fulfilled,
      (state, action: PayloadAction<ProductItem[]>) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = "";
      }
    );
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.products = [];
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default productsSlice.reducer;
export const { category, add, remove, removeFromCart } = productsSlice.actions;
