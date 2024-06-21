import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../thunk/productsThunk";
import { getProductById } from "../thunk/singleProduct/SingleProductThunk";
export interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
}

interface ProductState {
  productData: Product[];
  load: boolean;
  error: string | null; 
}

const productSlice = createSlice({
  name: "products",
  initialState: {
    productData: [],
    load: false,
    error: null,
  } as ProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.load = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.load = false;
        state.productData = payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.load = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(getProductById.pending, (state) => {
        state.load = true;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.load = false;
        state.productData = payload;
      });
  },
});

export default productSlice.reducer;
