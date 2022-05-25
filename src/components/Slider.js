import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Pagination, Navigation } from "swiper";
import Sliders from "../data/Sliders.json";


function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper mb-5"
    >

      {
        Sliders.map(slider => {
          return (
            <SwiperSlide>
              <img className='w-100' src={slider.url} alt=''></img>
            </SwiperSlide>
          )
        })
      }

    </Swiper>
  )
}

export default Slider;

