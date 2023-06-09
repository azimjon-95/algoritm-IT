import React, { useState, useEffect } from "react";
import { videoData } from '../../utils/videoData'
import "./main.css";

import Aos from "aos";
import "aos/dist/aos.css";

import { Typewriter } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import img1 from '../../asets/main/img1.jpg'
import img2 from '../../asets/main/img2.jpg'
import img3 from '../../asets/main/img3.jpg'
import img4 from '../../asets/main/img4.jpg'
import img5 from '../../asets/main/img5.jpg'
import img6 from '../../asets/main/img6.jpg'

export const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const iT = [
    "IT", "Ingliz tili", "Rus tili"
  ]


  return (

    <div className="section1">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, Pagination, Navigation]}
      // className="mySwiper"
      >
        <SwiperSlide className="bg_img" style={{ backgroundImage: `url(${img1})` }}></SwiperSlide>
        <SwiperSlide className="bg_img" style={{ backgroundImage: `url(${img2})` }}></SwiperSlide>
        <SwiperSlide className="bg_img" style={{ backgroundImage: `url(${img3})` }}></SwiperSlide>
        <SwiperSlide className="bg_img" style={{ backgroundImage: `url(${img3})` }}></SwiperSlide>
        <SwiperSlide className="bg_img" style={{ backgroundImage: `url(${img4})` }}></SwiperSlide>
        <SwiperSlide className="bg_img" style={{ backgroundImage: `url(${img5})` }}></SwiperSlide>
        <SwiperSlide className="bg_img" style={{ backgroundImage: `url(${img6})` }}></SwiperSlide>

      </Swiper>
      <div className="sec_l">

        <span className="logo_title-flex">
          <p className="logo_title">Algoritm Ta'lim da</p>
          <p className="logo_title t_left">
            <Typewriter
              words={iT}
              loop
              typeSpeed={90}
              deleteSpeed={90}
              delaySpeed={1000}
            /></p>
        </span>
        <p className="logo_title top_left"> o‘rganing</p>

        <div className="video">
          {
            videoData?.map((value, inx) => <video key={inx} src={value.videoBaner} autoPlay controls muted loop></video>)
          }

        </div>
      </div>
    </div>


  );
};
export default React.memo(Main);






