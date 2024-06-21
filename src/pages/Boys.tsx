import React, { useEffect, useState } from "react";
import { Container } from "../routes/MainRoutes";
import { getProductsByCategory } from "../api/axiosInterceptors";
import { BASE_URL } from "../utils/constants/constants";
import { ProductsStyle } from "./Products";
import { Title } from "../components/hero5/Hero5";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  category?: string;
}

const Boys = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProductsByCategory("boys").then(setProducts);
  }, []);
  return (
    <ProductsStyle>
      <Container>
        <Title>Boys Product</Title>
        <div className="flex">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img
                src={`${BASE_URL}/uploads/${product.img}`}
                alt={product.name}
                width={285}
                height={321}
              />
              <div className="text">
                <p>{product.name}</p>
                <p>{product.price}$</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </ProductsStyle>
  );
};

export default Boys;
