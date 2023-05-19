import React from "react";
import { Link } from "react-router-dom";

const MyToyCard = ({ toy }) => {
  const {
    _id,
    name,
    photo,
    subCategory,
    price,
    availableQuantity,
    sellerName,
  } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-48 h-48">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-2xl">{name}</div>
            <div className="opacity-90">
              <p>
                <span className="font-semibold">Price:</span> ${price}
              </p>
              <p>
                <span className="font-semibold">Quantity:</span>{" "}
                {availableQuantity}
              </p>
              <p>
                <span className="font-semibold">Seller:</span> {sellerName}
              </p>
            </div>
            <div className="mt-3">
              <span className="badge badge-success text-white text-lg px-3 py-3">
                # {subCategory}
              </span>
            </div>
          </div>
        </div>
      </td>
      <th>
        <Link
          to={`/toyUpdate/${_id}`}
          className="px-5 py-2 btn btn-warning border hover:text-white font-semibold hover:underline underline-offset-2 duration-200 rounded-md shadow-md"
        >
          Update
        </Link>
      </th>
      <th>
        <button className="px-5 py-2 btn border-none border-red-500 bg-red-500 hover:bg-red-600 hover:text-white font-semibold hover:underline underline-offset-2 duration-200 rounded-md shadow-md">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyToyCard;
