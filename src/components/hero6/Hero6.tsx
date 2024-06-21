import { Container } from "../../routes/MainRoutes";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Img, Title } from "../hero5/Hero5";
import { Flex } from "../hero4/Hero4";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Hero4Data } from "../../utils/constants/constants";
import { useTranslation } from "react-i18next";

const Hero6Animation = {
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
const Hero6 = () => {
  const { t } = useTranslation(["home"]);
  return (
    <Hero6Style
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <Container>
        <Title custom={1} variants={Hero6Animation}>
          {t("Sale up to 70%")}
        </Title>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <Flex>
            {Hero4Data.slice(9).map((item, index) => (
              <SwiperSlide key={item.id}>
                <Card custom={index + 1} variants={Hero6Animation}>
                  <Img>
                    <img src={item.img} alt="" width={335} height={330} />
                  </Img>
                  <div>
                    <p>{t(item.title)}</p>
                    <h4>{item.price}</h4>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Flex>
        </Swiper>
        <Btn custom={5} variants={Hero6Animation}>
          {t("See all sale products")}
        </Btn>
      </Container>
    </Hero6Style>
  );
};

export default Hero6;

const Hero6Style = styled(motion.div)`
  text-align: center;
`;
const Btn = styled(motion.button)`
  border-radius: 4px;
  border: 1px solid var(--primary, #17696a);
  background: transparent;
  color: var(--primary, #17696a);
  text-align: center;
  font-family: Lato;
  font-size: 16px;
padding:0 10px;
  font-weight: 700;
  line-height: 52px;
  margin-top: 100px;
`;
