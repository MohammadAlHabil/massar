import {
  Box,
  Typography,
  Container,
  useMediaQuery,
} from "../../mui-modules.js";
import TitleSection from "../TitleSection";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import { teams } from "../../utils";
import "./style.css";

export default function OurTeam() {
  const matches1 = useMediaQuery("(min-width:320px)");
  const matches2 = useMediaQuery("(min-width:600px)");
  const matches3 = useMediaQuery("(min-width:960px)");
  const matches4 = useMediaQuery("(min-width:1280px)");

  let count = 3;
  if (matches4) count = 4;
  else if (matches3) count = 3;
  else if (matches2) count = 2;
  else if (matches1) count = 1;

  return (
    <Container maxWidth="xl">
      <Box className="margin__top-section container-our-team">
        <TitleSection title="فريقنا" />
        <Box className="our-team__sliders">
          <Swiper
            slidesPerView={count}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
            {teams.length &&
              teams.map(({ img, name, jobTitle }) => (
                <SwiperSlide key={Math.random()}>
                  <Box className="person-card">
                    <Box className="person-card__img">
                      <img
                        className="person-img"
                        width="150"
                        height="150"
                        src={img}
                        alt={name}
                      />
                    </Box>
                    <Box className="person-info">
                      <Typography>{name}</Typography>
                      <Typography component={"span"} className="job-title">
                        {jobTitle}
                      </Typography>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Box>
    </Container>
  );
}
