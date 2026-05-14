// src/Redux/features/productSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Define Product type
export interface Product {
  _id: string;
  title: string;
  price: number;
  image: string;
}

// ✅ State type
interface ProductState {
  products: Product[];
  loading: boolean;
}

// ✅ Initial state
const initialState: ProductState = {
  products: [],
  loading: false,
};

// ✅ Async thunk to fetch products
export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const res = await fetch("/api/products"); // <-- API endpoint
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json();
  }
);

// ✅ Slice
// ✅ Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload; // TS already knows this is Product[]
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;