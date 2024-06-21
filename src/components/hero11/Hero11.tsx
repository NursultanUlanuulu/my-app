import styled from "styled-components";
import last from "../../assets/img/hero11/last.png";
import { Container } from "../../routes/MainRoutes";
import { Title } from "../hero5/Hero5";
import { Flex } from "../hero8/Hero8";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero11Animation = {
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
const Hero11 = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const { t } = useTranslation(["home"]);
  const handleClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <Container>
        <Flex>
          <div>
            <Title custom={1} variants={Hero11Animation}>
              {t("Subscribe for updates")}
            </Title>
            <Text custom={2} variants={Hero11Animation}>
              {t("Subscribe for exclusive early sale access and new arrivals.")}
            </Text>
            <br />
            <Btn
              custom={3}
              variants={Hero11Animation}
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleClick(1)}
            >
              {t("Women")}
            </Btn>
            <Btn
              custom={4}
              variants={Hero11Animation}
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleClick(2)}
            >
              {t("Men")}
            </Btn>
            <Btn
              custom={5}
              variants={Hero11Animation}
              className={activeButton === 3 ? "active" : ""}
              onClick={() => handleClick(3)}
            >
              {t("Girls")}
            </Btn>
            <Btn
              custom={6}
              variants={Hero11Animation}
              className={activeButton === 4 ? "active" : ""}
              onClick={() => handleClick(4)}
            >
              {t("Boys")}
            </Btn>
            <br />
            <motion.form action="" custom={7} variants={Hero11Animation}>
              <Label htmlFor="">{t("Email")}</Label>
              <br />
              <Input type="text" placeholder={t("Your working email")} />
              <Submit type="submit" />
            </motion.form>

            <FlexCheck custom={8} variants={Hero11Animation}>
              <input type="checkbox" />
              <p>
                {t("I agree to receive communications from Createx Store.")}
              </p>
            </FlexCheck>
          </div>
          <Flex custom={10} variants={Hero11Animation}>
            <img src={last} alt="" />
          </Flex>
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Hero11;

const Text = styled(motion.p)`
  color: var(--gray-700, #787a80);
  font-family: Lato;
  font-size: 20px;
  font-weight: 400;
`;
const Btn = styled(motion.button)`
  padding: 5.5px 16px;
  border-radius: 4px;
  border: 1px solid var(--gray-400, #d7dadd);
  background-color: transparent;
  color: var(--gray-700, #787a80);
  font-family: Lato;
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
  margin-bottom: 20px;
  &.active {
    background: var(--primary, #17696a);
    color: white;
    border: 1px solid var(--primary, #17696a);
  }
`;
const Label = styled(motion.label)`
  color: var(--gray-800, #424551);
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
`;
const Input = styled(motion.input)`
  border-radius: 4px;
  border: 1px solid var(--gray-400, #d7dadd);
  background: var(--white, #fff);
  padding: 13px 344px 13px 16px;
`;
const Submit = styled(motion.input)`
  padding: 10px 34px 13px 16px;
  border-radius: 4px;
  background: var(--primary, #17696a);
  color: var(--white, #fff);
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  outline: none;
  border: none;
`;
const FlexCheck = styled(motion.div)`
  display: flex;
  margin-top: 20px;
`;
