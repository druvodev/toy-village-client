import React, { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

const Discount = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="">
      <div className="h-[500px] sm:h-[700px] flex sm:items-center  bg-cover bg-center bg-[url('https://media.istockphoto.com/id/499661682/photo/yellow-school-bus-toy-model-in-christmas-theme.jpg?s=612x612&w=0&k=20&c=pCVZO1Z0lhx23JMbs4nYMPE-LtoKQAwDkvKqwVBLMyA=')] mt-12 mb-5">
        <div className="h-2/3 sm:h-full bg-opacity-70 bg-white rounded-b-full sm:rounded-bl-none sm:rounded-r-full flex sm:items-center  w-full sm:w-1/2 shadow-md shadow-pink-200 sm:shadow-none">
          <div className="py-10 text-center mx-auto">
            <div className="bg-yellow-500 px-5 sm:px-10 py-3 rounded-full">
              <p className="text-2xl sm:text-3xl text-left font-bold -mt-7">
                UpTo
              </p>
              <p className="text-3xl sm:text-5xl font-bold text-white">
                65% OFF
              </p>
            </div>
            <p className="text-4xl sm:text-6xl font-bold text-pink-500 mt-3">
              Festival
            </p>
            <p className="text-4xl sm:text-5xl font-semibold">Feast</p>

            <p className="border border-pink-500 hover:bg-white rounded-full sm:text-lg px-5 py-1 mt-5 cursor-pointer">
              Coupon Code -{" "}
              <span className="font-semibold text-pink-500">DHI65ER65X</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap gap-5 px-5 sm:px-10 sm:-mt-28">
        <div
          className="h-80 w-full sm:w-1/3 bg-cover bg-center bg-[url('https://momlovesbest.com/wp-content/uploads/2022/10/Vebo-Motorized-Fire-Truck.webp')] flex items-center justify-center rounded-2xl shadow-md"
          data-aos="fade-up-right"
        >
          <div className="bg-white bg-opacity-60 text-center p-12 rounded-3xl w-fit shadow-md">
            <p className="text-2xl font-semibold">Fire Car Toys</p>
            <p className="text-5xl font-bold text-cyan-500">50% OFF</p>
          </div>
        </div>
        <div
          className="h-80 w-full sm:w-1/3 bg-cover bg-center bg-[url('https://www.lego.com/cdn/cs/set/assets/bltdf3259653edcde14/09.1_Content-Block-Mixed-Mobile_02.jpg?fit=crop&format=jpg&quality=80&width=375&height=260&dpr=1')] flex items-center justify-center rounded-2xl shadow-md"
          data-aos="fade-up"
        >
          <div className="bg-white bg-opacity-70 shadow-md text-center p-12 rounded-3xl w-fit">
            <p className="text-2xl font-semibold">Racing Car Toys</p>
            <p className="text-5xl font-bold text-cyan-500">45% OFF</p>
          </div>
        </div>
        <div
          className="h-80 w-full sm:w-1/3 bg-cover bg-center bg-[url('https://media1.popsugar-assets.com/files/thumbor/FgbsLpBkzTLHT4eeKKI8b_DjNAo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2022/12/14/928/n/24155406/070eca99639a3d2ca24558.50538143_/i/Gifts-Kids-Obsessed-Trucks.jpg')] flex items-center justify-center rounded-2xl shadow-md"
          data-aos="fade-up-left"
        >
          <div className="bg-white bg-opacity-70 shadow-md text-center p-12 rounded-3xl w-fit">
            <p className="text-2xl font-semibold">Truck Toys</p>
            <p className="text-5xl font-bold text-cyan-500">55% OFF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
