// import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   postLoginReq,
//   postRegisterReq,
// } from "../../../service/auth/authServis";
// import axios from "axios";

// export const register = createAsyncThunk(
//   "auth/register",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const { data } = await postRegisterReq(userData);
//       return data;
//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response) {
//         return rejectWithValue(error.response.data);
//       }
//       return rejectWithValue("An unknown error occurred");
//     }
//   }
// );

// export const login = createAsyncThunk(
//   "auth/login",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const { data } = await postLoginReq(userData);
//       return data;
//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response) {
//         return rejectWithValue(error.response.data);
//       }
//       return rejectWithValue("An unknown error occurred");
//     }
//   }
// );
