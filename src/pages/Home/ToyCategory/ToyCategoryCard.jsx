import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const ToyCategoryCard = ({ toys }) => {
  const { user } = useContext(AuthContext);
  const handleDetails = () => {
    if (!user) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Oops!",
        text: "You have to log in first to view details",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-5 m-5 sm:m-10">
      {toys?.map((toy) => (
        <div
          key={toy._id}
          className="card card-compact w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img className="h-96" src={toy?.photo} alt="Shoes" />
          </figure>
          <div className="card-body space-y-0">
            <h2 className="card-title">{toy?.name}</h2>
            <p>{toy?.detailsDescription.slice(0, 40)}..</p>
            <div className="flex gap-5 pb-5">
              <span className="mt-1 flex gap-1 items-center text-lg">
                <span className="font-semibold">Ratings: </span>
                <span>{toy?.rating}</span>
              </span>
              <span className="mt-1 flex gap-1 items-center text-lg">
                <span className="font-semibold">Price: </span>
                <span>${toy?.price}</span>
              </span>
            </div>
            <div className="card-actions justify-end">
              <button onClick={handleDetails} className="btn btn-warning">
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToyCategoryCard;
