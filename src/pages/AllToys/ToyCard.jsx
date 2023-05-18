import React from "react";

const ToyCard = ({ toy }) => {
  const { name, photo, subCategory, price, availableQuantity, sellerName } =
    toy;
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
                # {subCategory}
              </span>
            </div>
          </div>
        </div>
      </td>
      <th>
        <button className="btn bg-pink-500 hover:bg-pink-600 border-none py-3 px-5">
          details
        </button>
      </th>
    </tr>
  );
};

export default ToyCard;
