"use client";

import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";
import DestByThemeCard from "./DestByThemeCard";
import Button from "@/components/common/ui/Button";
import Slider from "react-slick";

import honeymoon from "@/images/honeymoon.png";
import family from "@/images/family.png";
import friends from "@/images/friends.png";
import solo from "@/images/solo.png";
import adventure from "@/images/adventure.png";
import nature from "@/images/nature.png";

type DestByThemeProps = {
  isMob?: boolean;
};

const DestByThemeData = [
  {
    image: honeymoon,
    theme: "Honeymoon/Romantic",
    destCount: "60+",
    redirect: "#",
  },
  {
    image: family,
    theme: "Family",
    destCount: "55+",
    redirect: "#",
  },
  {
    image: friends,
    theme: "Friends/Group",
    destCount: "40+",
    redirect: "#",
  },
  {
    image: solo,
    theme: "Solo",
    destCount: "70+",
    redirect: "#",
  },
  {
    image: adventure,
    theme: "Adventure",
    destCount: "10+",
    redirect: "#",
  },
  {
    image: nature,
    theme: "Nature",
    destCount: "20+",
    redirect: "#",
  },
  {
    image: friends,
    theme: "Friends/Group",
    destCount: "40+",
    redirect: "#",
  },
];

const DestByTheme: React.FC<DestByThemeProps> = ({ isMob }) => {
  var settings = {
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };
  return (
    <div className="mt-[9rem] lg:mt-sectionGap">
      <Wrapper>
        <SectionHeaderCommon
          mainText="Explore destinations by theme"
          subText="Our most visited sights are here for you to explore!"
          isMob={isMob}
          hasBtn
          redirectLink="#"
        />
        <div className="mt-gapMed lg:mt-gap dest-by-theme-slider">
          {isMob ? (
            <div className="flex gap-gap overflow-x-scroll no-scrollbar">
              {DestByThemeData.map((item, index) => (
                <DestByThemeCard
                  key={index}
                  image={item.image}
                  theme={item.theme}
                  destCount={item.destCount}
                  redirect={item.redirect}
                />
              ))}
            </div>
          ) : (
            <Slider {...settings}>
              {DestByThemeData.map((item, index) => (
                <DestByThemeCard
                  key={index}
                  image={item.image}
                  theme={item.theme}
                  destCount={item.destCount}
                  redirect={item.redirect}
                />
              ))}
            </Slider>
          )}
        </div>
        {isMob && (
          <div className="flex items-center justify-center mt-gapLarge">
            <Button redirect="#" />
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default DestByTheme;
