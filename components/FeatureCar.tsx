"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Component, ReactNode } from "react";
import Image1 from "@/public/feature/car1.jpg";
import Image2 from "@/public/feature/car2.jpg";
import Image3 from "@/public/feature/car3.jpg";
import Image4 from "@/public/feature/car4.jpg";
import Image5 from "@/public/feature/car5.jpg";
import Image6 from "@/public/feature/car6.jpg";
import Image7 from "@/public/feature/car7.jpg";
import Image8 from "@/public/feature/car8.jpg";
import Image from "next/image";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default class FeatureCar extends Component {
  render(): ReactNode {
    const data = [
      {
        img: Image1,
        title: "Toyota Corolla 2023",
        price: "PKR 7,375,000",
        location: "Peshawar",
      },
      {
        img: Image2,
        title: "Honda Civic 2023",
        price: "PKR 9,400,000",
        location: "Peshawar",
      },
      {
        img: Image3,
        title: "Nissan Dayz 2021",
        price: "PKR 3,550,000",
        location: "Peshawar",
      },
      {
        img: Image4,
        title: "Honda Civic 2018",
        price: "PKR 4,800,000",
        location: "Lahore",
      },
      {
        img: Image5,
        title: "Honda Civic 2016",
        price: "PKR 4,400,000",
        location: "Karachi",
      },
      {
        img: Image6,
        title: "Honda BR-V 2020",
        price: "PKR 4,800,000",
        location: "Karachi",
      },
      {
        img: Image7,
        title: "Toyota Prado 2012",
        price: "PKR 16,500,000",
        location: "Lahore",
      },
      {
        img: Image8,
        title: "Toyota Fortuner 2021",
        price: "PKR 13,200,000",
        location: "Lahore",
      },
    ];

    function SampleNextArrow(props:ArrowProps) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{
            ...style,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "gray",
            color: "white",
            padding: "20px",
            borderRadius: "13px",
          }}
          onClick={onClick}
        />
      );
    }

    function SamplePrevArrow(props: ArrowProps) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{
            ...style,
            display: "flex",
            justifyContent: "center",
            color: "white",
            alignItems: "center",
            background: "gray",
            padding: "20px",
            borderRadius: "13px",
          }}
          onClick={onClick}
        />
      );
    }

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="w-full  py-[60px] ">
        <h1 className="md:text-start text-center md:ml-44 font-bold text-gray-600 text-[19px] lg:text-[23px] mb-6">
          Featured New Cars
        </h1>
        <Slider {...settings} className="w-[75%] mx-auto ">
          {data.map((item, i) => {
            return (
              <div key={i} className=" cursor-pointer ">
                <div
                  
                  className="mx-4 bg-[#fff]  hover:shadow-xl shadow-slate-900"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={1000}
                    height={1000}
                  />
                  <h3 className="px-3 pt-3 text-[#2f3b92] font-bold text-[17px]">
                    {item.title}
                  </h3>
                  <p className="px-3 py-1 text-green-500">{item.price}</p>
                  <p className="px-3 pb-2  text-gray-400">{item.location}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
