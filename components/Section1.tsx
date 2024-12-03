import React from "react";

function Section1() {
  return (
    <div className="lg:h-[400px] sm:h-[500px] lg:px-16 px-5 py-5 ">
      <div className="">
        <h1 className="text-center text-[17px] md:text-[27px] my-5  text-[#535252] font-[600]">
          Sell Your Car on PakWheels and Get the Best Price
        </h1>
      </div>
      <div className="flex md:justify-evenly md:items-center md:flex-row justify-start items-start flex-col ">
        <div>
          <h2 className="text-[20px] py-3 text-[#2a478f] font-bold">
            Post your Ad on PakWheels
          </h2>
          <p className="py-1">✔Post your Ad for Free in 3 Easy Steps</p>
          <p className="py-1">✔Get Genuine offers from Verified Buyers</p>
          <p className="py-1">✔Sell your car Fast at the Best Price</p>
          <button className="bg-red-700 text-white px-9 py-3 mt-5 rounded-md">
            Post Your Ad
          </button>
        </div>
        <div className="flex flex-row md:flex-col items-center my-3 px-11 bg-white ">
          <div className="w-px h-20 flex justify-center  bg-gray-300 mb-2"></div>
          <span className="text-gray-500 text-xl  font-semibold mb-2 mx-4">OR</span>
          <div className="w-px h-20 bg-gray-300 mb-2"></div>
        </div>
        <div>
          <h2 className="text-[20px] py-3 text-[#2a478f] font-bold">
            Try PakWheels Sell It For Me
          </h2>
          <p className="py-1"> ✔Dedicated Sales Expert to Sell your Car</p>
          <p className="py-1">✔We Bargain for you and share the Best Offer</p>
          <p className="py-1">✔We ensure Safe & Secure Transaction</p>
          <button className="bg-sky-700 text-white px-9 py-3 mt-5 rounded-md">
            Register Your Car
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
