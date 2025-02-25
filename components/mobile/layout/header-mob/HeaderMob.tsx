"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import Input from "@/components/desktop/ui/Input";
import OffCanvas from "@/components/mobile/ui/OffCanvas";
import NavMob from "../navbar-mob/NavMob";

import { GiHamburgerMenu } from "react-icons/gi";
import logo from "@/images/etripto-logo.svg";
import signIn from "@/icons/signin.svg";
import phone from "@/icons/phone.svg";
import searchMob from "@/icons/search-mob.svg";
import downArrow from "@/icons/down-arrow.svg";

const HeaderMob = () => {
  const [sideBarOffCanvasOpen, setSideBarOffCanvasOpen] = useState(false);

  //--------------------SIDEBAR OFF-CANVAS CODE----------------------

  const toggleSideBarOffCanvas = () => {
    setSideBarOffCanvasOpen((prevState) => !prevState);
  };

  //--------------------SIDEBAR OFF-CANVAS CODE----------------------
  return (
    <>
      <OffCanvas
        close={toggleSideBarOffCanvas}
        offcanvas={sideBarOffCanvasOpen}
        className="left-0 -translate-x-full"
      >
        <NavMob close={toggleSideBarOffCanvas} />
      </OffCanvas>

      <div className="bg-blueDark pb-gap sticky top-[-0.5px] left-0 w-full" style={{zIndex: '100'}}>
        <Wrapper>
          <div className="flex justify-between items-center py-gap">
            <div className="flex items-center gap-gap ">
              <button onClick={toggleSideBarOffCanvas}>
                <GiHamburgerMenu size={20} style={{ fill: "white" }} />
              </button>
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  height={43}
                  width={43}
                  unoptimized
                />
              </Link>
            </div>

            <div className="flex items-center gap-gap">
              <div className="flex items-center gap-gapSmall">
                <span className="w-[1.5rem] h-[1.5rem] bg-navyBlue rounded-full flex items-center justify-center">
                  <Image
                    src={phone}
                    alt="phone"
                    height={12}
                    width={12}
                    unoptimized
                  />
                </span>
                <div className="flex flex-col text-white">
                  <span className="text-fontDeskSmall font-bold ">
                    + 91 891 731 3559
                  </span>
                  <span className="text-fontDeskSmallest">
                    24/7 Customer Support
                  </span>
                </div>
              </div>

              <Link href="#">
                <Image
                  src={signIn}
                  alt="signIn"
                  height={17}
                  width={17}
                  unoptimized
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-gapSmall rounded-3xl bg-white p-gapSmall w-[100%] mx-auto">
            <Image
              src={searchMob}
              alt="search"
              height={15}
              width={15}
              unoptimized
            />
            <Input
              inputType="text"
              name="mainSearchMob"
              placeholder="What are you looking for?"
              className="p-0 border-none rounded-none w-full"
            />
            <Image
              src={downArrow}
              alt="down-arrow"
              height={15}
              width={15}
              unoptimized
            />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default HeaderMob;
