import React, { useEffect, useState } from "react";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Food_Items() {
  const fetchAllCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4007/categories");
      setCategory(response.data.data);
    } catch (error) {
      console.log("Something went wrong.");
    }
  };
  const [getallCategory, setCategory] = useState();
  console.log(getallCategory);

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <div className="mt-24">
      <div className="w-11/12 mx-auto ">
        <div className="grid items-center  text-center space-y-4">
          <p className="text-2xl font-semibold opacity-90">
            What food you love to order
          </p>
          <p className="opacity-70">
            Here order your favorite foods from different categories
          </p>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 7,
            },
            1536: {
              slidesPerView: 8,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper h-[40vh]"
        >
          {getallCategory?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center mt-16 space-y-2">
                <div className=" rounded-full w-max bg-slate-100 ">
                  <img className="" width={150} src={item.imgurl} alt="image" />
                </div>
                <p className=" opacity-90 font-medium text-[16px]">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
