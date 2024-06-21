import styled from "styled-components";
import { Container } from "../../routes/MainRoutes";
import { Flex } from "../hero4/Hero4";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Hero4Data, INITIAL_PATH } from "../../utils/constants/constants";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Hero5Animation = {
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
const Hero5 = () => {
  const { t } = useTranslation(["home"]);

  return (
    <Hero5Style
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <Container>
        <Title custom={1} variants={Hero5Animation}>
          {t("Trending now")}
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
            {Hero4Data.slice(6).map((item, index) => (
              <SwiperSlide key={item.id}>
                <Card custom={index + 1} variants={Hero5Animation}>
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
        <Link to={INITIAL_PATH.sale}>
          <Btn custom={5} variants={Hero5Animation}>
            {t("Explore top sales")}
          </Btn>
        </Link>
      </Container>
    </Hero5Style>
  );
};

export default Hero5;
export const Title = styled(motion.h1)`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 46px;
  font-weight: 900;
  text-align: start;
  padding: 40px 0 40px;
`;
const Hero5Style = styled(motion.div)`
  height: 750px;
  flex-shrink: 0;
  background: var(--gray-300, #e5e8ed);
  text-align: center;
`;
export const Img = styled(motion.div)`
  border-radius: 4px;
`;
export const Card = styled(motion.div)`
  margin-bottom: 40px;
`;
export const Btn = styled(motion.button)`
  border-radius: 4px;
  border: 1px solid var(--primary, #17696a);
  background: transparent;
  color: var(--primary, #17696a);
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  padding: 0 10px;
  font-weight: 700;
  line-height: 52px;
  margin-top: 100px;
`;
