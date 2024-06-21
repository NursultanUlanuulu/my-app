// import { createSlice } from "@reduxjs/toolkit";
// import { login, register } from "../../thunk/authThank/authThunk";

// const initialState = {
//   user: null,
//   token: null,
//   status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null as string | null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(register.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message ?? null;
//       })
//       .addCase(login.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message ?? null;
//       });
//   },
// });

// export default authSlice.reducer;
