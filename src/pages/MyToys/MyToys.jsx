import React, { useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import MyToyCard from "./MyToyCard";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
  const toyCollection = useLoaderData();
  const { toys, setToys } = useContext(AuthContext);

  useEffect(() => {
    document.title = "ToyVillage | My Toys";
  }, []);

  useEffect(() => {
    setToys(toyCollection);
  }, [toyCollection]);
  console.log(toys);

  return (
    <div>
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
