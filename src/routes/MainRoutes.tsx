import { Routes, Route } from "react-router-dom";
import { INITIAL_PATH } from "../utils/constants/constants";
import MainPage from "../pages/MainPage";
import Layout from "../layout/Layout";
import styled from "styled-components";
import Women from "../pages/Women";
import Boys from "../pages/Boys";
import Girls from "../pages/Girls";
import Man from "../pages/Man";
import Sale from "../pages/Sale";
import Products from "../pages/Products";
import FAQ from "../pages/FAQ";
import Contacts from "../pages/Contacts";
import Kids from "../pages/Kids";
import ProductDetal from "../pages/ProductDetal";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={INITIAL_PATH.main_page} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={INITIAL_PATH.contacts} element={<Contacts />} />
          <Route path={INITIAL_PATH.FAQ} element={<FAQ />} />
          <Route path={INITIAL_PATH.women} element={<Women />} />
          <Route path={INITIAL_PATH.boys} element={<Boys />} />
          <Route path={INITIAL_PATH.girls} element={<Girls />} />
          <Route path={INITIAL_PATH.man} element={<Man />} />
          <Route path={INITIAL_PATH.sale} element={<Sale />} />
          <Route path={INITIAL_PATH.products} element={<Products/>} />
          <Route path={INITIAL_PATH.kids} element={<Kids />} />
          <Route path={INITIAL_PATH.detal} element={<ProductDetal/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default MainRoutes;

export const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
`;
