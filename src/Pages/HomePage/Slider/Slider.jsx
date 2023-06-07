import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from 'swiper';
// const [thumbsSwiper, setThumbsSwiper] = useState(null);
const Slider = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full h-[500px]' src="https://www.kreedon.com/wp-content/uploads/2019/07/The-Bhaskar-Babu-Li-Ning-Academy-KreedOn-e1564853893346.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px]' src="https://t4.ftcdn.net/jpg/03/21/67/25/360_F_321672596_E5FPPTs2Ba1UX4TRP6ti71mtgTDUvsm0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;