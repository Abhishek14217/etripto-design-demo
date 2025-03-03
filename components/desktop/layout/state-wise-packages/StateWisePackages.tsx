"use client";

import Image from "next/image";
import { useState } from "react";

import Slider from "react-slick";
import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";
import Input from "@/components/desktop/ui/Input";
import LocationCard from "../location-card/LocationCard";
import Button from "@/components/common/ui/Button";

import coconut from "@/images/coconut-reverse.svg";
import kashmir from "@/images/kashmir.png";
import uttrakhand from "@/images/uttrakhand.png";
import rajasthan from "@/images/rajasthan.png";
import gujarat from "@/images/gujarat.png";

const DummyLocationsData = [
  { image: kashmir, place: "Mcleodganj", price: "₹32,000", redirect: "#" },
  { image: uttrakhand, place: "Kasol", price: "₹34,000", redirect: "#" },
  { image: rajasthan, place: "Spiti Valley", price: "₹30,000", redirect: "#" },
  { image: gujarat, place: "Bir Billing", price: "₹28,000", redirect: "#" },
];

const stateData = [
  { state: "Sikkim", slug: "sikkim" },
  { state: "Goa", slug: "goa" },
  { state: "Andhra Pradesh", slug: "andhra" },
  { state: "Himachal Pradesh", slug: "himachal" },
  { state: "Tamil Nadu", slug: "tamil-nadu" },
  { state: "Telangana", slug: "telangana" },
  { state: "Uttar Pradesh", slug: "uttar-pradesh" },
  { state: "Assam", slug: "assam" },
  { state: "Kerala", slug: "kerala" },
];

const StateWisePackages = () => {
  const [selectedState, setSelectedState] = useState("Himachal Pradesh");

  var settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedState(event.target.value);
  };

  const renderStateOptions = (name: string) => {
    return stateData.map((item, index) => (
      <label key={index} htmlFor={item.slug} className="radio-label">
        <Input
          inputType="radio"
          id={item.slug}
          name={name}
          value={item.state}
          checked={selectedState === item.state}
          onChange={handleChange}
          className="radio-input"
        />
        <span className="radio-span">{item.state}</span>
      </label>
    ));
  };

  return (
    <div className="mt-gapLargest lg:mt-sectionGap relative">
      <Image
        width={100}
        src={coconut}
        alt="coconut"
        className="absolute left-[1rem] bottom-[0rem] hidden lg:block"
      />

      <Wrapper>
        <SectionHeaderCommon
          mainText="Package picks from State Wise"
          subText="Our most visited sights are here for you to explore!"
          hasBtn
          redirectLink="#"
        />
        <div className="mt-gapMed lg:mt-gap state-packages-slider">
          <div className="flex gap-gap overflow-x-scroll no-scrollbar lg:hidden">
            {renderStateOptions("statesMob")}
          </div>
          <div className="lg:block hidden">
            <Slider {...settings}>{renderStateOptions("states")}</Slider>
          </div>
        </div>
        <div className="flex gap-gap lg:gap-0 overflow-x-scroll no-scrollbar lg:grid lg:grid-cols-4 items-center mt-gapMed lg:mt-gap">
          {DummyLocationsData.map((item, index) => (
            <LocationCard data={item} key={index} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-gapLarge lg:hidden">
          <Button redirect="#" />
        </div>
      </Wrapper>
    </div>
  );
};

export default StateWisePackages;

//---------------------EXTRA CODE-------------------------
{
  /* {isMob ? (
            <div className="flex gap-gap overflow-x-scroll no-scrollbar">
              {renderStateOptions()}
            </div>
          ) : (
            <Slider {...settings}>{renderStateOptions()}</Slider>
          )} */
}
