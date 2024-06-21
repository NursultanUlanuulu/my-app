import React, { useEffect, useState } from "react";
import { Container } from "../routes/MainRoutes";
import { ProductsStyle } from "./Products";
import { Title } from "../components/hero5/Hero5";
import { getProductsByCategory } from "../api/axiosInterceptors";
import { BASE_URL } from "../utils/constants/constants";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category?: string;
}
const Girls = () => {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    getProductsByCategory("girls").then(setProduct);
  }, []);
  return (
    <ProductsStyle>
      <Container>
        <Title>Girls Product</Title>
        <div className="flex">
          {product.map((product) => (
            <div key={product.id} className="card">
              <img
                src={`${BASE_URL}/uplaods/${product.img}`}
                alt={product.name}
                width={285}
                height={321}
              />
              <div className="text">
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </ProductsStyle>
  );
};

export default Girls;
