import React from "react";
import logo from "../../public/logo/logo.svg";
import facebook from "../../public/logo/facebook.svg";
import Meta from "../../public/logo/meta.svg";
import instagram from "../../public/logo/instagram.svg";
import twitter from "../../public/logo/twitter.svg";
import { Mail, SendHorizontal } from "lucide-react";
export default function Upper_Botton() {
  return (
    <div className="w-11/12 mx-auto mt-24 ">

      <div className="flex justify-between ">
        <div className="grid grid-rows-3 min-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-md:space-x-40">

        <div className=" space-y-8  p-4 w-full min-xl:w-[20vw] ">
          <img className="cursor-pointer" src={logo} alt="" />
          <p className="opacity-70 leading-[2] ">
            We offer high-quality foods and the best delivery service, and the
            food market you can blindly trust
          </p>
          <div className="flex gap-4">
            <img className="w-7" src={facebook} alt="Image" />
            <img className="w-7" src={instagram} alt="Image" />
            <img className="w-7" src={twitter} alt="Image" />
            <img className="w-7" src={Meta} alt="Image" />
          </div>
        </div>

        <div className=" space-y-8 p-4 w-full min-xl:w-[18vw]">
          <p className="text-xl font-semibold">About Us</p>
          <div className="opacity-70 space-y-4">
            <p>About us</p>
            <p>Contact us</p>
            <p>About team</p>
            <p>Customer Support </p>
          </div>
        </div>

        <div className=" space-y-8 p-4 w-full min-xl:w-[18vw]">
          <p className="text-xl font-semibold whitespace-nowrap">
            Our Information
          </p>
          <div className="opacity-70 space-y-4">
            <p>Privacy policy update</p>
            <p>Terms & conditions</p>
            <p>Return Policy</p>
            <p>Site Map</p>
          </div>
        </div>

        <div className=" space-y-8 p-4 w-full min-xl:w-[16vw]">
          <p className="text-xl font-semibold">Community</p>
          <div className="opacity-70 space-y-4">
            <p>Announcementsp</p>
            <p>Answer center</p>
            <p>Discussion boards</p>
            <p>Giving works</p>
          </div>
        </div>

        <div className=" space-y-8 p-4 w-full min-xl:w-[20vw]">
          <p className="text-xl font-semibold">Subscribe Now</p>
          <p className="opacity-70 leading-[2]">
            Subscribe your email for newsletter and featured news based on your
            interest
          </p>
          <div className="relative">
          <input type="text" className="border border-gray-300 rounded-xl px-8 outline-none py-3 w-full " placeholder="Write your email here" />
          <Mail className="text-gray-500 absolute left-2 top-4" size={20} strokeWidth={1.5} />
          <SendHorizontal size={20} strokeWidth={1.5} className="text-emerald-500 absolute right-2 top-4"/>
          </div>
        </div>
        </div>
      </div>
      <hr className="text-gray-300"/>

    </div>
    
  );
}
