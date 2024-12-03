import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[#23292F] text-[#9e9d9b] px-6 md:px-32 pt-10 ">
      <div className=" grid  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3  text-[13px] items-center gap-y-6  ">
        <div>
          <ul>
            <li>
              <h3 className="heading">Cars By Make</h3>
            </li>
            <li>Toyota Cars for Sale</li>
            <li>Suzuki Cars for Sale</li>
            <li>Honda Cars for Sale</li>
            <li>Daihatsu Cars for Sale</li>
            <li>Nissan Cars for Sale</li>
            <li>Mercedes Cars for Sale</li>
            <li>Hyundai Cars for Sale </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <h3 className="heading">Cars By Make2</h3>
            </li>
            <li>Cars in Karachi</li>
            <li>Cars in Lahore</li>
            <li>Cars in Islamabad</li>
            <li>Cars in Rawalpindi</li>
            <li>Cars in Peshawar</li>
            <li>Cars in Rawalpindi</li>
            <li>Cars in Peshawar</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3 className="heading">Explore PakWheels</h3>
            </li>
            <li>Used Cars</li>
            <li> Used Bikes</li>
            <li>New Cars</li>
            <li>Auto Parts & Accessories</li>
            <li>Cool Rides</li>
            <li>Forums</li>
            <li>Autoshow</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3 className="heading">PakWheels.com</h3>
            </li>
            <li>About PakWheels.com</li>
            <li> Our Products</li>
            <li> Advertise With Us</li>
            <li>How To Pay</li>
            <li>FAQs</li>
            <li>Refunds & Returns</li>
            <li>Careers</li>
            <li> Contact Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3 className="heading">Sell On PakWheels</h3>
            </li>
            <li>Sell Your Car</li>
            <li> Sell Your Bike </li>
            <li>all Accessory</li>
            <h3 className="heading">Subscribe to our Newsletter</h3>
            <input
              className="py-[5px] px-4 w-[60%]"
              type="email"
              placeholder="name@email.com"
            />
            <button className="bg-green-400 py-[8px] px-3 text-white text-[10px]">
              Subscribe
            </button>
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 text-[13px] my-5 ">
        <div>
          <ul>
            <li>
              <h3 className="heading">Cars By Make</h3>
            </li>
            <li>Toyota Cars for Sale</li>
            <li>Suzuki Cars for Sale</li>
            <li>Honda Cars for Sale</li>
            <li>Daihatsu Cars for Sale</li>
            <li>Nissan Cars for Sale</li>
            <li>Mercedes Cars for Sale</li>
            <li>Hyundai Cars for Sale </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <h3 className="heading">Cars By Make2</h3>
            </li>
            <li>Cars in Karachi</li>
            <li>Cars in Lahore</li>
            <li>Cars in Islamabad</li>
            <li>Cars in Rawalpindi</li>
            <li>Cars in Peshawar</li>
            <li>Cars in Rawalpindi</li>
            <li>Cars in Peshawar</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3 className="heading">Explore PakWheels</h3>
            </li>
            <li>Used Cars</li>
            <li> Used Bikes</li>
            <li>New Cars</li>
            <li>Auto Parts & Accessories</li>
            <li>Cool Rides</li>
            <li>Forums</li>
            <li>Autoshow</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3 className="heading">PakWheels.com</h3>
            </li>
            <li>About PakWheels.com</li>
            <li> Our Products</li>
            <li> Advertise With Us</li>
            <li>How To Pay</li>
            <li>FAQs</li>
            <li>Refunds & Returns</li>
            <li>Careers</li>
            <li> Contact Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3 className="heading">Follow Us</h3>
            </li>
            <div className="flex gap-x-5">
              <li>
                <FaFacebook
                  size={30}
                  className="bg-[#4f4e4e] p-[4px]  rounded-[50%]"
                />
              </li>
              <li>
                <FaTwitter
                  size={30}
                  className="bg-[#4f4e4e] p-[4px]  rounded-[50%]"
                />
              </li>
              <li>
                <FaPinterest
                  size={30}
                  className="bg-[#4f4e4e] p-[4px]  rounded-[50%]"
                />
              </li>
              <li>
                <FaInstagram
                  size={30}
                  className="bg-[#4f4e4e] p-[4px]  rounded-[50%]"
                />
              </li>
              <li>
                <FaYoutube
                  size={30}
                  className="bg-[#4f4e4e] p-[4px]  rounded-[50%]"
                />
              </li>
            </div>
            <h1 className="heading my-3">Download Mobile Apps</h1>
            <div className="grid grid-cols-2 h-[100px] lg:w-[90%] w-[60%]">
              <Image
                src={
                  "https://wsa2.pakwheels.com/assets/google-play-badge-fe1c02f5d509b88ec786cc1893f68200.svg"
                }
                alt={""}
                height={200}
                width={200}
              />
              <Image
                src={
                  "	https://wsa4.pakwheels.com/assets/app-store-badge-47a3fa71b3442ad5181388d9060d4478.svg"
                }
                alt={""}
                height={200}
                width={200}
              />
              <Image
                src={
                  "	https://wsa3.pakwheels.com/assets/huawei-store-badge-d13aaefcccf041b3e65b9d762e971c98.svg"
                }
                alt={""}
                height={200}
                width={200}
              />
            </div>
          </ul>
        </div>
      </div>
      <hr className="bg-[#262525] h-[1px] w-full my-4 " />
      <div className="text-[12px] text-center py-5">
        <p>
          Copyright © 2003 - 2024 PakWheels (Pvt) Ltd. - All Rights Reserved.
        </p>
        <p>Terms of Service | Privacy Policy</p>
        <p>
          Reproduction of material from any PakWheels.com pages without
          permission is strictly prohibited.
        </p>
      </div>
    </div>
  );
}
export default Footer;
