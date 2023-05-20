import React from "react";
import { FaRegCopy } from "react-icons/fa";

const Discount = () => {
  return (
    <div className="h-[500px] flex items-center  bg-cover bg-center bg-[url('https://media.istockphoto.com/id/499661682/photo/yellow-school-bus-toy-model-in-christmas-theme.jpg?s=612x612&w=0&k=20&c=pCVZO1Z0lhx23JMbs4nYMPE-LtoKQAwDkvKqwVBLMyA=')] mt-12">
      <div className="h-full bg-opacity-70 bg-white rounded-r-full flex items-center">
        <div className="px-40 py-10 text-center">
          <div className="bg-yellow-500 px-10 py-3 rounded-full">
            <p className="text-3xl text-left font-bold -mt-7">UpTo</p>
            <p className="text-5xl font-bold text-white">65% OFF</p>
          </div>
          <p className="text-6xl font-bold text-pink-500 mt-3">Festival</p>
          <p className="text-5xl font-semibold">Feast</p>

          <p className="border border-pink-500 hover:bg-white rounded-full text-lg px-5 py-1 mt-5 cursor-pointer">
            Coupon Code -{" "}
            <span className="font-semibold text-pink-500">DHI65ER65X</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
