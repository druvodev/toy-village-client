import { useEffect } from "react";
import Banner from "./Banner";
import Gallery from "./Gallery/Gallery";
import ToyCategory from "./ToyCategory/ToyCategory";

const Home = () => {
  useEffect(() => {
    document.title = "ToyVillage || Home";
  }, []);
  return (
    <div className="">
      <Banner></Banner>
      <Gallery></Gallery>
      <ToyCategory></ToyCategory>
    </div>
  );
};

export default Home;
