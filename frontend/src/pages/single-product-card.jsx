import React from "react";
import img1 from "../../public/popular_grocery/1.webp";
import img2 from "../../public/popular_grocery/2.webp";
import img3 from "../../public/popular_grocery/3.webp";
import img4 from "../../public/popular_grocery/4.webp";
import img6 from "../../public/popular_grocery/6.webp";
import img7 from "../../public/popular_grocery/7.webp";
import img8 from "../../public/popular_grocery/8.webp";
import img9 from "../../public/popular_grocery/9.webp";
import img10 from "../../public/popular_grocery/10.webp";
import img11 from "../../public/popular_grocery/11.webp";
import img12 from "../../public/popular_grocery/12.webp";
import img13 from "../../public/popular_grocery/13.webp";
import img14 from "../../public/popular_grocery/14.webp";
import img15 from "../../public/popular_grocery/15.webp";
import { Eye, Plus } from "lucide-react";
import Single_Best_Seller from "./single-best-seller";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function Single_Product_Card() {
  return (
    <div className="w-11/12 mx-auto px-6 mt-24">
      <p className="text-2xl font-semibold opacity-80">Related products</p>
      <div className="flex gap-x-4 mt-4">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          pagination={
            {
              //   clickable: true,
            }
          }
          modules={[Pagination]}
          className="mySwiper"
        >
          {Items.map((item, index) => (
            <SwiperSlide key={index}>
              <Single_Best_Seller item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const Items = [
  {
    Image: img1,
    Now_Price: "$2.64",
    I_Price: "$2.72",
    About: "Fresh Green Leaf Lettuce",
    Per: "1 each",
    Sale: "ON SALE",
    Icon: <Plus size={24} />,
  },
  {
    Image: img2,
    Now_Price: "$2.50",
    I_Price: "$2.74",
    About: "Leafy Romaine Mixed Lettuce",
    Per: "1 each",
    Sale: "ON SALE",
    Icon: <Plus size={24} />,
  },
  {
    Image: img3,
    Now_Price: "$25.00 ",
    I_Price: " $40.00",
    About: "Fresh Express Iceberg Garden Salad Blend",
    Per: "1 each",
    Sale: "DISCOUNT",
    Icon: <Eye size={24} />,
  },
  {
    Image: img4,
    Now_Price: "$1.50",
    I_Price: "",
    About: "Organic Girl Lettuce",
    Per: "1 each",
    Sale: "ON SALE",
    Icon: <Plus size={24} />,
  },
  {
    Image: img9,
    Now_Price: "$2.64",
    I_Price: "$2.72",
    About: "Lay's Kettle Cooked Mesquite Potato Chips",
    Per: "1 each",
    Sale: "ON SALE",
    Icon: <Plus size={24} />,
  },
  {
    Image: img6,
    Now_Price: "$8.02",
    I_Price: "$7.72",
    About: "Fresh Organic Broccoli",
    Per: "1 each",
    Sale: "ON SALE",
    Icon: <Eye size={24} />,
  },
  {
    Image: img7,
    Now_Price: "$5.00",
    I_Price: "$4.00",
    About: "Great Value Tortilla Chips, Cantina Style",
    Per: "1 each",
    Sale: "DISCOUNT",
    Icon: <Plus size={24} />,
  },
  {
    Image: img8,
    Now_Price: "$6.64",
    I_Price: "$6.98",
    About: "Frito Lay's Family Fun Mix Snacks",
    Per: "1 each",
    Sale: "ON SALE",
    Icon: <Plus size={24} />,
  },
  {
    Image: img10,
    Now_Price: "$5.64",
    I_Price: "$5.72",
    About: "Lay's Bar-B-Que Potato Chips",
    Per: "1 each",
    Sale: "ON SALE",
    Icon: <Eye size={24} />,
  },
  {
    Image: img11,
    Now_Price: "$9.64",
    I_Price: "$15.72",
    About: "Chester's Fries Flamen Hot Corn Potato Snacks",
    Per: "1 each",
    Sale: "DISCOUNT",
    Icon: <Plus size={24} />,
  },
  {
    Image: img12,
    Now_Price: "$2.64",
    I_Price: "$2.72",
    About: "Organic Green Cabbage",
    Per: "1 each",
    Sale: "ON SALE",
    Icon: <Eye size={24} />,
  },
  {
    Image: img13,
    Now_Price: "$2.64",
    I_Price: "$2.72",
    About: "Gourmet Garden™ Lightly Dried Cilantro",
    Per: "1 each",
    Sale: "ON SALE",
    Icon: <Eye size={24} />,
  },
  {
    Image: img14,
    Now_Price: "$40.64",
    I_Price: "$50.72",
    About: "Calavo Fresh Avocados",
    Per: "1 each",
    Sale: "DISCOUNT",
    Icon: <Eye size={24} />,
  },
  {
    Image: img15,
    Now_Price: "$3.99",
    I_Price: "",
    About: "Freshness Guaranteed Mango Spears",
    Per: "1 each",
    Sale: "DISCOUNT",
    Icon: <Plus size={24} />,
  },
];
