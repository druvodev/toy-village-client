import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const AllToys = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayToys, setDisplayToys] = useState([]);
  const allToys = useLoaderData();

  useEffect(() => {
    document.title = "ToyVillage || All Toys";
  }, []);

  useEffect(() => {
    // Filter toys based on search query
    const filteredToys = allToys.filter((toy) =>
      toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setDisplayToys(filteredToys.slice(0, 4));
  }, [allToys, searchQuery]);

  const handleSearch = () => {
    setLoading(true);
    // Perform search
    fetch(`https://toy-village-server.vercel.app/toys?search=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setDisplayToys(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error searching for toys:", error);
        setLoading(false);
      });
  };

  // Toggle display of toys
  const handleDisplayToys = () => {
    if (displayToys.length > 4) {
      setDisplayToys(displayToys.slice(0, 4));
    } else {
      setDisplayToys(allToys);
    }
  };

  return (
    <div>
      <div className="py-10 text-center bg-pink-100">
        <input
          type="text"
          className="border border-pink-500 px-3 py-3 rounded-l-2xl w-96 font-semibold"
          placeholder="Search.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-pink-500 px-10 py-3 text-lg font-bold text-white tracking-wider rounded-r-2xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {loading ? (
        <p>Loading..</p>
      ) : displayToys.length === 0 ? (
        <p className="text-center text-lg my-10 ">No matching toys found!</p>
      ) : (
        <>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <tbody>
                {displayToys.map((toy) => (
                  <ToyCard key={toy._id} toy={toy} />
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
        </>
      )}
    </div>
  );
};

export default AllToys;
