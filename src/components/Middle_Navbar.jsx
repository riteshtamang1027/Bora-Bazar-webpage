import React from "react";
import { CircleUserRound, Menu, ShoppingBag } from "lucide-react";
import logo from "../../public/logo/logo.svg";

export default function Middle_Navbar() {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center p-4 lg:p-6 w-11/12 mx-auto ">
        <div className="flex items-center gap-2 lg:gap-8 xl:gap-12">
          <img className="cursor-pointer" src={logo} alt="" />

          <div className="hidden md:block">
            <div className="flex  items-center gap-4 lg:gap-8 xl:gap-12">
              <p>Demos</p>
              <p>Categories</p>
              <p>Dietary</p>
              <p>Search</p>
              <p>Shops</p>
              <p>Pages</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 xl:gap-8 font-medium opacity-70">
          <Menu className="block md:hidden" />
          <div className="flex gap-1 xl:gap-2  cursor-pointer">
            <ShoppingBag size={25} strokeWidth={1} />
            <p className="hidden md:block">Cart</p>
          </div>

          <div className="flex gap-1 xl:gap-2 items-center">
            <CircleUserRound size={25} strokeWidth={1} />
            <p className="whitespace-nowrap hidden md:block">Sign In</p>
          </div>
        </div>
      </div>
    </div>
  );
}
