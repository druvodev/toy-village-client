import React, { useEffect, useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyToyCard from "./MyToyCard";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
  const toyCollection = useLoaderData();
  const { user, toys, setToys } = useContext(AuthContext);

  // Handle Sorting Methods for server side
  const handleSort = async (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "highest") {
      fetch(
        `https://toy-village-server.vercel.app/myToys/${user.email}?sort=highest`
      )
        .then((res) => res.json())
        .then((data) => setToys(data));
    } else if (selectedOption === "lowest") {
      fetch(
        `https://toy-village-server.vercel.app/myToys/${user.email}?sort=lowest`
      )
        .then((res) => res.json())
        .then((data) => setToys(data));
    } else {
      fetch(`https://toy-village-server.vercel.app/myToys/${user.email}`)
        .then((res) => res.json())
        .then((data) => setToys(data));
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
