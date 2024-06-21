import React from "react";
import { motion } from "framer-motion";
import { Container } from "../../routes/MainRoutes";
import styled from "styled-components";
import ban from "../../assets/img/hero1/ban.png";
import ban1 from "../../assets/img/hero1/ban1.png";
import ban2 from "../../assets/img/hero1/ban2.png";
import ban3 from "../../assets/img/hero1/ban3.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { INITIAL_PATH } from "../../utils/constants/constants";
const textAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2 },
  }),
};
const Hero1 = () => {
  const { t } = useTranslation(["home"]);
  return (
    <BannerStyle
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
      custom={1}
      variants={textAnimation}
    >
      <Container>
        <New custom={2} variants={textAnimation}>
          {t("New collection")}
        </New>
        <Title custom={3} variants={textAnimation}>
          {t("Menswear 2020")}
        </Title>
        <Link to={INITIAL_PATH.sale}>
          <Btn custom={4} variants={textAnimation}>
            {t("Shop sale")}
          </Btn>
        </Link>
        <Link to={INITIAL_PATH.man}>
          <Btn2 custom={5} variants={textAnimation}>
            {t("Shop the menswear")}
          </Btn2>
        </Link>
        <Flex>
          <Line custom={6} variants={textAnimation}>
            01
          </Line>
          <Line custom={7} variants={textAnimation}>
            02
          </Line>
          <Line custom={8} variants={textAnimation}>
            03
          </Line>
          <Line custom={9} variants={textAnimation}>
            04
          </Line>
        </Flex>
        <IMG custom={10} variants={textAnimation}>
          <Link to={INITIAL_PATH.women}>
            <div>
              <img src={ban1} alt="" />
              <p className="category">{t("Women’s")}</p>
            </div>
          </Link>
          <Link to={INITIAL_PATH.man}>
            <div>
              <img src={ban2} alt="" />
              <p className="category">{t("Men’s")}</p>
            </div>
          </Link>
          <Link to={INITIAL_PATH.kids}>
            <div>
              <img src={ban3} alt="" />
              <p className="category">{t("Kids’")}</p>
            </div>
          </Link>
        </IMG>
      </Container>
    </BannerStyle>
  );
};

export default Hero1;
const BannerStyle = styled(motion.div)`
  background-image: url(${ban});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
  margin-top: 100px;
`;
export const Title = styled(motion.h1)`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 72px;
  font-weight: 900;
  letter-spacing: 1px;
  margin: 12px 0 60px;
`;
export const New = styled(motion.h3)`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-top: 140px;
`;
export const Btn = styled(motion.button)`
  border-radius: 4px;
  border: 1px solid var(--primary, #17696a);
  background: transparent;
  color: var(--primary, #17696a);
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  max-width: 100%;
  padding: 0 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px; /* 325% */
  cursor: pointer;
`;
export const Btn2 = styled(motion.button)`
  margin-left: 64px;
  width: 250px;
  border-radius: 4px;
  border: none;
  background: var(--primary, #17696a);
  color: var(--white, #fff);
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  line-height: 52px; /* 325% */
  letter-spacing: 0.5px;
  cursor: pointer;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 824px;
  margin-top: 180px;
`;
const Line = styled(motion.h3)`
  margin-left: 20px;
  color: var(--gray-800, #424551);
  font-family: Lato;
  font-size: 28px;
  font-weight: 700;
  border-bottom: 4px solid #424551;
  width: 178px;
`;
const IMG = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding-top: 130px;
  text-align: center;

  .category {
    color: #424551;
    font-family: Lato;
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
  }
`;
