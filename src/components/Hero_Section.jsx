import Slider_Image from "../../public/sliderimage/slide-2.jpg";
import Image_Section from "../../public/sliderimage/img1.jpeg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
export default function Hero_Section() {
  return (
    <div className="">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[70vh] md:h-[80vh] object-cover w-11/12 mx-auto rounded-xl "
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[70vh] md:h-[80vh] object-cover"
              src={Image_Section}
              alt="Slider_Image1"
            />
            <div className="flex flex-col gap-4 md:gap-8 xl:gap-12 space-y-4 -top-24 absolute ">
              <p className="flex leading-[1.2] font-bold text-4xl md:text-5xl xl:text-6xl w-10/12 lg:w-7/12 xl:w-8/12  mx-auto text-center  mt-30  lg:mt-36 text-emerald-900 opacity-80 ">
                Healthy vegetable that you deserve to eat fresh
              </p>

              <p className="text-black opacity-60  font-semibold text-lg xl:text-xl w-8/12 md:w-5/12  md:leading-[2] leading-[1.5] mx-auto text-center">
                We source and sell the very best beef, lamb and pork, sourced
                with the greatest care from farmer.
              </p>
              <input
                className=" bg-white md:w-6/12 mt-8 mx-auto flex md:p-4 p-2 md:text-xl focus:ring-emerald-200 focus:ring-3 border-1 border-gray-700 focus:border-emerald-700 outline-none  rounded-lg"
                type="search"
                placeholder="What are you looking..."
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img   className="h-[70vh] md:h-[80vh] w-full object-cover" src={Slider_Image} alt="Slider_Image2" />
            <div className="flex flex-col gap-4 md:gap-8 xl:gap-12 space-y-4 -top-24 absolute ">
              <p className="flex leading-[1.2] font-bold text-4xl md:text-5xl xl:text-6xl w-10/12 xl:w-7/12 lg:w-8/12  mx-auto text-center  mt-30  lg:mt-36 text-emerald-900 opacity-80 ">
                Healthy vegetable that you deserve to eat fresh
              </p>
              <p className="text-black opacity-60  font-semibold text-lg xl:text-xl w-8/12 md:w-5/12  md:leading-[2] leading-[1.5] mx-auto text-center">
                We source and sell the very best beef, lamb and pork, sourced
                with the greatest care from farmer.
              </p>
              <input
                className=" bg-white md:w-6/12 mt-8 mx-auto flex md:p-4 p-2 md:text-xl focus:ring-emerald-200 focus:ring-3 border-1 border-gray-700 focus:border-emerald-700 outline-none  rounded-lg"
                type="search"
                placeholder="What are you looking...  "
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
