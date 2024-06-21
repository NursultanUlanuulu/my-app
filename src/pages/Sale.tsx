import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/index";
import { getAllProducts } from "../redux/thunk/productsThunk";
import { Container } from "../routes/MainRoutes";
import { BASE_URL } from "../utils/constants/constants";
import { Title } from "../components/hero5/Hero5";
import { ProductsStyle } from "./Products";
const Sale = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { productData } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <ProductsStyle>
      <Container>
        <Title>Sale</Title>
        <div className="flex">
          {productData.map((product) => (
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

export default Sale;
