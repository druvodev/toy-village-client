import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [displayToys, setDisplayToys] = useState([]);
  const allToys = useLoaderData();

  // Initially showed 8 toys
  useEffect(() => {
    setDisplayToys(allToys.slice(0, 4));
  }, [allToys]);

  // When toggle arrow button then showed 8 or all toys
  const handleDisplayToys = () => {
    if (displayToys.length > 4) {
      setDisplayToys(allToys.slice(0, 4));
    } else {
      setDisplayToys(allToys);
    }
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {displayToys.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4 mb-10">
        <button
          onClick={handleDisplayToys}
          className="text-4xl p-2 text-slate-500 bg-gray-200 rounded-full"
        >
          {displayToys.length > 4 ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
    </div>
  );
};

export default AllToys;
