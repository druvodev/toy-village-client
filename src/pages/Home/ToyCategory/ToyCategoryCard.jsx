import React from "react";

const ToyCategoryCard = ({ toys }) => {
  return (
    <div className="flex flex-wrap gap-5 m-5 sm:m-10">
      {toys?.map((toy) => (
        <div
          key={toy._id}
          className="card card-compact w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img src={toy?.photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{toy?.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToyCategoryCard;
