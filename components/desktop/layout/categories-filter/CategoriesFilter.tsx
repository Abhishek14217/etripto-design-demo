"use client";
import Image from "next/image";
import { useState } from "react";

import Input from "@/components/desktop/ui/Input";
import DatePicker from "@/components/common/ui/DatePicker";
import { CatFilterInputType } from "@/types/cat-filter-data";

import filter from "@/icons/filter.svg";

const catFilterData: {
  title: string;
  block?: boolean;
  type: string;
  inputs?: CatFilterInputType[];
}[] = [
  {
    title: "Tour Type",
    type: "RADIO",
    inputs: [
      { label: "Family", type: "radio", name: "tourType" },
      { label: "Group", type: "radio", name: "tourType" },
      { label: "HoneyMoon", type: "radio", name: "tourType" },
      { label: "Adventure", type: "radio", name: "tourType" },
      { label: "OffBeat", type: "radio", name: "tourType" },
      { label: "Culture", type: "radio", name: "tourType" },
    ],
  },
  {
    title: "Price Range",
    type: "RADIO",
    inputs: [
      { label: "₹10000-₹20000", type: "radio", name: "priceRange" },
      { label: "₹20000-₹35000", type: "radio", name: "priceRange" },
      { label: "₹35000-₹55000", type: "radio", name: "priceRange" },
      { label: "₹55000-₹75000", type: "radio", name: "priceRange" },
      { label: "₹75000-₹95000", type: "radio", name: "priceRange" },
      { label: "More than 1Lac", type: "radio", name: "priceRange" },
    ],
  },
  {
    title: "Tour Duration",
    type: "RADIO",
    inputs: [
      { label: "2-4 Days", type: "radio", name: "tourDuration" },
      { label: "3-4 Days", type: "radio", name: "tourDuration" },
      { label: "4-7 Days", type: "radio", name: "tourDuration" },
      { label: "7-8 Days", type: "radio", name: "tourDuration" },
    ],
  },
  {
    title: "Flight",
    type: "RADIO",
    inputs: [
      { label: "With Flight", type: "radio", name: "flight" },
      { label: "Without Flight", type: "radio", name: "flight" },
    ],
  },
  {
    title: "Hotel Category",
    type: "RADIO",
    inputs: [
      { label: "Less than 3 Star", type: "radio", name: "hotelCategory" },
      { label: "3 Star", type: "radio", name: "hotelCategory" },
      { label: "4 Star", type: "radio", name: "hotelCategory" },
      { label: "5 Star", type: "radio", name: "hotelCategory" },
      { label: "7 Star", type: "radio", name: "hotelCategory" },
    ],
  },
  {
    title: "Depart Between",
    type: "TEXT",
  },
  {
    title: "Speciality Tour",
    type: "RADIO",
    block: true,
    inputs: [
      { label: "Family(10)", type: "radio", name: "specialityTour" },
      { label: "Women's Special(9)", type: "radio", name: "specialityTour" },
      { label: "Seniors' Special(6)", type: "radio", name: "specialityTour" },
      {
        label: "Customized Holidays(4)",
        type: "radio",
        name: "specialityTour",
      },
      { label: "Honeymoon Special(4)", type: "radio", name: "specialityTour" },
      { label: "Luxury Tours (1)", type: "radio", name: "specialityTour" },
    ],
  },
];

const CategoriesFilter = () => {
  const [selectedDate, setSelectedDate] = useState({
    from: "",
    to: "",
  });

  return (
    <div className="border rounded-xl bg-white z-10 sticky top-0 h-fit">
      <div className="flex justify-between items-center bg-navyBlue p-gapMed">
        <h4 className="flex items-center gap-gapSmall text-white text-fontDesk">
          <Image src={filter} alt="image" width={20} height={20} unoptimized />
          Filter
        </h4>
        <button className="text-primaryCyan text-fontDeskSmall">Reset</button>
      </div>
      <form>
        {catFilterData.map((item, index) => (
          <div key={index}>
            <div className="bg-gray-100 text-fontDesk p-2">{item.title}</div>
            {item.type === "RADIO" ? (
              <div
                className={`${
                  item.block ? "flex-col" : ""
                } flex flex-wrap gap-gap p-gapMed`}
              >
                {item.inputs?.map((subitem, subindex) => (
                  <div key={subindex}>
                    {"label" in subitem && ( // Type guard to avoid type errors
                      <label
                        htmlFor={subitem.label}
                        className="flex gap-gapSmallest items-center cursor-pointer"
                      >
                        <Input
                          inputType={subitem.type}
                          id={subitem.label}
                          name={subitem.name}
                          value={subitem.label}
                        />
                        <span className="text-fontDeskSmall">
                          {subitem.label}
                        </span>
                      </label>
                    )}
                  </div>
                ))}
              </div>
            ) : item.type === "TEXT" ? (
              <DatePicker
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                clear
              />
            ) : null}
          </div>
        ))}
      </form>
    </div>
  );
};

export default CategoriesFilter;

//   item.inputs.map((subitem, subindex) =>
//     "placeholder" in subitem ? (
//       <div className="relative p-gapMed" key={subindex}>
//         <DatePicker />
//         {/* <Input
//           inputType={subitem.type}
//           name={subitem.name}
//           placeholder={subitem.placeholder}
//           className="border rounded-md w-full p-2 text-fontDeskSmall"
//         />
//         <Image
//           className="absolute right-[1.2rem] bottom-[1.2rem] cursor-pointer"
//           src={subitem.img}
//           alt="image"
//           height={18}
//           width={18}
//           unoptimized
//         /> */}
//       </div>
//     ) : null
//   )
// )}
