import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ToyDetails = () => {
  const navigate = useNavigate();
  const toy = useLoaderData();
  console.log(toy);
  const {
    name,
    photo,
    price,
    rating,
    sellerName,
    subCategory,
    detailsDescription,
  } = toy;

  useEffect(() => {
    document.title = "ToyVillage | Toy Details";
  }, []);

  // Replaced Sub Category Text
  const replacedCategory = () => {
    const words = subCategory?.split("_");
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="sm:p-12">
      <div className="grid sm:grid-cols-7 gap-5 p-5 sm:p-10 bg-white shadow-md rounded-3xl">
        <div className="sm:col-span-3 relative ">
          <img className="h-96 rounded-2xl" src={photo} alt="" />
          <span className="text-3xl font-bold bg-black bg-opacity-60 text-white px-5 py-2 rounded-r-full absolute bottom-0">
            ${price}
          </span>
        </div>
        <div className="sm:col-span-4  text-gray-600">
          <h3 className="text-3xl">
            {name}{" "}
            <span className="badge badge-outline badge-success">
              {replacedCategory()}
            </span>
          </h3>
          <p className="font-bold">
            <span className="opacity-60">Seller:</span>{" "}
            <span>{sellerName}</span>
          </p>
          <p className="font-bold">
            <span className="opacity-60">Rating:</span> {rating}
          </p>
          <p className="font-bold">
            <span className="opacity-60">Price:</span> ${price}
          </p>
          <p className="mt-1">
            <span className="font-bold opacity-60">Description: </span>
            {detailsDescription}
          </p>
          <div className="flex gap-5">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-3 btn btn-warning mt-5"
            >
              <FaArrowLeft /> Back
            </button>
            <button className="px-5 py-3 btn bg-pink-500 hover:bg-pink-600 border-none mt-5">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
