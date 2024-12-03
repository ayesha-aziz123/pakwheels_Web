"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className="bg-[#161a43] h-[290px] lg:py-0 py-3 min-w-full xl:h-20 lg:h-40 flex flex-wrap justify-center gap-x-16 items-center fixed z-50 mb-20 ">
      <div>
        <Image src={"/logo.svg"} alt={""} height={200} width={200} />
      </div>

      <div className="py-3">
        <ul className="text-white flex-wrap flex flex-row px-8 lg:gap-y-0 gap-x-3 lg:gap-x-10">
          <li
            className=" hover:bg-white hover:text-red-500 p-3"
            onMouseOver={() => setOpen(!open)}
          >
            <div className="inline-flex items-center">
              <Link className="" href={""}>
                UsedCars
              </Link>
              <p>
                <FaCaretDown />
              </p>
            </div>
            {open && (
              <div className=" bg-[#fffffff7] absolute z-50 h-screen lg:h-[65vh] lg:w-[70%]  ">
                <div className="grid gap-x-4 gap-y-7 lg:grid-cols-3 grid-cols-2 text-black lg:m-7 m-4">
                  <ul>
                    <h1 className="text-black text-xl ">
                      Find User Car for sale
                    </h1>
                    <li className="text-[15px]  text-gray-500">
                      Serach From110k option
                    </li>
                  </ul>
                  <ul>
                    <h1 className="text-black text-xl">
                      Find User Car for sale
                    </h1>
                    <li className="text-[15px] text-gray-500">
                      Serach From110k option
                    </li>
                  </ul>
                  <ul>
                    <h1 className="text-black text-xl">Featured Used Cars</h1>
                    <li className="text-[15px] text-gray-500">
                      View featured cars by PakWheels
                    </li>
                  </ul>
                  <ul>
                    <h1 className="text-black text-xl">Sell Your Car</h1>
                    <li className="text-[15px] text-gray-500">
                      Post a free ad
                    </li>
                  </ul>
                  <ul>
                    <h1 className="text-black text-xl">sell your car</h1>
                    <li className="text-[15px] text-gray-500">
                      quickly Used Car Dealers
                    </li>
                  </ul>
                  <ul>
                    <h1 className="text-black text-xl">Find used car</h1>
                    <li className="text-[15px] text-gray-500">
                      dealers near your Price Calculator{" "}
                    </li>
                  </ul>
                  <ul>
                    <h1 className="text-black text-xl">
                      {" "}
                      Calculate the market
                    </h1>
                    <li className="text-[15px] text-gray-500">
                      price of cars PakWheels
                    </li>
                  </ul>
                  <ul>
                    <h1 className="text-black text-xl">
                      Auction Sheet Verification
                    </h1>
                    <li className="text-[15px] text-gray-500">
                      Authentic Auction Sheets for your peace of mind
                    </li>
                  </ul>
                  <ul>
                    <h1 className="text-black text-xl">
                      PakWheels Sell It For Me
                    </h1>
                    <li className="text-[15px] text-gray-500">
                      Let PakWheels sell your car hassle free for yo
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li
            onMouseOver={() => setOpen2(!open2)}
            className=" hover:bg-white hover:text-red-500 p-3"
          >
            <div className="inline-flex items-center">
              <Link href={""}>New Cars</Link>
              <p>
                <FaCaretDown />
              </p>
            </div>
            {open2 && (
              <div className="bg-[#fffffff7] absolute z-50 h-screen lg:h-[55vh] lg:w-[50%]">
                <div className="grid gap-x-4 gap-y-7 lg:grid-cols-3 grid-cols-2 text-black lg:m-7 m-4">
                  <ul>
                    <h1 className="text-black lg:text-xl text-[14px]">Find New Cars</h1>
                    <li className="lg:text-[15px] text-[12px]  text-gray-500">
                      See new cars in Pakistan
                    </li>
                  </ul>

                  <ul>
                    <h1 className="text-black lg:text-xl text-[16px]">Reviews</h1>
                    <li className="lg:text-[15px] text-[12px]  text-gray-500">
                      Read reviews of all cars in Pakistan
                    </li>
                  </ul>
                  
                  <ul>
                    <h1 className="text-black lg:text-xl text-[16px]">Prices</h1>
                    <li className="lg:text-[15px] text-[12px]  text-gray-500">
                      See prices of new cars
                    </li>
                  </ul>
                  <ul>
                    <h1 className="text-black lg:text-xl text-[16px]">On Road Price</h1>
                    <li className="lg:text-[15px] text-[12px]  text-gray-500">
                      Calculate the total cost of new car
                    </li>
                  </ul>
                  <ul>
                    <h1 className="text-black lg:text-xl text-[16px]">New Car Dealers</h1>
                    <li className="lg:text-[15px] text-[12px]  text-gray-500">Find new car dealers</li>
                  </ul>
                  <ul>
                    <h1 className="text-black lg:text-xl text-[16px]">Car Comparisons</h1>
                    <li className="lg:text-[15px] text-[12px]  text-gray-500">Compare cars and find their differences</li>
                  </ul>
                  <ul>
                    <h1 className="text-black lg:text-xl text-[16px] ">Reviews</h1>
                    <li className="lg:text-[15px] text-[12px]  text-gray-500">
                      Read reviews of all cars in Pakistan
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li className="inline-flex items-center hover:bg-white hover:text-red-500 p-2">
            <Link href={""}>Bikes </Link>
            <p>
              <FaCaretDown />
            </p>
          </li>
          <li className="inline-flex items-center hover:bg-white hover:text-red-500 py-2">
            <Link href={""}>Auto Store </Link>
            <p>
              <FaCaretDown />
            </p>
          </li>
          <li className="py-3">
            <Link href={""}>Videos </Link>
          </li>
          <li className="py-3">
            <Link href={""}>Forums </Link>
          </li>
          <li className="py-3">
            <Link href={""}>Blog </Link>
          </li>
          <li className="py-3">
            <Link href={""}>More </Link>
          </li>
        </ul>
      </div>

      <button className="bg-red-700 hidden text-white px-1 py-1 lg:px-2 lg:py-1 rounded-md md:inline-flex items-center gap-x-">
        Post an Ad
        <FaCaretDown />{" "}
      </button>
    </div>
  );
}

export default Navbar;
