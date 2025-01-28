import React from "react";
import first_image from "../../public/banner/img1.jpg";
import second_image from "../../public/banner/img2.jpg";
import third_image from "../../public/banner/img3.jpg";
import forth_image from "../../public/banner/img4.jpg";

export default function Banner() {
  return (
    <div  >

    <div className="w-11/12 mx-auto flex items-center justify-between gap-4 h-[20vh] mt-4 ">
      <div className="flex items-center justify-center space-x-4 w-[24vw] bg-amber-100 px-2 py-2 h-[16vh] ">
        <img className="hover:scale-120 duration-500 cursor-pointer" width={100} src={first_image} alt="" />
        <div className="flex flex-col space-y-2 opacity-90">
          <p className="text-xl font-semibold">
            Spring cleaning for home appliance
          </p>

          <p className="opacity-70">Get your clean on supplies.</p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 w-[24vw] bg-lime-100 px-2 py-2 h-[16vh] ">
        <img className="hover:scale-120 duration-500 cursor-pointer" width={100} src={second_image} alt="" />
        <div className="flex flex-col space-y-2 opacity-90">
          <p className="text-xl font-semibold">
            Your pet choice for fresh healthy food
          </p>

          <p className="opacity-70">Get your clean on supplies.</p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 w-[24vw] bg-slate-200 px-2 py-2 h-[16vh] ">
        <img className="hover:scale-120 duration-500 cursor-pointer" width={100} src={third_image} alt="" />
        <div className="flex flex-col space-y-2 opacity-90">
          <p className="text-xl font-semibold">
            Washing items with discount product
          </p>
          <p className="opacity-70">Get your clean on supplies.</p>{" "}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 w-[24vw] bg-rose-100 px-2 py-2 h-[16vh] ">
        <img className="hover:scale-120 duration-500 cursor-pointer" width={100} src={forth_image} alt="" />
        <div className="flex flex-col space-y-2 opacity-90">
          <p className="text-xl font-semibold">
            Fresh quality meet item with discount
          </p>
          <p className="opacity-70">Get your clean on supplies.</p>{" "}
        </div>
      </div>
    </div>
    </div>

  );
}
