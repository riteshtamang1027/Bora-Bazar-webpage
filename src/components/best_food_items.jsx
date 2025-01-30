import React from "react";
import first from "../../public/best_food_items/1.webp";
import second from "../../public/best_food_items/2.webp";
import third from "../../public/best_food_items/3.webp";
import forth from "../../public/best_food_items/4.webp";


export default function Best_Food_Items() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col items-center text-center mt-24 gap-4">
        <p className="text-2xl font-semibold opacity-90">Curated collections</p>
        <p className="text-lg  opacity-70">
          We have categories the best quality grocery items
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4 mt-12">
        {Item.map((item, index) => (
          <div className="border border-gray-100 rounded-xl max-sm:space-y-2 shadow-2xs overflow-hidden hover:cursor-pointer">
            <img
              className="rounded-t-xl hover:scale-105 duration-300 w-[100vw] "
              src={item.Image}
              alt="Image"
            />
            <div className=" px-8 py-6 space-y-2 whitespace-nowrap">
              <p className="text-lg font-semibold opacity-90  hover:text-green-300">
                {item.Disc}
              </p>
              <p className="opacity-70">{item.A_text} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const Item = [
  {
    Image: first,
    Disc: "Feel the Thrust in summer anytime",
    A_text: "Your body's way of telling you that it'...",
  },
  {
    Image: second,
    Disc: "Most popular item for Fast food",
    A_text: "Tasty and spicy fast food with differ...",
  },
  {
    Image: third,
    Disc: "Authentic japanese food in real test",
    A_text: "Your body's way of telling you that it'...",
  },
  {
    Image: forth,
    Disc: "Explore our family of freshest Food",
    A_text: "Your pet's way of telling you that it'...",
  },
];
