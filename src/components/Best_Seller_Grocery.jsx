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

export default function Best_Seller_Grocery() {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-24 ">
        <div className="grid items-center  text-center space-y-4">
          <p className="text-2xl font-semibold opacity-90">
            Best seller grocery near you
          </p>
          <p className="opacity-70">
            We provide best quality & fresh grocery items near your location
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4">
          {Items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center border border-gray-100 relative space-y-2 px-8 py-4  hover:shadow-2xs cursor-pointer rounded-xl mt-8"
            >
              <img className="hover:scale-110 duration-200" src={item.Image} alt="image" />
              <p className="font-semibold">
                {item.Now_Price}{" "}
                <span className="opacity-50">{item.I_Price}</span>
              </p>
              <p className="font-semibold opacity-80">{item.About} </p>
              <p className="mt-4 text-sm opacity-60">1 each</p>
              <div className="absolute bg-green-400  text-white rounded-full flex items-center justify-end  right-4 p-2">
                {item.Icon}
              </div>
              <div className="bg-green-400 text-white rounded-xl absolute top-4 left-4">
                <p className="text-xs font-semibold px-2 py-1">{item.Sale} </p>
              </div>
            </div>
          ))}
        </div>
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
    Icon: <Eye size={24}/>,
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
    Icon: <Eye size={24}/>,
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
    Icon: <Eye size={24}/>,
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
    Icon: <Eye size={24}/>,
  },
  {
    Image: img13,
    Now_Price: "$2.64",
    I_Price: "$2.72",
    About: "Gourmet Garden™ Lightly Dried Cilantro",
    Per: "1 each",
    Sale: "ON SALE",
    Icon: <Eye size={24}/>,
  },
  {
    Image: img14,
    Now_Price: "$40.64",
    I_Price: "$50.72",
    About: "Calavo Fresh Avocados",
    Per: "1 each",
    Sale: "DISCOUNT",
    Icon: <Eye size={24}/>,
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
