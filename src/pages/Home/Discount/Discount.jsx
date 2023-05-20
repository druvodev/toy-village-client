import React from "react";

const Discount = () => {
  return (
    <div className="h-[500px] sm:h-[700px] flex sm:items-center  bg-cover bg-center bg-[url('https://media.istockphoto.com/id/499661682/photo/yellow-school-bus-toy-model-in-christmas-theme.jpg?s=612x612&w=0&k=20&c=pCVZO1Z0lhx23JMbs4nYMPE-LtoKQAwDkvKqwVBLMyA=')] my-12">
      <div className="h-2/3 sm:h-full bg-opacity-70 bg-white rounded-b-full sm:rounded-r-full flex sm:items-center  w-full sm:w-1/2 shadow-md shadow-pink-200 sm:shrink-0">
        <div className="py-10 text-center mx-auto">
          <div className="bg-yellow-500 px-5 sm:px-10 py-3 rounded-full">
            <p className="text-2xl sm:text-3xl text-left font-bold -mt-7">
              UpTo
            </p>
            <p className="text-3xl sm:text-5xl font-bold text-white">65% OFF</p>
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
  );
};

export default Discount;
