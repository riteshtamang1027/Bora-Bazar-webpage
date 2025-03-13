import { Plus } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

export default function Single_Best_Seller({ item }) {
  return (
    <div>
<NavLink  to={`/single_product/${item._id}`}>
        
        <div className="flex flex-col justify-center items-center border border-gray-300 shadow-xl  relative space-y-2 px-8 py-4  hover:shadow-2xs cursor-pointer rounded-xl mt-8 ">
    <img
      className="hover:scale-110 duration-200"
      src={item.imgurl}
      alt="image"
    />
    <p className="font-semibold">
      ${item.price} <span className="opacity-50 line-through">${item.previousPrice}</span>
    </p>
    <p className="font-semibold opacity-80 text-center">{item.name} </p>
    <p className="mt-4 text-sm opacity-60">1 each</p>
    <div className="absolute bg-emerald-500  text-white rounded-full flex items-center justify-end  right-4 max-sm:bottom-4 p-2">
    <Plus size={24} />
    </div>
    <div className="bg-emerald-500 text-white rounded-xl absolute top-4 left-4">
      <p className="text-xs font-semibold px-2 py-1">{item.sale} </p>
    </div>
  </div>  

  </NavLink>

    </div>
        
  );
}
