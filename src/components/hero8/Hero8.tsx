import styled from "styled-components";
import { Container } from "../../routes/MainRoutes";
import { Btn } from "../hero5/Hero5";
import { motion } from "framer-motion";
import { IconData } from "../../utils/constants/constants";
import { useTranslation } from "react-i18next";

const Hero8Animation = {
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

const Hero8 = () => {
  const { t } = useTranslation(["home"]);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <Container>
        <Flex>
          {IconData.slice(0, 4).map((item, index) => (
            <Icon key={item.id} custom={index + 1} variants={Hero8Animation}>
              <img src={item.img} alt="" />
              <h3>{t(item.title)}</h3>
              <p>{t(item.description)}</p>
            </Icon>
          ))}
        </Flex>
        <Flex>
          <div>
            <H6 custom={1} variants={Hero8Animation}>
              {t("Follow us on Instagram")}
            </H6>
            <Title custom={2} variants={Hero8Animation}>
              @createx_store
            </Title>
            <Btn custom={3} variants={Hero8Animation}>
              {t("Follow instagram")}
            </Btn>
          </div>
          <Flex>
            {IconData.slice(4, 7).map((item, index) => (
              <Block key={item.id} custom={index + 1} variants={Hero8Animation}>
                <img src={item.img} alt="" />
              </Block>
            ))}
          </Flex>
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Hero8;

export const Flex = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;
const H6 = styled(motion.h6)`
  color: #1e212c;
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;
const Title = styled(motion.h3)`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 46px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%; /* 59.8px */
`;
const Icon = styled(motion.div)`
  text-align: center;
  h3 {
    margin: 10px 0;
    color: #1e212c;
    font-family: Lato;
    font-size: 20px;
    font-weight: 700;
  }
  p {
    color: #787a80;
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
  }
`;
const Block = styled(motion.div)`
  margin: 50px 20px;
`;
