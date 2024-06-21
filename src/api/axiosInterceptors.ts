import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  category: string;
}

// Функция для получения продуктов по категории
export const getProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  try {
    const response = await fetch(`http://localhost:3000/api/products`);
    const products: Product[] = await response.json();

    // Фильтрация продуктов по категории, если категория указана
    return category
      ? products.filter((product) =>
         product.category ? product.category.split(", ").includes(category) : false
        )
      : products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // В случае ошибки возвращаем пустой массив
  }
};

