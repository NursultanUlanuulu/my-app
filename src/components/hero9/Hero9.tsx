import styled from "styled-components";
import { Container } from "../../routes/MainRoutes";
import { Title } from "../hero5/Hero5";
import { Flex } from "../hero8/Hero8";
import card from "../../assets/img/hero9/card3.svg";
import { motion } from "framer-motion";
import { IconData } from "../../utils/constants/constants";
import { useTranslation } from "react-i18next";

const Hero9Animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Hero9 = () => {
  const { t } = useTranslation(["home"]);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <Container>
        <Title custom={1} variants={Hero9Animation}>
          {t("Fashion blog")}
        </Title>
        <Flex>
          {IconData.slice(7).map((item, index) => (
            <Card key={item.id} custom={index + 1}>
              <img src={item.img} alt="" width={550} />
              <H4 custom={2} variants={Hero9Animation}>
                {t(item.title)}
              </H4>
              <Mess>
                <P custom={2} variants={Hero9Animation}>
                  {t("Fashion |")}
                </P>
                <P custom={3} variants={Hero9Animation}>
                  {t("August 24, 2020 ")}|
                </P>
                <P custom={4} variants={Hero9Animation}>
                  <img src={card} alt="img" />
                  {t("No comments")}
                </P>
              </Mess>
              <DSCR custom={5} variants={Hero9Animation}>
                {t(item.description)}
              </DSCR>
            </Card>
          ))}
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Hero9;

const Card = styled(motion.div)`
  width: 550px;
  height: 502px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  transform: rotateX(0deg);
  transform-origin: center bottom;
  &:hover {
    transform: translateY(-10px) rotateX(5deg);
  }
`;
const Mess = styled(motion.div)`
  display: flex;
`;
const P = styled(motion.p)`
  color: var(--gray-700, #787a80);
  align-items: center;
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 0 0 10px;
`;
const H4 = styled(motion.h4)`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 20px;
  font-weight: 700;
  padding: 5px 0 0 10px;
`;
const DSCR = styled(motion.p)`
  color: var(--gray-800, #424551);
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  padding: 0 0 0 10px;
`;
