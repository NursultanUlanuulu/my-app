import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/index";
import { getAllProducts } from "../redux/thunk/productsThunk";
import { Container } from "../routes/MainRoutes";
import { BASE_URL } from "../utils/constants/constants";
import styled from "styled-components";
import { Title } from "../components/hero5/Hero5";
import { useNavigate } from "react-router-dom";

const Products = ({id}:{id?:string}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const { productData } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch( getAllProducts());
  }, [dispatch]);
  return (
    <ProductsStyle>
      <Container>
        <Title>All Products</Title>
        <div className="flex">
          {productData.map((product) => (
            <div
              key={product.id}
              className="card"
              onClick={() => navigate(`/productDetal/${product.id}`)}
            >
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
export default Products;

export const ProductsStyle = styled.div`
  margin-top: 200px;
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .card {
    width: 285px;
    margin-bottom: 40px;
    border-radius: 4px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    transform: rotateX(0deg);
    transform-origin: center bottom;
  }
  .card:hover {
    transform: translateY(-10px) rotateX(5deg);
  }
  .text {
    margin: 10px 0 0 20px;
  }
  .text p {
    padding: 0 0 9px 0;
  }
`;
