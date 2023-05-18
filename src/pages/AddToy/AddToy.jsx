import React, { useState } from "react";

const AddToy = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get form input fields value
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const toy = {
      name: formData.get("name"),
      photo: formData.get("photo"),
      sellerMail: formData.get("sellerMail"),
      category: formData.get("category"),
      subCategory: formData.get("subCategory"),
      price: formData.get("price"),
      rating: formData.get("rating"),
      availableQuantity: formData.get("availableQuantity"),
      sellerName: formData.get("sellerName"),
      detailsDescription: formData.get("detailsDescription"),
    };

    // Add new toy in database
    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Toy Added Successfully!");
        }
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
          <div className="h-14 w-14 bg-pink-200 rounded-full flex flex-shrink-0 justify-center items-center text-pink-500 text-2xl font-mono">
            new
          </div>
          <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 className="leading-relaxed">Add New Toy</h2>
            <p className="text-sm text-gray-500 font-normal leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="photo">Photo:</label> <br />
            <input
              type="text"
              id="photo"
              name="photo"
              className="border w-full p-2 rounded-md"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-5 mt-4">
            <div>
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                className="border w-full p-2 rounded-md"
                name="category"
                required
                onChange={handleCategoryChange}
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
                className="border w-full p-2 rounded-md"
                name="availableQuantity"
                required=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-4 justify-between">
            <div>
              <label htmlFor="sellerName">Seller Name:</label>
              <input
                type="text"
                id="sellerName"
                className="border w-full p-2 rounded-md"
                name="sellerName"
                required
              />
            </div>
            <div>
              <label htmlFor="sellerMail">Seller Email:</label>
              <input
                type="email"
                id="sellerMail"
                className="border w-full p-2 rounded-md"
                name="sellerMail"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="detailsDescription">Details Description:</label>
            <br />
            <textarea
              id="detailsDescription"
              name="detailsDescription"
              className="w-full border rounded-md p-2"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="pt-4 flex items-center space-x-4 mt-7">
            <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none border border-pink-500">
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
              className="bg-pink-500 border border-pink-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
              value={"Add"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
