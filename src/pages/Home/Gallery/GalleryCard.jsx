/* eslint-disable react/prop-types */
import { useState } from "react";

const GalleryCard = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative inline-block transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-75"
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img src={image} alt="" className="w-full h-auto" />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 text-white justify-center items-center flex ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <div className="text-center m-1">
          <button className="py-2 px-3 border sm:text-2xl font-semibold">
            Buy Now
          </button>
          <p className="sm:text-lg mt-3">
            We make your children happier with the best toys
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
