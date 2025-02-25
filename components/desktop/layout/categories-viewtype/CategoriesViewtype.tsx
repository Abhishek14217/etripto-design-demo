"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import DropdownContent from "@/components/desktop/ui/DropdownContent";
import DropdownCommon from "../dropdowns/DropdownCommon";
import CatPackagesViewCard from "./CatPackagesViewCard";
import { packagesData } from "./PackagesData";

import sortBy from "@/icons/sort-by.svg";
import list from "@/icons/list.svg";
import grid from "@/icons/grid.svg";
import downArrow from "@/icons/down-arrow.svg";

const sortByDropdownData = [
  { title: "Deals" },
  { title: "Price High to Low" },
  { title: "Price Low to High" },
  { title: "Duration Long to Short" },
  { title: "Duration Short to Long" },
];

const CategoriesViewtype = () => {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortByDropdownData[0].title);
  const [view, setView] = useState("grid");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleShowSortDropdown = () => {
    setShowSortDropdown((prevState) => !prevState);
  };

  const handleView = (newView: string) => {
    setView(newView);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowSortDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle selecting a sorting option
  const handleSelectSort = (title: string) => {
    setSelectedSort(title);
    setShowSortDropdown(false); // Close dropdown after selection
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-fontDeskLarge font-bold">
            14 Holiday Packages from Jammu and Kashmir
          </h3>
          <span className="text-fontDeskSmall text-steelGray">
            Showing 1-10 packages from 14 packages
          </span>
        </div>
        <div className="flex items-center gap-gap">
          <div
            ref={dropdownRef}
            className="relative flex items-center justify-between border rounded-md p-gapMed bg-white cursor-pointer min-w-[13.125rem]"
            onClick={handleShowSortDropdown}
          >
            <div className="flex items-center gap-gapSmallest text-navyBlue text-fontDesk">
              <Image
                src={sortBy}
                alt="sort"
                height={15}
                width={15}
                unoptimized
              />
              Sort By:
              <span className="font-bold text-black truncate max-w-[6rem] inline-block">
                {selectedSort}
              </span>
            </div>
            <Image
              className={`transform transition-transform duration-300 ${
                showSortDropdown ? "-rotate-180" : ""
              }`}
              src={downArrow}
              alt="down-arrow"
              unoptimized
            />
            {showSortDropdown && (
              <DropdownContent className="border rounded-md min-w-[13rem] top-[3rem] right-0 ">
                <DropdownCommon
                  data={sortByDropdownData}
                  sortDropdown
                  onSelect={handleSelectSort}
                  selectedSort={selectedSort}
                />
              </DropdownContent>
            )}
          </div>

          <button
            className="flex items-center gap-gapSmallest text-navyBlue text-fontDesk"
            onClick={() => handleView(view === "grid" ? "list" : "grid")}
          >
            <Image
              src={view === "grid" ? list : grid}
              alt="list"
              height={15}
              width={15}
              unoptimized
            />
            {view === "grid" ? "List View" : "Grid View"}
          </button>
        </div>
      </div>
      <div
        className={`mt-gapLargest ${
          view === "grid" ? "grid grid-cols-2" : "flex flex-col"
        }  gap-gap`}
      >
        {packagesData.map((item, index) => (
          <CatPackagesViewCard key={index} view={view} data={item} />
        ))}
      </div>
      <button className="block mx-auto mt-gapLargest text-navyBlue bg-primaryCyan rounded px-6 py-2 text-fontDesk hover:bg-navyBlue hover:text-white transition-all duration-300">
        View More
      </button>
    </div>
  );
};

export default CategoriesViewtype;
