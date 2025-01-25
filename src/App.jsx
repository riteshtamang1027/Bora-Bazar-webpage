import React from "react";
import {
  CircleUserRound,
  Heart,
  PackageOpen,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
export default function App() {
  return (
    <div>
      <div className="bg-green-400">
        <div className="flex justify-between w-9/12 mx-auto p-3 opacity-90 text-xl text-white">
          <div className="flex itmes-center  gap-2">
            <PackageOpen size={30} className="" />
            <p>Claim your online FREE Delivery or Shipping today! Expires in</p>
          </div>

          <input type="time" />
        </div>
      </div>
      <div className="bg-white ">
        <div className="flex justify-between items-center p-6 w-11/12 mx-auto ">
          <div className="flex items-center gap-10">
            <div className="flex gap-2 text-2xl font-bold">
              <ShoppingCart size={30} />
              <h1>BoraBazar</h1>
            </div>
            <p>Demos</p>
            <p>Categories</p>
            <p>Dietary</p>
            <p>Search</p>
            <p>Shops</p>
            <p>Pages</p>
          </div>

          <div className="flex items-center gap-10 font-medium opacity-70">
            <div className="flex gap-2">
              <ShoppingBag size={30} />
              <p>Cart</p>
            </div>

            <div className="flex gap-2 items-center">
              <CircleUserRound size={30} />
              <p>Sign In</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="flex flex-col p-20 items-center gap-7 w-8/12 mx-auto text-center">
          <h1 className="text-6xl font-bold m-10 text-green-950 opacity-85">
            Healthy vegetable that you deserve to eat fresh
          </h1>
          <p className="text-xl w-8/12 opacity-80">
            We source and sell the very best beef, lamb and pork, sourced with
            the greatest care from farmer.
          </p>
          <div className=" w-10/12 mx-auto  ">
            <input className="p-4 px-56   rounded-lg border-2 border-gray-500 outline-none focus:border-green-600    flex
            text-left " type="search" placeholder="Search Here" />
          </div>
        </div>
      </div>
    </div>
  );
}
