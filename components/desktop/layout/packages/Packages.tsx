"use client";
import Image, { StaticImageData } from "next/image";

import Slider from "react-slick";
import Wrapper from "@/components/common/ui/Wrapper";
import LocationCard from "../location-card/LocationCard";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";
import Button from "@/components/common/ui/Button";
import { GroupedPackagesData } from "@/types/grouped-packages-data";

type PackagesProps = {
  title: string;
  subtitle: string;
  redirectLink: string;
  data: GroupedPackagesData;
  isMob?: boolean;
  suppImg?: StaticImageData;
};

const Packages: React.FC<PackagesProps> = ({
  title,
  subtitle,
  redirectLink,
  data,
  isMob,
  suppImg,
}) => {
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
    <div className="mt-gap lg:mt-sectionGap relative">
      <Wrapper>
        <SectionHeaderCommon
          mainText={title}
          subText={subtitle}
          hasBtn
          redirectLink={redirectLink}
          isMob={isMob}
        />
        <div className="mt-gapMed lg:mt-gap domestic-slider">
          {isMob ? (
            <div className="flex gap-gap overflow-x-scroll no-scrollbar">
              {data.map((item, index) => (
                <LocationCard data={item} key={index} />
              ))}
            </div>
          ) : (
            <Slider {...settings}>
              {data.map((item, index) => (
                <LocationCard data={item} key={index} />
              ))}
            </Slider>
          )}
        </div>
        {isMob && (
          <div className="flex items-center justify-center mt-gapLarge">
            <Button redirect={redirectLink} />
          </div>
        )}
      </Wrapper>
      {!isMob && suppImg && (
        <Image
          width={100}
          src={suppImg}
          alt="balloon"
          className="absolute left-0 top-[8rem]"
        />
      )}
    </div>
  );
};

export default Packages;
