"use client";
import Image from "next/image";

import Slider from "react-slick";
import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";
import TopToursCard from "./TopToursCard";
import Button from "@/components/common/ui/Button";

import kashmir from "@/images/top-tours-kashmir.png";
import uttrakhand from "@/images/top-tours-uttrakhand.png";
import gujarat from "@/images/top-tours-gujarat.png";
import rajasthan from "@/images/top-tours-rajasthan.png";
import flightBg from "@/images/flight-bg.svg";
import howItWorksOne from "@/images/how-it-works-three.svg";
import howItWorksTwo from "@/images/how-it-works-two.svg";
import howItWorksThree from "@/images/how-it-works-one.svg";
import howItWorksArrow from "@/images/how-it-works-arrow.svg";
import coconut from "@/images/coconut.svg";

const TopToursData = [
  {
    image: kashmir,
    location: "Kashmir",
    stayTime: "5 Nights 6 Days",
    price: "18500",
    redirect: "#",
  },
  {
    image: uttrakhand,
    location: "Uttrakhand",
    stayTime: "4 Nights 5 Days",
    price: "20500",
    redirect: "#",
  },
  {
    image: gujarat,
    location: "Gujarat",
    stayTime: "3 Nights 6 Days",
    price: "22500",
    redirect: "#",
  },
  {
    image: rajasthan,
    location: "Rajasthan",
    stayTime: "10 Nights 6 Days",
    price: "28500",
    redirect: "#",
  },
  {
    image: kashmir,
    location: "Kashmir",
    stayTime: "5 Nights 6 Days",
    price: "18500",
    redirect: "#",
  },
];

const howItWorksData = [
  {
    image: howItWorksOne,
    title: "Select your package",
    content: "& tell us your preferences",
  },
  {
    image: howItWorksTwo,
    title: "Get multiple free quotes",
    content: "from verified travel experts",
  },
  {
    image: howItWorksThree,
    title: "Customize & book",
    content: "a perfect holiday experience",
  },
];

const TopTours = () => {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      {/*--------------------------------------- TOP SELLING TOURS--------------------------------------------------- */}
      <div className="mt-gapLargest lg:mt-sectionGap bg-[url('/world-map.png')] bg-contain lg:bg-center bg-no-repeat relative">
        <Wrapper>
          <SectionHeaderCommon
            mainText="Top Selling Tours"
            subText="Our most visited sights are here for you to explore!"
            hasBtn
            redirectLink="#"
          />
          <div className="mt-gapMed lg:mt-gap domestic-slider">
            <div className="flex gap-gap overflow-x-scroll no-scrollbar lg:hidden">
              {TopToursData.map((item, index) => (
                <TopToursCard data={item} key={index} />
              ))}
            </div>
            <div className="lg:block hidden">
              <Slider {...settings}>
                {TopToursData.map((item, index) => (
                  <TopToursCard data={item} key={index} />
                ))}
              </Slider>
            </div>
          </div>

          <div className="flex items-center justify-center mt-gapLarge lg:hidden">
            <Button redirect="#" />
          </div>
        </Wrapper>
        <Image
          style={{ zIndex: "-1" }}
          src={flightBg}
          alt="flight"
          width={800}
          className="absolute right-0 top-0 bottom-0 m-auto  "
          unoptimized
        />
      </div>

      {/*--------------------------------------- HOW IT WORKS--------------------------------------------------- */}
      <div className="mt-gapLargest lg:mt-sectionGap relative">
        <Wrapper>
          <SectionHeaderCommon
            mainText="How it works"
            subText="in 3 Simple Steps"
            middleText="<b>Amazing Holiday Packages</b>"
            middleTextFontSizeClass="text-fontDeskLargest"
          />

          <div className="mt-gapMed lg:mt-gap flex flex-col lg:flex-row md:flex-row gap-gap lg:gap-0 justify-center items-center lg:items-start">
            {howItWorksData.map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="flex items-center flex-col">
                  <Image src={item.image} alt="image" unoptimized />
                  <h5 className="text-fontDesk lg:text-fontDeskLarge text-black mt-gapSmall font-bold">
                    {item.title}
                  </h5>
                  <h6 className="text-fontDeskSmall lg:text-fontDesk text-steelGray">
                    {item.content}
                  </h6>
                </span>
                {index !== howItWorksData.length - 1 && (
                  <Image
                    src={howItWorksArrow}
                    alt="image"
                    unoptimized
                    className="pt-11 -mx-4 hidden lg:block lg:w-[unset] md:block md:w-[130px] "
                  />
                )}
              </div>
            ))}
          </div>
        </Wrapper>

        <Image
          src={coconut}
          alt="coconut"
          width={113}
          className="absolute right-6 bottom-[-2rem] hidden xl:block"
          unoptimized
        />
      </div>
    </>
  );
};

export default TopTours;

//------------------------------EXTRA CODE---------------------------
{
  /* {isMob ? (
              <div className="flex gap-gap overflow-x-scroll no-scrollbar">
                {TopToursData.map((item, index) => (
                  <TopToursCard data={item} key={index} />
                ))}
              </div>
            ) : (
              <Slider {...settings}>
                {TopToursData.map((item, index) => (
                  <TopToursCard data={item} key={index} />
                ))}
              </Slider>
            )} */
}
