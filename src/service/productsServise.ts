import { axiosInstance } from "../api/axiosInterceptors";

export const getAllProductsReq = () => {
  return axiosInstance.get("/api/products");
};