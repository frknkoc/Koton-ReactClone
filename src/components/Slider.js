import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Pagination, Navigation } from "swiper";


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
      <SwiperSlide>
        <img className='w-100' src='https://img-kotonw.mncdn.com/static/images/11199821742110/melisagazat-slider-new.jpeg' alt=''></img>
      </SwiperSlide>

      <SwiperSlide>
        <img className='w-100' src='https://img-kotonw.mncdn.com/static/images/11199766954014/ebrusalli-slider.jpeg' alt='' />
      </SwiperSlide>

      <SwiperSlide>
        <img className='w-100' src='https://img-kotonw.mncdn.com/static/images/11198698586142/75tlidirim300kargo-slider.jpeg' alt='' />
      </SwiperSlide>




    </Swiper>
  )
}

export default Slider;

