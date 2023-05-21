import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const MyToyCard = ({ toy }) => {
  const { toys, setToys } = useContext(AuthContext);
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

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert toy!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-village-server.vercel.app/toyDetails/${_id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("toyUserToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== _id);
              setToys(remaining);
            }
          });
      }
    });
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded-xl w-48 h-48">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-xl sm:text-2xl">{name}</div>
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
                {replacedCategory()}
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
        <button
          onClick={handleDelete}
          className="px-5 py-2 btn border-none border-red-500 bg-red-500 hover:bg-red-600 hover:text-white font-semibold hover:underline underline-offset-2 duration-200 rounded-md shadow-md"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyToyCard;
