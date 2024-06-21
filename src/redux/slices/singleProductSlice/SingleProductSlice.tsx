// import { createSlice } from "@reduxjs/toolkit";
// import { getProductById } from "../../thunk/singleProduct/SingleProductThunk";

// interface ProductState {
//   productData: Produc[];
//   load: boolean;
//   error: string | null;
// }

// const singleProductSlice = createSlice({
//   name: "singleProduct",
//   initialState: {
//     singleData: [],
//     load: false,
//     error: "",
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProductById.pending, (state) => {
//         state.load = true;
//       })
//       .addCase(getProductById.fulfilled, (state, { payload }) => {
//         state.load = false;
//         state.singleData = payload;
//       });
//     //   .addCase(getProductById.rejected, (state, {payload}) => {
//     //     state.load = false;
//     //     state.error = payload;
//     //   });
//   },
// });

// export default singleProductSlice.reducer;
