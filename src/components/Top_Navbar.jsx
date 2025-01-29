import React from 'react';
import delivery from "../../public/logo/delivery-box.svg";

export default function Top_Navbar() {
  return (
    <div className="bg-[#44BBA4] sm:w-full hidden sm:block mx-auto">
            <div className="flex justify-between w-10/12  md:w-7/12 mx-auto p-3 opacity-90 text-xl text-white">
              <div className="flex itmes-center  gap-2">
                <img src={delivery} alt="" />
                <p className='whitespace-nowrap text-sm md:text-base' >Claim your online FREE Delivery or Shipping today! Expires in</p>
              </div>
            </div>
          </div>
  )
}
