import React, { useState, useEffect } from "react";
import { Container } from "../../routes/MainRoutes";
import { Link } from "react-router-dom";
import flag from "../../assets/img/header/flag.png";
import flag2 from "../../assets/img/header/flag2.png";
import flag3 from "../../assets/img/header/flag3.png";
import flag4 from "../../assets/img/header/flag4.png";
import logo from "../../../src/assets/img/header/logo.png";
import { INITIAL_PATH } from "../../utils/constants/constants";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import { SignIn } from "../../components/sign/SignIn";
import { SignUp } from "../../components/sign/SignUp";

const Header: React.FC = () => {
  const { t } = useTranslation(["header"]);
  const [currentFlag, setCurrentFlag] = useState(flag);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<number>();

  const handleClick = (buttonId: number) => {
    setActiveNav(buttonId);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);

    switch (newLang) {
      case "en":
        setCurrentFlag(flag);
        break;
      case "ru":
        setCurrentFlag(flag2);
        break;
      case "kg":
        setCurrentFlag(flag3);
        break;
      case "ch":
        setCurrentFlag(flag4);
        break;
      default:
        setCurrentFlag(flag); // Флаг по умолчанию
    }
  };

  const handleClickOutside = (event: MouseEvent) => {};

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const handleSignIn = (email: string, password: string) => {
  //   console.log("Signed in with", email, password);
  //   setIsSignInOpen(false); // Закрыть модальное окно после входа
  // };
  // const handleSignUp = (email: string, password: string) => {
  //   // Здесь будет логика обработки регистрации
  //   console.log("Registered with", email, password);
  //   setIsSignUpOpen(false); // Закрыть модальное окно после регистрации
  // };
  return (
    <Headers>
      <div className="header-bag">
        <Container>
          <div className="header-box">
            <div className="header-text">
              <h3>{t("Available 24/7 at +996 (502) 102 270")}</h3>
            </div>
            <div className="header-list">
              <Link className="header" to="#">
                <p>{t("Delivery & returns")}</p>
              </Link>
              <Link to="#">
                <p>{t("Track order")}</p>
              </Link>
              <Link to="#">
                <p>{t("Blog")}</p>
              </Link>
              <Link to={INITIAL_PATH.contacts}>
                <p>{t("Contacts")}</p>
              </Link>
            </div>
            <div className="header-translate">
              <img src={currentFlag} alt="flag-img" width={20} />
              <select className="header-select" onChange={handleLanguageChange}>
                <option value="en">En</option>
                <option value="ru">Ru</option>
                <option value="kg">Kg</option>
                <option value="ch">Ch</option>
              </select>
            </div>

            <div className="header-register">
              {React.createElement("ion-icon", { name: "person-outline" })}
              <span onClick={() => setIsSignInOpen(true)}>{t("SignIn")}</span>
              {isSignInOpen && <SignIn />}
              <span>/</span>
              <span onClick={() => setIsSignUpOpen(true)}>{t("SignUp")}</span>
              {isSignUpOpen && (
                <SignUp
                // onSignUp={handleSignUp}
                />
              )}
            </div>
          </div>
        </Container>
      </div>
      <div className="header-bag2">
        <Container>
          <div className="header-box">
            <div>
              <Link to={INITIAL_PATH.main_page}>
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div className="header-list2">
              <Link
                to={INITIAL_PATH.products}
                className={activeNav === 1 ? "active" : ""}
                onClick={() => handleClick(1)}
              >
                <p>{t("All")}</p>
              </Link>
              <Link
                to={INITIAL_PATH.women}
                className={activeNav === 2 ? "active" : ""}
                onClick={() => handleClick(2)}
              >
                <p>{t("Women")}</p>
              </Link>
              <Link
                to={INITIAL_PATH.man}
                className={activeNav === 3 ? "active" : ""}
                onClick={() => handleClick(3)}
              >
                <p>{t("Men")}</p>
              </Link>
              <Link
                to={INITIAL_PATH.girls}
                className={activeNav === 4 ? "active" : ""}
                onClick={() => handleClick(4)}
              >
                <p>{t("Girls")}</p>
              </Link>
              <Link
                to={INITIAL_PATH.boys}
                className={activeNav === 5 ? "active" : ""}
                onClick={() => handleClick(5)}
              >
                <p>{t("Boys")}</p>
              </Link>
              <Link
                to={INITIAL_PATH.kids}
                className={activeNav === 6 ? "active" : ""}
                onClick={() => handleClick(6)}
              >
                <p>{t("Kids")}</p>
              </Link>
              <Link
                to={INITIAL_PATH.sale}
                className={activeNav === 7 ? "active" : ""}
                onClick={() => handleClick(7)}
              >
                <p>{t("Sale")}</p>
              </Link>
            </div>
            <SearchContainer className="header-search">
              <input type="search" placeholder={t("Search for products...")} />
              {React.createElement("ion-icon", { name: "search-outline" })}
            </SearchContainer>

            <div className="header-icons">
              <span>
                {React.createElement("ion-icon", { name: "heart-outline" })}
              </span>
              <span>
                {React.createElement("ion-icon", {
                  name: "bag-remove-outline",
                })}
              </span>
            </div>
          </div>
        </Container>
      </div>
      <div className="header-bag3">
        <Container>
          <p>
            {t("Up to 70% Off.")}
            <Link to={INITIAL_PATH.sale}>
              <span>{t("Shop our latest sale styles")}</span>
            </Link>
          </p>
        </Container>
      </div>
    </Headers>
  );
};

