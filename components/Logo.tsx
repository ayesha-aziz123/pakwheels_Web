import Image from "next/image";
import Image1 from "@/public/logo/logo13.png";
import Image2 from "@/public/logo/logo1.png";
import Image3 from "@/public/logo/kia.png";
import Image4 from "@/public/logo/Tyota.png";
import Image5 from "@/public/logo/logo10.png";
import Image6 from "@/public/logo/logo11.png";
import Image7 from "@/public/logo/logo12.png";
import Image8 from "@/public/logo/logo14.png";
import Image9 from "@/public/logo/logo15.png";
import Image10 from "@/public/logo/logo16.png";
import Image11 from "@/public/logo/logo18.png";
import Image12 from "@/public/logo/logo19.png";
import Image13 from "@/public/logo/logo20.png";
import Image14 from "@/public/logo/logo21.png";

const data = [
    {
        img: Image1,
        title:"Porshe"
      },{
        img: Image2,
        title:"Suzuki"
      },{
        img: Image3,
        title:"KIA"
      },{
        img: Image4,
        title:"Toyota"
      },{
        img: Image5,
        title:"Audi"
      },

      {
        img: Image6,
        title:"Proton"
      },{
        img: Image7,
        title:"United"
      },{
        img: Image8,
        title:"Mercetez benz"
      },{
        img: Image9,
        title:"Princess"
      },{
        img: Image10,
        title:"DFSK"
      },
      {
        img: Image11,
        title:"ISUZU"
      },{
        img: Image12,
        title:"FAW"
      },{
        img: Image13,
        title:"HYUNDAI"
      },
      {
        img: Image14,
        title:"Honda"
      }
];

function Logo() {
  return (
    <div className="bg-[#F2F3F3] py-16 md:px-36 px-6 ">
      <h1 className="text-2xl ml-20 font-[600] py-5">New Cars by Make</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-9 md:gap-x-5  gap-y-20  w-full">
       {
        data.map((item,i)=>{
            return(
               <div key={i} className=" flex justify-center items-center flex-col  ">
                <div className="bg-white p-[4px] rounded-full  w-[100px] h-[100px]  cursor-pointer ">
                 <Image className="" src={item.img} alt={item.title} width={5000} height={5000} />
                </div>
                 <h3 className="hover:text-blue-600 text-xl ">{item.title}</h3>
               </div>
               
            )
        })
       }
      </div>
    </div>
  );
}

export default Logo;
