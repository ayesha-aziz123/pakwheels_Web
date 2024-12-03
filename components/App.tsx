import Image from "next/image";
import scan from "@/public/logo/scan.svg";
import mobile from "@/public/logo/mobilelogo.png";


function App() {
  return (
    <div className="flex justify-around items-center md:px-20 px-4 py-7 md:flex-row flex-col">
      <div className="flex flex-col  justify-between">
        <h1 className="text-blue-800 font-bold text-[29px] py-3">
          Get The PakWheels App
        </h1>
        <p className="text-xl">
          Buy & Sell Cars, Bikes and Auto Parts faster and better <br /> using
          our App
        </p>
        <div className="grid grid-cols-3 gap-x-4 h-[100px] w-full lg:w-[70%] mt-6">
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
      </div>
        <div className="w-[100px] h-[100px]- ">
          <Image src={scan} alt={""} width={1000} height={1000} />
        </div>
        <div className="lg:w-[300px] w-[200px] h-[200px] lg:h-[300px]">
          <Image src={mobile} alt={""} width={1000} height={1000} />
        </div>
      </div>
  );
}

export default App;
