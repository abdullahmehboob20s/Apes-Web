import TeamCard from "components/Cards/TeamCard/TeamCard";
import React, { useRef } from "react";
import "./Team.css";
import teamImg1 from "assets/images/Desktop/team-img-1.png";
import teamImg2 from "assets/images/Desktop/team-img-2.png";
import teamImg3 from "assets/images/Desktop/team-img-3.png";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

function Team() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="team-wrapper bg-light-gray">
      <div className="container-wrapper py-100px">
        <div className="mb-80px">
          <div className="team-titles">
            <p className="fs-56px font-circular-bold red text-center mb-20px ">
              Meet Our Team
            </p>
            <p className="fs-22px darkest-blue text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
            </p>
          </div>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          breakpoints={{
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            880: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },

            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <TeamCard
              img={teamImg1}
              name="Ethan"
              designation="The Engineer"
              disc="“What is the difference between an ape and a monkey? I have no fucking clue, but I can write solidity with my eyes closed.”"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              img={teamImg2}
              name="Boba Bae"
              designation=""
              disc="“Drawing apes while drinking boba tea is the most fun I've had in years”"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              img={teamImg3}
              name="Degenerate Thomas"
              designation=""
              disc="“I will admit, I have been guilty of aping into new tokens a few times... Fine, every time. Anyhow, aping and apes are close to my heart”"
            />
          </SwiperSlide>
        </Swiper>

        <div className="slider-btns">
          <button ref={navigationPrevRef}>
            <HiArrowNarrowLeft />
          </button>
          <button ref={navigationNextRef}>
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;
