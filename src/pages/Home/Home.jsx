import { useEffect } from "react";
import Banner from "./Banner";
import Gallery from "./Gallery/Gallery";
import ToyCategory from "./ToyCategory/ToyCategory";
import Discount from "./Discount/Discount";

const Home = () => {
  useEffect(() => {
    document.title = "ToyVillage || Home";
  }, []);
  return (
    <div className="">
      <Banner></Banner>
      <Gallery></Gallery>
      <Discount></Discount>
      <ToyCategory></ToyCategory>
    </div>
  );
};

export default Home;
