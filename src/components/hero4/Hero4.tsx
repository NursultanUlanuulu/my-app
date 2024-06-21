import styled from "styled-components";
import { Container } from "../../routes/MainRoutes";
import { motion } from "framer-motion";
import { Hero4Data } from "../../utils/constants/constants";
import { Title } from "../hero2/Hero2";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";

const Hero4Animation = {
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
const Hero4 = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div>
      <Container>
        <Title custom={1} variants={Hero4Animation}>
          {t("Popular categories")}
        </Title>
        <Flex
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
        >
          {Hero4Data.slice(0, 6).map((item, index) => (
            <motion.div
              key={item.id}
              custom={index + 1}
              variants={Hero4Animation}
            >
              <img src={item.img} alt="" />
              <p>{t(item.title)}</p>
            </motion.div>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Hero4;

export const Flex = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 300px;
`;
