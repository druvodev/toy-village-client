import React, { useEffect, useContext, useState } from "react";
import MyToyCard from "./MyToyCard";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
  const { user, toys, setToys } = useContext(AuthContext);
  console.log(user.email);
  useEffect(() => {
    fetch(`https://toy-village-server.vercel.app/myToys/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        console.error(error);
      });

    document.title = "ToyVillage | My Toys";
  }, [user.email]);

  // Handle Sorting Methods for server side
  const handleSort = async (event) => {
    const selectedOption = event.target.value;
    let url = `https://toy-village-server.vercel.app/myToys/${user.email}`;
    if (selectedOption === "highest") {
      url += "?sort=highest";
      console.log(url);
    } else if (selectedOption === "lowest") {
      url += "?sort=lowest";
      console.log(url);
    } else {
      url = url;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {toys.length >= 2 && (
        <div className="text-right pt-10 mr-5 mb-4">
          <select
            className="select select-bordered w-fit"
            onChange={handleSort}
          >
            <option disabled defaultValue>
              Sort By Price
            </option>
            <option value="none">None</option>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
          </select>
        </div>
      )}
      <div className="overflow-x-auto w-full">
        {toys.length > 0 ? (
          <table className="table w-full">
            <tbody>
              {toys.map((toy) => (
                <MyToyCard key={toy._id} toy={toy} />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-xl text-center mt-16">
            You haven't added any toys.
          </p>
        )}
      </div>
      <div className="text-center mt-4 mb-10"></div>
    </div>
  );
};

export default MyToys;
