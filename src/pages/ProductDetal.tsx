// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { RootState } from "../redux";
// import { getProductById } from "../redux/thunk/singleProduct/SingleProductThunk";
// import { BASE_URL } from "../utils/constants/constants";
// import { ProductsStyle } from "./Products";

// const ProductDetal = () => {
//   const params = useParams<{ id: string }>();
//   const dispatch = useDispatch();
//   const { productData } = useSelector((state: RootState) => state.product);
//   console.log(productData, "data");
//       useEffect(() => {
//         dispatch(getProductById({ id: String(params.id) }));
//       }, [params.id]);
//   if (Object.keys(productData).length === 0) {
//     return <h2>Loading</h2>;
//   }
//   return (
//     <ProductsStyle>
//       <h1>{productData.title}</h1>
//       <div key={productData.id} className="card">
//         <img
//           src={`${BASE_URL}/uploads/${productData.img}`}
//           alt={productData.name}
//           width={285}
//           height={321}
//         />
//         <div className="text">
//           <p>{productData.name}</p>
//           <p>{productData.price}$</p>
//         </div>
//       </div>
//     </ProductsStyle>
//   );
// };

// // export default ProductDetal;
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { RootState } from "../redux";
// import { getProductById } from "../redux/thunk/singleProduct/SingleProductThunk";
// import { BASE_URL } from "../utils/constants/constants";
// import { ProductsStyle } from "./Products";

// interface Product{
//     title:string,

// }
// const ProductDetal = () => {
//   const { id } = useParams<{ id: string }>();
//   const dispatch = useDispatch();
//   const { productData } = useSelector((state: RootState) => state.product);

//   useEffect(() => {
//     if (id) {
//       dispatch(getProductById(id) as any);
//     }
//   }, [dispatch, id]);

//   if (!productData || !productData.title) {
//     return <h2>Loading</h2>;
//   }

//   return (
//     <ProductsStyle>
//       <h1>{productData.title}</h1>
//       <div key={productData.id} className="card">
//         <img
//           src={`${BASE_URL}/uploads/${productData.img}`}
//           alt={productData.name}
//           width={285}
//           height={321}
//         />
//         <div className="text">
//           <p>{productData.name}</p>
//           <p>{productData.price}$</p>
//         </div>
//       </div>
//     </ProductsStyle>
//   );
// };

// export default ProductDetal;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux";
import { getProductById } from "../redux/thunk/singleProduct/SingleProductThunk";
import { BASE_URL } from "../utils/constants/constants";
import { ProductsStyle } from "./Products";

interface Product {
  title: string;
  id: string;
  img: string;
  name: string;
  price: number;
  // ... other properties if present
}

const ProductDetail: React.FC<Product[]> = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { productData } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id) as any);
    }
  }, [dispatch, id]);

  if (!productData || !productData.title) {
    return <h2>Loading</h2>;
  }

  return (
    <ProductsStyle>
      <h1>{productData.title}</h1>
      <div key={productData.id} className="card">
        <img
          src={`${BASE_URL}/uploads/${productData.img}`}
          alt={productData.name}
          width={285}
          height={321}
        />
        <div className="text">
          <p>{productData.name}</p>
          <p>{productData.price}$</p>
        </div>
      </div>
    </ProductsStyle>
  );
};

export default ProductDetail;
