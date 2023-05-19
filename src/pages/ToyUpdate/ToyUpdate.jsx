import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ToyUpdate = () => {
  const oldInfo = useLoaderData();
  const {
    _id,
    name,
    photo,
    price,
    rating,
    availableQuantity,
    detailsDescription,
  } = oldInfo;
  const [selectedCategory, setSelectedCategory] = useState("");
  const { user, toys, setToys } = useContext(AuthContext);
  console.log(toys);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const updatedToy = {
      _id: _id,
      name: formData.get("name"),
      photo: formData.get("photo"),
      sellerMail: user?.email,
      category: formData.get("category"),
      subCategory: formData.get("subCategory"),
      price: formData.get("price"),
      rating: formData.get("rating"),
      availableQuantity: formData.get("availableQuantity"),
      sellerName: user?.displayName,
      detailsDescription: formData.get("detailsDescription"),
    };

    // Updated Toy Details
    fetch(`http://localhost:5000/toyDetails/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = toys.filter((toy) => toy._id !== _id);
          const updatedToys = [updatedToy, ...remaining];
          setToys(updatedToys);
          console.log(updatedToy);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your toy info has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Failed to update toy info",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error updating toy:", error);
        alert("An error occurred while updating the toy");
      });
  };

  // Set dynamic subcategory options for category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const renderSubcategoryOptions = () => {
    if (selectedCategory === "sports_car") {
      return (
        <>
          <option value="supercar">Supercar</option>
          <option value="convertible">Convertible</option>
          <option value="racing_car">Racing Car</option>
        </>
      );
    }
    if (selectedCategory === "truck") {
      return (
        <>
          <option value="pickup_truck">Pickup Truck</option>
          <option value="heavy_duty_truck">Heavy-Duty Truck</option>
          <option value="delivery_truck">Delivery Truck</option>
        </>
      );
    }

    if (selectedCategory === "fire_car") {
      return (
        <>
          <option value="fire_engine">Fire Engine</option>
          <option value="fire_truck">Fire Truck</option>
          <option value="aerial_fire_apparatus">Aerial Fire Apparatus</option>
        </>
      );
    }

    return null;
  };

  return (
    <div className="grid justify-center bg-gray-100">
      <div className="bg-white max-w-3xl p-10 my-10 rounded-3xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-16 w-16 bg-amber-200 rounded-full flex flex-shrink-0 justify-center items-center text-amber-500 text-2xl font-mono">
            edit
          </div>
          <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 className="leading-relaxed">Update Toy Information</h2>
            <p className="text-sm text-gray-500 font-normal leading-relaxed">
              We design toys not just for kids but with kids
            </p>
          </div>
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mt-7">
            <label htmlFor="toyName">Name:</label>
            <br />
            <input
              className="border w-full p-2 rounded-md"
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              placeholder="Toy Name"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="photo">Photo URL:</label> <br />
            <input
              type="text"
              id="photo"
              name="photo"
              defaultValue={photo}
              placeholder="https://www.example.com/image.jpg"
              className="border w-full p-2 rounded-md"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-5 mt-4">
            <div>
              <label htmlFor="category">Category:</label>
              <select
                onChange={handleCategoryChange}
                id="category"
                className="border w-full p-2 rounded-md"
                name="category"
                required
              >
                <option value="">Select a category</option>
                <option value="sports_car">Sports Car</option>
                <option value="truck">Truck</option>
                <option value="fire_car">Fire Car</option>
              </select>
            </div>
            <div>
              <label htmlFor="subCategory">Subcategory:</label>
              <select
                id="subCategory"
                className="border w-full p-2 rounded-md"
                name="subCategory"
                required
              >
                {selectedCategory ? (
                  <>
                    <option value="">Select a subcategory</option>
                    {renderSubcategoryOptions()}
                  </>
                ) : (
                  <option value="">At first select category</option>
                )}
              </select>
            </div>
          </div>

          <div className="flex gap-5 mt-4 justify-between">
            <div>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                defaultValue={price}
                placeholder="$"
                className="border w-full p-2 rounded-md"
                name="price"
                step="0.01"
                required
              />
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                id="rating"
                defaultValue={rating}
                placeholder="5.0"
                className="border w-full p-2 rounded-md"
                name="rating"
                min={0}
                max={5}
                step="0.1"
                required=""
              />
            </div>
            <div>
              <label htmlFor="availableQuantity">Available Quantity:</label>
              <input
                type="number"
                id="availableQuantity"
                defaultValue={availableQuantity}
                placeholder="100"
                className="border w-full p-2 rounded-md"
                name="availableQuantity"
                required=""
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="detailsDescription">Details Description:</label>
            <br />
            <textarea
              id="detailsDescription"
              placeholder="Type Toy Details..."
              name="detailsDescription"
              className="w-full border rounded-md p-2"
              required=""
              defaultValue={detailsDescription}
            />
          </div>
          <div className="grid grid-cols-2 gap-5 mt-4 justify-between">
            <div>
              <label htmlFor="sellerName">Seller Name:</label>
              <input
                type="text"
                id="sellerName"
                className="border w-full p-2 rounded-md"
                name="sellerName"
                defaultValue={user?.displayName}
                disabled
              />
            </div>
            <div>
              <label htmlFor="sellerMail">Seller Email:</label>
              <input
                type="email"
                id="sellerMail"
                className="border w-full p-2 rounded-md"
                name="sellerMail"
                defaultValue={user?.email}
                disabled
              />
            </div>
          </div>

          <div className="pt-4 flex items-center space-x-4 mt-7">
            <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none border border-amber-500">
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>{" "}
              Cancel
            </button>
            <input
              type="submit"
              className="bg-amber-500 border border-amber-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
              value={"Update"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ToyUpdate;
