import React from "react";
import first from "../../public/single-product/1.webp";
import second from "../../public/single-product/2.webp";
import third from "../../public/single-product/3.webp";

import { LiaShoppingBagSolid } from "react-icons/lia";
import { Heart } from "lucide-react";
import { PiShareFatThin } from "react-icons/pi";
import { SlTag } from "react-icons/sl";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper/modules";

export default function Single_Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="grid grid-cols-2 w-11/12 mt-24 mx-auto px-6">
      <div>
        <div className=" border rounded-xl border-gray-300   overflow-hidden ">
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2 max-sm:h-[60vh] max-sm:top-24"
          >
            <SwiperSlide>
              <img className="object-cover" src={first} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="object-cover" src={second} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className=" md:mt-26 md:ml-20 ml-6 mt-  w-[30vw]" src={third} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          modules={[FreeMode, Thumbs]}
          className="mySwiper mt-4"
        >
          <SwiperSlide className="border  border-gray-300 focus:border focus:border-teal-400 rounded-lg overflow-hidden">
            <img className="object-cover" src={first} alt="" />
          </SwiperSlide>
          <SwiperSlide className="border border-gray-300 rounded-lg overflow-hidden">
            <img className="object-cover" src={second} alt="" />
          </SwiperSlide>
          <SwiperSlide className="border border-gray-300 rounded-lg overflow-hidden">
            <img className="object-cover" src={third} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="md:ml-24 ml-8 space-y-2 md:space-y-8">
        <p className="md:text-3xl text-xl font-semibold opacity-80 whitespace-nowrap">
          Fresh Green Leaf Lettuce
        </p>
        <p className="text-sm font-semibold opacity-50">1 each</p>
        <p className="space-x-1">
          <span className="font-bold  md:text-xl">$2.64</span>
          <span className="opacity-50  md:text-lg">$2.74</span>
          <span className="  text-green-800 max-md:text-sm bg-green-200 py-1 px-2 rounded-sm opacity-50 font-bold">
            4% OFF
          </span>
        </p>
        <p className="text-orange-400 font-semibold text-sm">
          Only 70 item left!
        </p>

        <div className="bg-gray-200 rounded-md w-max">
          <p className=" text-xl opacity-80 md:space-x-12 space-x-12 md:px-29 px-16 py-1 md:py-2">
            <span className="">-</span>
            <span>1</span>
            <span>+</span>
          </p>
        </div>

        <div className="flex items-center bg-teal-500 gap-x-2   md:px-29 px-16 py-1 md:py-2 rounded-md w-max  text-white">
          <LiaShoppingBagSolid className="opacity-90" size={25} />
          <p className="font-semibold text-lg ">Add to Cart</p>
        </div>
        <div className="flex gap-x-2">
          <div className="border border-gray-300 rounded-md w-max flex items-center gap-x-2 md:px-12 px-6 md:py-2 py-1 font-semibold max-md:text-sm hover:text-teal-500">
            <Heart size={24} strokeWidth={1} />
            <p>Wishlist</p>
          </div>
          <div className="border border-gray-300 rounded-md w-max flex items-center gap-x-2 md:px-12 px-6 md:py-2 py-1 font-semibold max-md:text-sm hover:text-teal-500">
            <PiShareFatThin size={24} />
            <p>Share</p>
          </div>
        </div>
        <div className="flex  items-center gap-2">
          <SlTag size={20} className="text-gray-400 " />
          <p className="font-semibold opacity-70 max-sm:text-sm">Tags:</p>
          <div className="flex justify-between items-center  gap-2 ">
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2  justify-center  ">
              <div className=" border border-gray-300 rounded-md hover:bg-gray-200 text-sm font-semibold opacity-60 w-max px-2 py-1">
                <p>Fresh food</p>
              </div>
              <div className=" border border-gray-300 rounded-md hover:bg-gray-200 text-sm font-semibold opacity-60 w-max px-2 py-1">
                <p>Organic</p>
              </div>
              <div className=" border border-gray-300 rounded-md hover:bg-gray-200 text-sm font-semibold opacity-60 w-max px-2 py-1">
                <p>Cilantro</p>
              </div>
              <div className=" border border-gray-300 rounded-md hover:bg-gray-200 text-sm font-semibold opacity-60 w-max px-2 py-1">
                <p>Dry Food</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 hidden md:block">
          <p className="text-xl font-semibold opacity-80">Product Details:</p>
          <p className="text-sm font-semibold opacity-60 leading-6">
            Vegetables are parts of plants that are consumed by humans or other
            animals as food. the first meaning remains commonly used and is
            applied to plants collectively to ask all edible plant matter,
            including the flowers, fruits, stems, leaves, roots,...{" "}
            <span className="text-teal-400">Read More</span>
          </p>
        </div>
      </div>


      
    </div>
  );
}