export default Header;

const Headers = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  .header-bag {
    background: var(--gray-900, #1e212c);
    width: 100%;
    height: 44px;
    padding: 15px 0;
  }
  .header-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-text h3 {
    color: var(--white, #fff);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
  .header-list2 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .header-list2 a {
    color: #424551;
  }
  .header-list2 p {
    margin-right: 20px;
    padding-left: 20px;
  }
  .header-list {
    display: flex;
    justify-content: space-between;
  }
  .header-list p {
    color: var(--white, #fff);
    font-size: 14px;
    font-weight: 400;
    padding: 0 16px;
    text-decoration: none;
    &:hover {
      color: gold;
    }
    &:active {
      color: #ff4242;
    }
  }
  .active {
    padding: 5px;
    border-radius: 10px;
    background-color: #17696a;
  }
  .active p {
    color: white;
  }
  .header-translate select {
    color: var(--white, #fff);
    font-size: 14px;
    font-weight: 400;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    & option {
      color: #9a1616;
      font-size: 16px;
      font-weight: 600;
      background: none;
      cursor: pointer;
    }
  }
  .header-translate {
    display: flex;
  }
  .header-register ion-icon {
    color: white;
    font-size: 14px;
    font-weight: 400;
  }
  .header-register span {
    color: white;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    padding-left: 8px;
  }
  .header-bag2 {
    background: #fff;
    width: 100%;
    padding: 15px 0;
  }
  .header-list2 {
    color: var(--gray-800, #424551);
    font-size: 14px;
    font-weight: 700;
    padding: 0 10px;
    text-decoration: none;
  }
  .header-icons span {
    font-size: 20px;
    padding-left: 18px;
    cursor: pointer;
  }

  .header-bag3 {
    background: var(--primary, #17696a);
    padding: 8px 0;
    text-align: center;
  }

  .header-bag3 p {
    color: var(--white, #fff);
    font-size: 19px;
    font-weight: 400;
  }
  .header-bag3 a {
    color: var(--white, #fff);
    font-size: 19px;
    font-weight: 400;
    border-bottom: 1px solid #fff;
    margin-left: 10px;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;

  ion-icon {
    margin: 0 10px;
    color: gray;
  }

  input[type="search"] {
    border: none;
    width: 100%;
    padding: 10px;
    outline: none;
  }
`;
