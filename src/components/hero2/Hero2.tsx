import styled from "styled-components";
import { Container } from "../../routes/MainRoutes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Hero2Data, INITIAL_PATH } from "../../utils/constants/constants";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroAnimation = {
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
const Hero2 = () => {
  const { t } = useTranslation(["home"]);
  return (
    <ArrivalsStyle
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      <Container>
        <Title custom={1} variants={HeroAnimation}>
          {t("New arrivals")}
        </Title>
        <Tab custom={3} variants={HeroAnimation}>
          {t("Check out our latest arrivals for the upcoming season")} <br />
          <Link to={INITIAL_PATH.products}> {t("See the collection here")}</Link>
        </Tab>
        <Swiper
          slidesPerView={5}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Hero2Data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Card custom={index + 1} variants={HeroAnimation}>
                <div>
                  <img src={item.img} alt="" width={235} height={330} />
                </div>
                <div>
                  <CardTitle>{t(item.title)}</CardTitle>
                  <Price>{item.price}</Price>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </ArrivalsStyle>
  );
};

export default Hero2;

export const Title = styled(motion.h1)`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 46px;
  font-weight: 900;
  text-align: center;
`;

const Tab = styled(motion.p)`
  color: var(--gray-700, #787a80);
  text-align: center;
  font-family: Lato;
  font-size: 18px;
  font-weight: 400;
  margin: 24px 0 60px;
`;

const ArrivalsStyle = styled(motion.div)`
  margin-top: 600px;
`;

const Card = styled(motion.div)`
  width: 285px;
  height: 413px;
  border-radius: 4px;
  margin-bottom: 20px;
`;
const CardTitle = styled.p`
  color: var(--gray-800, #424551);
  font-family: Lato;
  font-size: 18px;
  font-weight: 400;
`;
const Price = styled.h5`
  color: var(--gray-900, #1e212c);
  font-family: Lato;
  font-size: 20px;
  font-weight: 700;
`;
