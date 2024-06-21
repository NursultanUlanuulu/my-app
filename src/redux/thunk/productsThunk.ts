import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../slices/productSlices";
import { getAllProductsReq } from "../../service/productsServise";

export const getAllProducts = createAsyncThunk<Product[]>(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllProductsReq();
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
); 
