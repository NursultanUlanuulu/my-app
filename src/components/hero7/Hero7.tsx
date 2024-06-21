import styled from "styled-components";
import gta from "../../assets/img/hero7/gta.png";
import { Container } from "../../routes/MainRoutes";
import { motion } from "framer-motion";

const banAnimation = {
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
const Hero7 = () => {
  return (
    <Hero7Style
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
      custom={1}
      variants={banAnimation}
    >
      <Container></Container>
    </Hero7Style>
  );
};

export default Hero7;

const Hero7Style = styled(motion.div)`
  background-image: url(${gta});
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 100px;
`;
