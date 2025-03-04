"use client";
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";

import sliderImg from "@/images/main-slider.png";

const sliderImages = [
  { url: "#", image: sliderImg },
  { url: "#", image: sliderImg },
  { url: "#", image: sliderImg },
];

type MainSliderProps = {
  isMob?: boolean;
};

const MainSlider: React.FC<MainSliderProps> = ({ isMob }) => {
  var settings = {
    dots: true,
    arrows: isMob ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <div className="main-slider relative">
      <Slider {...settings}>
        {sliderImages.map((item, index) => (
          <Link href={item.url} key={index}>
            <div className="h-[10rem] sm:h-[14rem] md:h-[20rem] lg:h-[33.875rem] relative">
              <Image
                src={item.image}
                alt="main-slider-img"
                fill
                priority={true}
              />
            </div>
          </Link>
        ))}
      </Slider>
      <div className="absolute bottom-[3rem] left-[10%] lg:bottom-[8rem] sm:left-1/2 sm:transform sm:-translate-x-1/2">
        <h1 className="text-white text-fontDeskSmall  lg:text-[1.5rem] font-extrabold text-center">
          Tailored and Book Your Dream Vacation Packages
        </h1>
        <h6 className="text-primaryCyan text-fontDeskSmall lg:text-fontDeskLargest text-center">
          20000+ Tourists have already travelled with us
        </h6>
      </div>
    </div>
  );
};

export default MainSlider;
