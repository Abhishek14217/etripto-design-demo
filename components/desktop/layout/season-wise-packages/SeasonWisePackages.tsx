"use client";

import { useState } from "react";
import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";
import Input from "@/components/desktop/ui/Input";
import LocationCard from "../location-card/LocationCard";

import kashmir from "@/images/kashmir.png";
import uttrakhand from "@/images/uttrakhand.png";
import rajasthan from "@/images/rajasthan.png";
import gujarat from "@/images/gujarat.png";
import globe from "@/images/globe.svg";
import parachute from "@/images/parachute-small.svg";

const calenderMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DummyLocationsData = [
  { image: kashmir, place: "Kashmir", price: "₹32,000", redirect: "#" },
  { image: uttrakhand, place: "Uttrakhand", price: "₹34,000", redirect: "#" },
  { image: rajasthan, place: "Rajasthan", price: "₹30,000", redirect: "#" },
  { image: gujarat, place: "Gujarat", price: "₹28,000", redirect: "#" },
];

const SeasonWisePackages = () => {
  const [selectedMonth, setSelectedMonth] = useState("January"); //With selectedMonth value call API

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="mt-sectionGap relative">
      <Image
        width={100}
        src={globe}
        alt="globe"
        className="absolute left-[1rem] top-[-2rem]"
      />
      <Wrapper>
        <SectionHeaderCommon
          mainText="Package picks from each Season"
          subText="Our most visited sights are here for you to explore!"
          hasBtn
          redirectLink="#"
        />
        <div className="mt-gap flex flex-col gap-gap">
          <div className="flex gap-gap items-center">
            <span className="text-neutralGray text-fontDesk">
              Select your month of Travel
            </span>
            {calenderMonths.map((item, index) => (
              <label
                key={index}
                htmlFor={item}
                className="flex gap-gapSmallest items-center cursor-pointer"
              >
                <Input
                  inputType="radio"
                  id={item}
                  name="months"
                  value={item}
                  checked={selectedMonth === item}
                  onChange={handleChange}
                />
                <span className="text-fontDesk">{item}</span>
              </label>
            ))}
          </div>
          <div className="grid grid-cols-4 items-center">
            {DummyLocationsData.map((item, index) => (
              <LocationCard data={item} key={index} />
            ))}
          </div>
        </div>
      </Wrapper>
      <Image
        width={100}
        src={parachute}
        alt="parachute"
        className="absolute right-[1rem] bottom-[3rem]"
      />
    </div>
  );
};

export default SeasonWisePackages;
