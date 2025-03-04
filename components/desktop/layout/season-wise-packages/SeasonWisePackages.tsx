"use client";

import { useState } from "react";
import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";
import Input from "@/components/desktop/ui/Input";
import LocationCard from "../location-card/LocationCard";
import SelectField from "@/components/common/ui/SelectField";
import Button from "@/components/common/ui/Button";

import kashmir from "@/images/kashmir.png";
import uttrakhand from "@/images/uttrakhand.png";
import rajasthan from "@/images/rajasthan.png";
import gujarat from "@/images/gujarat.png";
import globe from "@/images/globe.svg";
import parachute from "@/images/parachute-small.svg";

const calenderMonths = [
  { month: "January", slug: "jan" },
  { month: "February", slug: "feb" },
  { month: "March", slug: "mar" },
  { month: "April", slug: "apr" },
  { month: "May", slug: "may" },
  { month: "June", slug: "june" },
  { month: "July", slug: "july" },
  { month: "August", slug: "aug" },
  { month: "September", slug: "sep" },
  { month: "October", slug: "oct" },
  { month: "November", slug: "nov" },
  { month: "December", slug: "dec" },
];

const DummyLocationsData = [
  { image: kashmir, place: "Kashmir", price: "₹32,000", redirect: "#" },
  { image: uttrakhand, place: "Uttrakhand", price: "₹34,000", redirect: "#" },
  { image: rajasthan, place: "Rajasthan", price: "₹30,000", redirect: "#" },
  { image: gujarat, place: "Gujarat", price: "₹28,000", redirect: "#" },
];

const SeasonWisePackages = () => {
  const [selectedMonth, setSelectedMonth] = useState("January"); //With selectedMonth value call API

  const monthOptions = calenderMonths.map((month) => ({
    value: month.slug,
    label: month.month,
  }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="mt-gapLargest lg:mt-sectionGap relative">
      <Image
        width={100}
        src={globe}
        alt="globe"
        className="absolute left-[1rem] top-[-2rem] hidden xl:block"
      />
      <Wrapper>
        <SectionHeaderCommon
          mainText="Package picks from each Season"
          subText="Our most visited sights are here for you to explore!"
          hasBtn
          redirectLink="#"
        />
        <div className="mt-gap flex flex-col gap-gap">
          <div className="lg:hidden">
            <SelectField
              options={monthOptions}
              isSearchable={true}
              placeholder="Select your Month of Travel"
              defaultValue={monthOptions[0]}
            />
          </div>

          <div className="lg:block hidden">
            <div className="flex gap-gap items-center ">
              <span className="text-neutralGray text-fontDesk">
                Select your month of Travel
              </span>
              {calenderMonths.map((item, index) => (
                <label
                  key={index}
                  htmlFor={item.month}
                  className="flex gap-gapSmallest items-center cursor-pointer"
                >
                  <Input
                    inputType="radio"
                    id={item.month}
                    name="months"
                    value={item.month}
                    checked={selectedMonth === item.month}
                    onChange={handleChange}
                  />
                  <span className="text-fontDesk">{item.month}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-gap overflow-x-scroll no-scrollbar lg:grid lg:grid-cols-4 items-center lg:gap-0">
            {DummyLocationsData.map((item, index) => (
              <LocationCard data={item} key={index} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-gapLarge lg:hidden">
          <Button redirect="#" />
        </div>
      </Wrapper>
      <Image
        width={100}
        src={parachute}
        alt="parachute"
        className="absolute right-[1rem] bottom-[3rem] hidden xl:block"
      />
    </div>
  );
};

export default SeasonWisePackages;
