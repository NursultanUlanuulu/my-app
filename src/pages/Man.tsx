import { useEffect, useState } from "react";
import { Container } from "../routes/MainRoutes";
import { BASE_URL } from "../utils/constants/constants";
import { getProductsByCategory } from "../api/axiosInterceptors";
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

const Man = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(()=>{
    getProductsByCategory("man").then(setProducts)
  },[])
  return (
    <ProductsStyle>
      <Container>
        <Title>Man Product</Title>
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

export default Man;