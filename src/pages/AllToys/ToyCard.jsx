import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const {
    _id,
    name,
    photo,
    subCategory,
    price,
    availableQuantity,
    sellerName,
  } = toy;

  // Replaced Sub Category Text
  const replacedCategory = () => {
    const words = subCategory.split("_");
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
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
              <span className="badge badge-warning text-white text-lg px-3 py-3">
                {replacedCategory()}
              </span>
            </div>
          </div>
        </div>
      </td>
      <th>
        <Link
          to={`/toyDetails/${_id}`}
          className="px-5 py-2 border border-pink-500 hover:bg-pink-500 hover:text-white font-semibold hover:underline underline-offset-2 duration-200 rounded-md shadow-md"
        >
          Details
        </Link>
      </th>
    </tr>
  );
};

export default ToyCard;
