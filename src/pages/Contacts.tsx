import React, { useState } from "react";
import { ProductsStyle } from "./Products";
// import { Btn2 } from "../components/hero1/Hero1";
import { Container } from "../routes/MainRoutes";
import styled from "styled-components";
import Hero11 from "../components/hero11/Hero11";
import FAQ from "./FAQ";
import ContactAs from "../components/contactAs/ContactAs";
import OutletStores from "../components/OutletStores/OutletStores";

const Contacts = () => {
  const [activeNav, setActiveNav] = useState<number>(1);
  const handleClick = (buttonId: number) => {
    setActiveNav(buttonId);
  };
    const renderContent = () => {
      switch (activeNav) {
        case 1:
          return <ContactAs />;
        case 2:
          return <OutletStores />;
        case 3:
          return <FAQ />;
        default:
          return <ContactAs/>;
      }
    };
  return (
    <ProductsStyle>
      <Container>
        <Flex>
          <div>
            <nav>
              <ul>
                <li
                  className={activeNav === 1 ? "active" : ""}
                  onClick={() => handleClick(1)}
                >
                  Contact Us
                </li>
                <li
                  className={activeNav === 2 ? "active" : ""}
                  onClick={() => handleClick(2)}
                >
                  Outlet Stores
                </li>
                  <li
                    className={activeNav === 3 ? "active" : ""}
                    onClick={() => handleClick(3)}
                  >
                    FAQ
                  </li>
              </ul>
            </nav>
          </div>
          <div className="content">
            {renderContent()}
          </div>    
        </Flex>
        <Hero11 />
      </Container>
    </ProductsStyle>
  );
};

export default Contacts;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  nav {
    width: 169px;
    ul li {
      color: #9a9ca5;
      font-family: Lato;
      font-size: 28px;
      font-weight: 700;
      margin: 20px 0;
      transition: background-color 1.4s, color 1s;
      cursor: pointer;
    }
  }
  .active {
    padding: 5px;
    border-radius: 10px;
    background-color: #17696a;
    color: white;
  }
  .content {
    width: 810px;
  }
  .form {
    width: 810px;
    height: 838px;
    flex-shrink: 0;
  }
  .title {
    color: #1e212c;
    font-family: Lato;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 32px;
  }
  .contact-flex {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    p {
      margin-left: 10px;
    }
  }
  .input {
    display: grid;
    width: 380px;
    border-radius: 4px;
    input {
      margin: 10px 0 10px;
      padding: 10px 0;
      outline: #424551;
    }
  }
  .big-input {
    display: grid;
    width: 786px;
  }
  .big-input input {
    margin-top: 10px;
    padding: 50px 0;
    border-radius: 4px;
    outline: none;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  form label {
    color: #424551;
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
  }
  button,
  BTN2 {
    margin: 48px 100px 0 0;
  }
`;
