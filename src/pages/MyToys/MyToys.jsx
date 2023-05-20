import React, { useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import MyToyCard from "./MyToyCard";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
  const toyCollection = useLoaderData();

  const { toys, setToys } = useContext(AuthContext);

  // Handle Sorting Methods
  const handleSort = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "highest") {
      const sortedToys = [...toys].sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      setToys(sortedToys);
    } else if (selectedOption === "lowest") {
      const sortedToys = [...toys].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      setToys(sortedToys);
    } else {
      setToys(toyCollection);
    }
  };

  useEffect(() => {
    document.title = "ToyVillage | My Toys";
  }, []);

  useEffect(() => {
    setToys(toyCollection);
  }, [toyCollection]);

  return (
    <div>
      <div className="text-right pt-10 mr-5 mb-4">
        <select className="select select-bordered w-fit" onChange={handleSort}>
          <option disabled defaultValue>
            Sort By Price
          </option>
          <option value="none">None</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {toys.map((toy) => (
              <MyToyCard key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4 mb-10"></div>
    </div>
  );
};

export default MyToys;
