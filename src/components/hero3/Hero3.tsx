import React from "react";
import styled from "styled-components";
import { Container } from "../../routes/MainRoutes";
import hero1 from "../../assets/img/hero3/hero1.png";
import hero2 from "../../assets/img/hero3/hero2.png";
import hero3 from "../../assets/img/hero3/hero3.png";
import hero4 from "../../assets/img/hero3/hero4.png";
import { motion } from "framer-motion";

const Hero3Animation = {
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
const Hero3 = () => {
  return (
    <div>
      <Container>
        <Flex
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
        >
          <Banner1 custom={1} variants={Hero3Animation}></Banner1>
          <Banner2 custom={2} variants={Hero3Animation}></Banner2>
          <Banner3 custom={3} variants={Hero3Animation}></Banner3>
          <Banner4 custom={4} variants={Hero3Animation}></Banner4>
        </Flex>
      </Container>
    </div>
  );
};

export default Hero3;

const Flex = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 260px;
`;
const Banner1 = styled(motion.div)`
  background-image: url(${hero1});
  background-size: cover;
  background-repeat: no-repeat;
  width: 514px;
  height: 400px;
  flex-shrink: 0;
  margin: 0 16px 16px 0;
`;
const Banner2 = styled(motion.div)`
  background-image: url(${hero2});
  background-size: cover;
  background-repeat: no-repeat;
  width: 670px;
  height: 400px;
  flex-shrink: 0;
`;
const Banner3 = styled(motion.div)`
  background-image: url(${hero3});
  background-size: cover;
  background-repeat: no-repeat;
  width: 670px;
  height: 400px;
  flex-shrink: 0;
`;
const Banner4 = styled(motion.div)`
  background-image: url(${hero4});
  background-size: cover;
  background-repeat: no-repeat;
  width: 514px;
  height: 400px;
  flex-shrink: 0;
  margin: 0 0 180px 16px;
`;
