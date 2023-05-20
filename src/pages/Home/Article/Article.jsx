import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Article = () => {
  return (
    <div className=" px-5 sm:px-10 py-12 bg-emerald-50">
      <h2 className="text-3xl sm:text-5xl font-bold mb-5 text-center">
        We Write to READ
      </h2>
      <div className="grid lg:grid-cols-5 gap-3 mt-5 max-w-7xl mx-auto">
        <div className="lg:col-span-3">
          <img
            className="rounded-md"
            src="https://img.freepik.com/premium-photo/mom-baby-boy-play-home-with-educational-toys-childrens-room-happy-loving-family_267293-5891.jpg?w=2000"
            alt=""
          />
          <h3 className="text-2xl sm:text-3xl font-semibold mt-5 mb-1">
            Baby Planet's toys makes learning simple!
          </h3>
          <hr />
          <p className="sm:text-lg mt-2">
            Aliquet nibh sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            “Ridiculus mus mauris vitae ultricies leo. Non enim praesent
            elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar
            sapien et ligula ullamcorper malesuada...
          </p>
          <div className="sm:text-xl font-semibold opacity-70 flex gap-3 mt-4">
            <p className="flex items-center gap-1">
              <FaRegUserCircle /> By Neha Roy
            </p>{" "}
            |<p>1 Comment</p>
          </div>
        </div>
        <div className="grid gap-3 col-span-2">
          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/premium-photo/happy-asian-mother-cute-little-baby-girl-playing-with-toy-together_7186-1826.jpg?w=2000"
              alt=""
            />
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5 mb-1">
              Baby Planet's toys makes learning simple!
            </h3>
            <hr />
            <p className="sm:text-lg mt-2">
              Aliquet nibh sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu...
            </p>
            <div className="sm:text-xl font-semibold opacity-70 flex gap-3 mt-4">
              <p className="flex items-center gap-1">
                <FaRegUserCircle /> By Alexa
              </p>{" "}
              |<p>1 Comment</p>
            </div>
          </div>
          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/cute-kid-sitting-floor-playing-with-toys_23-2149307013.jpg?w=2000"
              alt=""
            />
            <h3 className="text-2xl sm:text-3xl font-semibold mt-5 mb-1">
              Baby Planet's toys makes learning simple!
            </h3>
            <hr />
            <p className="sm:text-lg mt-2">
              Aliquet nibh sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu...
            </p>
            <div className="sm:text-xl font-semibold opacity-70 flex gap-3 mt-4">
              <p className="flex items-center gap-1">
                <FaRegUserCircle /> By Sapla
              </p>{" "}
              |<p>1 Comment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
