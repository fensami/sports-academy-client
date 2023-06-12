import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from 'swiper';

const Slider = () => {
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


        {/* 1st slide */}
        <SwiperSlide>
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://tigerturf.com/in/wp-content/uploads/2020/01/IMG_0011.jpg")` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-white">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold"> Welcome to Sports Academy</h1>
                <p className="mb-5 text-xl font-semibold">Offering top-notch training programs for aspiring athletes</p>
                <p className='text-xl font-semibold w-1/2 mx-auto'>Unlock your potential and achieve greatness!</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 2nd slide */}
        <SwiperSlide>
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/002/152/503/original/live-cricket-tournament-banner-free-vector.jpg")` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-white">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">  Expert Coaching Staff</h1>
                <p className="mb-5 text-xl font-semibold"> Our experienced coaches are dedicated to nurturing talent and maximizing performance.</p>
                <p className='text-xl font-semibold w-1/2 mx-auto'>Learn from the best and take your skills to the next level!</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 3rd slide */}
        <SwiperSlide>
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://st2.depositphotos.com/4112313/7228/v/950/depositphotos_72285401-stock-illustration-badminton-sport-invitation-poster-or.jpg")` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-white">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">  Athletes competing in a championship event</h1>
                <p className="mb-5 text-xl font-semibold"> Immerse yourself in a challenging yet supportive atmosphere that fuels your competitive spirit.</p>
                <p className='text-xl font-semibold w-1/2 mx-auto'> Embrace the thrill of competition and become a champion!</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 4th slide */}
        <SwiperSlide>
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/tennis-balls-near-tablet-bottle_23-2147750770.jpg")` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-white">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">Cutting-Edge Facilities</h1>
                <p className="mb-5 text-xl font-semibold">Train in our modern facilities equipped with the latest technology and equipment.</p>
                <p className='text-xl font-semibold w-1/2 mx-auto'>Elevate your game with the best resources at your disposal!</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 5th slider */}
        <SwiperSlide>
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/football-sport-banner_18591-67329.jpg?w=2000")` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-white">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">Holistic Development</h1>
                <p className="mb-5 text-xl font-semibold">We focus on overall growth, emphasizing physical fitness, mental toughness, and character building.</p>
                <p className='text-xl font-semibold w-1/2 mx-auto'>Prepare for success both on and off the field!</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 6th slider */}
        <SwiperSlide>
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/top-view-yoga-essential-items_23-2149458976.jpg")` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-white">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">Holistic Development</h1>
                <p className="mb-5 text-xl font-semibold">We focus on overall growth, emphasizing physical fitness, mental toughness, and character building.</p>
                <p className='text-xl font-semibold w-1/2 mx-auto'>Prepare for success both on and off the field!</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;