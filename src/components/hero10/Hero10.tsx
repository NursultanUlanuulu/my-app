import { Container } from "../../routes/MainRoutes";
import { LogoData } from "../../utils/constants/constants";
import { Flex } from "../hero8/Hero8";
import { motion } from "framer-motion";

const Hero10Animation = {
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

const Hero10 = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <Container>
        <Flex>
          {LogoData.map((item, index) => (
            <motion.div key={item.id} custom={index + 1} variants={Hero10Animation}>
              <img src={item.img} alt="" />
            </motion.div>
          ))}
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Hero10;
