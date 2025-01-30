import React from "react";
import img1 from "../../public/delevery/app-thumbnail.webp";
import logo1 from "../../public/delevery/app-store.webp";
import logo2 from "../../public/delevery/play-store.webp";

export default function Online_Shop() {
  return (
    <>
      <div className="bg-gray-100 relative lg:h-[81vh] h-[60vh] min-sm:h-[80vh] xl:h-[70vh] mt-24 ">
       
        <div className="flex  justify-between md:w-10/12 w-11/12 mx-auto   ">
          <div className="  space-y-12 xl:space-y-16 lg:space-y-4 mt-16 lg:leading-8 leading-12 ">
            <p className="xl:text-5xl text-5xl lg:text-4xl font-semibold opacity-85 leading-12">
              Make your online shop easier with our mobile app
            </p>
            <p className=" xl:text-xl text-xl lg:text-lg opacity-70">
              BoroBazar makes online grocery shopping fast and easy. Get
              groceries delivered and order the best of seasonal farm fresh
              food.
            </p>
            <div className="flex gap-4 cursor-pointer">
              <img
                className=" rounded-xl hover:bg-gray-800 "
                src={logo1}
                alt=""
              />
              <img
                className=" rounded-xl hover:bg-gray-800 "
                src={logo2}
                alt=""
              />
            </div>
          </div>
          <img className="hidden lg:block" src={img1} alt="Image" />
        </div>
      </div>
    </>
  );
}
