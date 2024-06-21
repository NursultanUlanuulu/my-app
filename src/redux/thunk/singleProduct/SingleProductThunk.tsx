import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductById = createAsyncThunk(
  "productDetail/getProductById",
  async (id:string, { rejectWithValue }) => {
    // Деструктуризация объекта и взятие id
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/products/${id}`
      );
      console.log(data);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

