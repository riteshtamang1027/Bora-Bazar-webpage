import Slider_Image from "../../public/sliderimage/slide-2.jpg";
import Image_Section from "../../public/sliderimage/img1.jpeg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default function Hero_Section() {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[70vh] object-cover  " >
        
          <SwiperSlide>
            <div className="relative" >
            <img src={Image_Section} alt="Slider_Image1" />
            <div className="flex flex-col gap-12  -top-24 absolute ">
            <h1 className="flex leading-[1.2] font-bold text-6xl w-7/12 mx-auto text-center mt-36 text-emerald-900 ">
              Healthy vegetable that you deserve to eat fresh
            </h1>
            <p className="  text-black opacity-60 font-semibold text-xl w-5/12 leading-[2] mx-auto text-center  ">
              We source and sell the very best beef, lamb and pork, sourced
              with the greatest care from farmer.
            </p>
            <input
              className=" bg-white w-6/12 mx-auto flex px-4 py-4 text-xl focus:ring-emerald-200 focus:ring-3 border-1 border-gray-700 focus:border-emerald-700 outline-none   rounded-lg"
              type="search"
              placeholder="What are you looking...  "
            />
          </div>
           
            </div>
           
          </SwiperSlide>
         
          <SwiperSlide>
            <div className="relative">
            <img  src={Slider_Image} alt="Slider_Image2" />
            <div className="flex flex-col gap-12  -top-24 absolute ">
            <h1 className="flex leading-[1.2] font-bold text-6xl w-7/12 mx-auto text-center mt-36 text-emerald-900 ">
              Healthy vegetable that you deserve to eat fresh
            </h1>
            <p className="  text-black opacity-60 font-semibold text-xl w-5/12 leading-[2] mx-auto text-center  ">
              We source and sell the very best beef, lamb and pork, sourced
              with the greatest care from farmer.
            </p>
            <input
              className=" bg-white w-6/12 mx-auto flex px-4 py-4 text-xl focus:ring-emerald-200 focus:ring-3 border-1 border-gray-700 focus:border-emerald-700 outline-none   rounded-lg"
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
 