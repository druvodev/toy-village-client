import { useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  const images = [
    "https://motherscare.store/pub/media/catalog/product/cache/51c7d23dcdba0ae42e9e5260f1aaece4/u/n/untitled-1889fe8fa.jpg",
    "https://www.hape.com/img/800/E3475_3.jpg",
    "https://m.media-amazon.com/images/I/81UJ0WFhGML._AC_SX679_.jpg",
    "https://cdn.shopify.com/s/files/1/0081/0860/5504/products/2000x2000_3_1024x1024.jpg?v=1584950951",
    "https://cdn.shopify.com/s/files/1/0501/8927/1235/products/710VOGuCF3L._AC_SL1500_grande.jpg?v=1639475998",
    "https://cdn.shopify.com/s/files/1/0088/7986/5907/products/Lego-10986-Duplo-Family-House-on-Wheels-Toy-With-Car-Construction-Lego-Toycra-9_700x700.webp?v=1681467930",
  ];
  return (
    <div className="bg-pink-300 py-5 sm:py-12 px-5 sm:px-10 mt-5 sm:mt-12">
      <h2 className="text-3xl sm:text-5xl font-bold mb-5 text-center">
        Moments Gallery
      </h2>
      <div className="grid sm:grid-cols-8 gap-2">
        <div className="sm:col-span-3">
          <div
            className={`w-full h-96 sm:h-full bg-cover bg-center bg-[url('https://cdn.shopify.com/s/files/1/0088/7986/5907/products/Lego-10986-Duplo-Family-House-on-Wheels-Toy-With-Car-Construction-Lego-Toycra-8_700x700.webp?v=1681467929')] relative inline-block transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-75"
            }`}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white justify-center items-center flex ${
                isHovered ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300`}
            >
              <div className="text-center">
                <button className="py-2 px-3 border text-2xl font-semibold">
                  Buy Now
                </button>
                <p className="text-lg mt-3">
                  We make your children happier with the best toys
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {images.map((img, index) => (
            <GalleryCard key={index} image={img}></GalleryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
