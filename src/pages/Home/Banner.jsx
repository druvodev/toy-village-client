const Banner = () => {
  return (
    <div className="carousel w-full h-[calc(100vh-80px)]">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="h-full w-full relative rounded-b flex items-center bg-cover bg-center bg-blend-darken bg-[url('https://cdn.shopify.com/s/files/1/0375/8981/1340/files/banner9.jpg?v=1613198443')]">
          <div className="bg-black opacity-40 h-full w-full absolute"></div>
          <div className="sm:w-2/3 p-5 sm:pl-10 z-10 text-center mx-auto">
            <h2 className="text-4xl sm:text-6xl font-bold text-white ">
              Cars & Toddler Toys
            </h2>
            <p className="text-slate-400 text-xl sm:text-2xl mt-5">
              The Best Toy For Your Kids
            </p>
            <button className="mt-10 px-3 py-2 hover:bg-pink-500 border border-pink-500 text-white text-2xl shadow shadow-pink-500">
              FIND YOUR TOY
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className="btn btn-circle btn-warning bg-opacity-50"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle btn-warning bg-opacity-50"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="h-full w-full relative rounded-b flex items-center bg-cover bg-center bg-blend-darken bg-[url('https://cdn.shopify.com/s/files/1/0375/8981/1340/files/slider3.2.jpg?v=1613198367')]">
          <div className="bg-black opacity-40 h-full w-full absolute"></div>
          <div className="sm:w-2/3 p-5 sm:pl-10 z-10 text-center mx-auto">
            <h2 className="text-4xl sm:text-6xl font-bold text-white ">
              Cars & Toddler Toys
            </h2>
            <p className="text-slate-400 text-xl sm:text-2xl mt-5">
              The Best Toy For Your Kids
            </p>
            <button className="mt-10 px-3 py-2 hover:bg-pink-500 border border-pink-500 text-white text-2xl shadow shadow-pink-500">
              FIND YOUR TOY
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="btn btn-circle btn-warning bg-opacity-50"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle btn-warning bg-opacity-50"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
