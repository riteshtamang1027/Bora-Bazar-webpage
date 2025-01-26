import React from "react";
import { CircleUserRound, ShoppingBag } from "lucide-react";
import logo from "../../public/logo.svg";

export default function Middle_Navbar() {
  return (
    
      <div className="bg-white">
        <div className="flex justify-between items-center p-6 w-11/12 mx-auto ">
          <div className="flex items-center gap-12">
            <img src={logo} alt="" />
            <p>Demos</p>
            <p>Categories</p>
            <p>Dietary</p>
            <p>Search</p>
            <p>Shops</p>
            <p>Pages</p>
          </div>

          <div className="flex items-center gap-8 font-medium opacity-70">
            <div className="flex gap-2">
              <ShoppingBag size={25}  strokeWidth={1} />
              <p>Cart</p>
            </div>

            <div className="flex gap-2 items-center">
              <CircleUserRound size={25}  strokeWidth={1}/>
              <p>Sign In</p>
            </div>
          </div>
        </div>
      </div>
    
  );
}
