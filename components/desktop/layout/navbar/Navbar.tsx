"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import DropdownContent from "@/components/desktop/ui/DropdownContent";
import DropdownCommon from "../dropdowns/DropdownCommon";
import { NavItems } from "./NavItems";

import logo from "@/images/etripto-logo.svg";
import bookFlight from "@/images/book-flight.svg";
import phone from "@/icons/phone.svg";
import dropDownIcon from "@/icons/nav-down-arrow.svg";

const topDestDropdownData = [
  { title: "Andaman", redirect: "#" },
  { title: "Darjeeling", redirect: "#" },
  { title: "Shimla", redirect: "#" },
  { title: "Sikkim", redirect: "#" },
  { title: "Manali", redirect: "#" },
  { title: "Kashmir", redirect: "#" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <nav className="mt-gap relative z-10">
      <Wrapper>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="logo" height={83} width={83} unoptimized />
          </Link>

          <ul className="flex items-center gap-gapLargest">
            {NavItems.map((item, index) => (
              <li
                key={index}
                className="relative text-fontDesk font-bold flex items-center gap-gapSmallest uppercase"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown === true ? (
                  <span className="flex items-center gap-gapSmallest cursor-pointer hover:text-navyBlue transition-all duration-300">
                    {item.name}
                    <Image
                      src={dropDownIcon}
                      alt="dropdown-icon"
                      width={12}
                      height={12}
                      unoptimized
                    />
                  </span>
                ) : (
                  <Link
                    className="hover:text-navyBlue transition-all duration-300"
                    href={item.url}
                  >
                    {item.name}
                  </Link>
                )}

                {item.image && (
                  <Image
                    src={bookFlight}
                    alt="book-flight"
                    height={52}
                    width={52}
                    unoptimized
                  />
                )}
                {item.dropdown === true && index === activeIndex && (
                  <DropdownContent className="min-w-[11rem] top-full right-[-1.2rem] ">
                    <DropdownCommon data={topDestDropdownData} />
                  </DropdownContent>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-gap">
            <span className="w-[2.25rem] h-[2.25rem] bg-navyBlue rounded-full flex items-center justify-center">
              <Image
                src={phone}
                alt="phone"
                height={15}
                width={15}
                unoptimized
              />
            </span>
            <div className="flex flex-col">
              <span className="text-fontDeskLarge font-bold">
                + 91 891 731 3559
              </span>
              <span className="text-fontDeskSmall">24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
