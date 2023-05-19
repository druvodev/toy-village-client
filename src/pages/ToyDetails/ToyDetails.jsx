import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    name,
    photo,
    category,
    price,
    rating,
    sellerName,
    subCategory,
    detailsDescription,
  } = toy;

  return (
    <div className="grid grid-cols-7 gap-5 p-10 m-10 bg-white shadow-md">
      <div className="col-span-3">
        <img src={photo} alt="" />
      </div>
      <div className="col-span-4">
        <h3 className="text-3xl">
          {name}{" "}
          <span className="badge badge-outline badge-success">
            {subCategory}
          </span>
        </h3>
        <p>
          <span className="font-bold opacity-60">Seller:</span>{" "}
          <span>{sellerName}</span>
        </p>
        <p>
          <span className="font-bold opacity-60">Rating:</span> {rating}
        </p>
        <p>
          <span className="font-bold opacity-60">Price:</span> ${price}
        </p>
        <p className="mt-1 text-gray-600">{detailsDescription}</p>
        <div className="flex gap-5">
          <button className="px-5 py-3 btn btn-warning mt-5">
            <FaArrowLeft /> Back
          </button>
          <button className="px-5 py-3 btn bg-pink-500 hover:bg-pink-600 border-none mt-5">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
