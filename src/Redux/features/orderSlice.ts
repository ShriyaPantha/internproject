import { createSlice, createAsyncThunk, type PayloadAction, } from "@reduxjs/toolkit";

// Define Order type (edit based on your backend)
export interface Product {
  title: string;
  price: number;
  image: string;
}

export interface Order {
  _id: string;
  products: {
    product: Product;
  }[];
}

// State type
interface OrderState {
  orders: Order[];
  loading: boolean;
}

// Initial state
const initialState: OrderState = {
  orders: [],
  loading: false,
};

// Async thunk (API call)
export const fetchOrders = createAsyncThunk<Order[]>(
  "orders/fetchOrders",
  async () => {
    const res = await fetch("/api/orders"); // no localhost
    return res.json();
  }
);

// Slice
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<Order[]>) => {
        state.orders = action.payload;
        state.loading = false;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default orderSlice.reducer;