import Image from "next/image";
import { FaSearch } from "react-icons/fa";

function Hero() {
  return (
    <div className="lg:h-[480px] h-[900px] relative w-full overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-8 py-8 mb-8">
      <div className="absolute inset-0 opacity-30">
        <Image
          className="w-full h-full object-cover"
          src={"/car6.jpg"}
          width={9000}
          height={9000}
          alt={""}
        />
      </div>

      <div className="relative pt-48 lg:py-10  mx-auto container flex flex-col justify-center items-center">
        <h2 className="font-[700] text-white text-[27px] text-center sm:text-5xl mb-4 mt-48 lg:mt-10 ">
          Find Used Cars in Pakistan
        </h2>
        <p className="text-white  text-[15px] lg:text-lg text-center ">
          With thousands of cars, we have just the right one for you
        </p>
        <div className="relative flex space-y-3 text-[12px] lg:text-[17px] flex-col sm:flex-row rounded-lg sm:space-y-0 sm-x-5 mt-5 ">
          <input
            type="text"
            placeholder="Car Make or Model"
            className="lg:py-3 lg:px-5 px-3 py-2  "
          />
          <input type="text" placeholder="All Cities" className="py-3 px-5" />
          <input type="text" placeholder="Price Range" className="py-3 px-5" />
          <div className="bg-green-600 text-white lg:px-5 lg:py-4 px-2 py-2 ">
            {" "}
            <FaSearch />
          </div>
        </div>

        <div className="mt-5">
          <button className="border-[1px] px-9 py-2 border-white text-white text-[12px]">
            Advanced Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
