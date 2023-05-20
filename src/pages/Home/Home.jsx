import { useEffect } from "react";
import Banner from "./Banner";
import Gallery from "./Gallery/Gallery";
import ToyCategory from "./ToyCategory/ToyCategory";
import Discount from "./Discount/Discount";
import Article from "./Article/Article";

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
      <Article></Article>
    </div>
  );
};

export default Home;
