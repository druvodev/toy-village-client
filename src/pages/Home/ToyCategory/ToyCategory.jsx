import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCategoryCard from "./ToyCategoryCard";

const ToyCategory = () => {
  const [toys, setToys] = useState([]);

  const handleCategory = (category) => {
    fetch(`https://toy-village-server.vercel.app/toyList/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setToys(data);
      });
  };

  return (
    <div className="mt-12 px-5 sm:px-10">
      <h2 className="text-5xl font-bold text-center">Find Your Category</h2>
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab onClick={() => handleCategory("sports_car")}>Sports Car</Tab>
          <Tab onClick={() => handleCategory("truck")}>Truck</Tab>
          <Tab onClick={() => handleCategory("fire_car")}>Fire Car</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab onClick={() => handleCategory("super_car")}>Super Car</Tab>
              <Tab onClick={() => handleCategory("convertible")}>
                Convertible
              </Tab>
              <Tab onClick={() => handleCategory("racing_car")}>Racing Car</Tab>
            </TabList>
            <TabPanel>
              <ToyCategoryCard toys={toys}></ToyCategoryCard>
            </TabPanel>
            <TabPanel>
              <ToyCategoryCard toys={toys}></ToyCategoryCard>
            </TabPanel>
            <TabPanel>
              <ToyCategoryCard toys={toys}></ToyCategoryCard>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab onClick={() => handleCategory("pickup_truck")}>
                Pickup Truck
              </Tab>
              <Tab onClick={() => handleCategory("heavy_duty_truck")}>
                Heavy-Duty Truck
              </Tab>
              <Tab onClick={() => handleCategory("delivery_truck")}>
                Delivery Truck
              </Tab>
            </TabList>
            <TabPanel>
              <ToyCategoryCard toys={toys}></ToyCategoryCard>
            </TabPanel>
            <TabPanel>
              <ToyCategoryCard toys={toys}></ToyCategoryCard>
            </TabPanel>
            <TabPanel>
              <ToyCategoryCard toys={toys}></ToyCategoryCard>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab onClick={() => handleCategory("fire_engine")}>
                Fire Engine
              </Tab>
              <Tab onClick={() => handleCategory("fire_truck")}>Fire Truck</Tab>
              <Tab onClick={() => handleCategory("aerial_fire_apparatus")}>
                Aerial Fire Apparatus
              </Tab>
            </TabList>
            <TabPanel>
              <ToyCategoryCard toys={toys}></ToyCategoryCard>
            </TabPanel>
            <TabPanel>
              <ToyCategoryCard toys={toys}></ToyCategoryCard>
            </TabPanel>
            <TabPanel>
              <ToyCategoryCard toys={toys}></ToyCategoryCard>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyCategory;
