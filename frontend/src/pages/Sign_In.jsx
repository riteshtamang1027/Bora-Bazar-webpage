import React, { useEffect, useState } from "react";
import login from "../../public/signin/login.webp";
import logo from "../../public/logo/logo.svg";
import { Eye, X } from "lucide-react";

export default function Sign_In({ remove }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <div>
      <div onClick={remove} className=" fixed top-0 left-0  right-0 bottom-0 ">
        {" "}
      </div>

      <div className="top-36 fixed bg-white w-10/12 mx-auto  z-50 left-28 shadow-2xl rounded-md ">
        <div className="flex justify-between  border border-gray-300 relative rounded-md  pr-12 shadow-2xl  ">
          <X
            onClick={remove}
            className="absolute right-4 top-2 text-gray-400  hover:text-gray-700 hover:scale-120 duration-200 cursor-pointer"
          />
          <img
            className="rounded-l-md h-[70vh] w-[50vw] object-cover "
            src={login}
            alt="Image"
          />
          <div className="space-y-4 mt-4">
            <img src={logo} alt="Image" />
            <p className="text-2xl font-semibold  opacity-90">Welcome Back!</p>
            <p className="opacity-60">
              Don’t have an account?{" "}
              <span className="text-green-400">Create Account</span>{" "}
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold opacity-70">Email Address</p>
              <input
                type="text"
                className="border border-gray-300  w-[20vw] h-10 px-4 rounded-md focus:border-2 focus:border-green-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold opacity-70">Password</p>
              <div className=" relative">
                <input
                  type="password"
                  className="border border-gray-300  w-[20vw] h-10 px-4 rounded-md focus:border-2 focus:border-green-500 outline-none"
                />
                <Eye
                  className="absolute top-2 right-2 opacity-50"
                  size={20}
                  strokeWidth={1.2}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <p className="text-gray-400 hover:text-black cursor-pointer">
                Forgot password?
              </p>
            </div>
            <button className="border border-gray-300  w-[20vw] h-10 px-4 rounded-md focus:border-2 focus:border-green-500 outline-none bg-emerald-600 opacity-75 hover:bg-emerald-500 text-white cursor-pointer">
              Sign In
            </button>
            <p className="text-sm opacity-65 text-center">or continue with</p>
          </div>
        </div>
      </div>
    </div>
  );
}
