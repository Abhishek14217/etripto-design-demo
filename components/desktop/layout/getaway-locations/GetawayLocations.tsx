import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";
import GetawayLocationCard from "./GetawayLocationCard";

import cloud from "@/images/cloud.svg";
import getAwayLocationOne from "@/images/places-take-one-new.png";
import getAwayLocationTwo from "@/images/places-take-two.png";
import getAwayLocationThree from "@/images/places-take-three.png";
import getAwayLocationFour from "@/images/places-take-four.png";
import getAwayLocationFive from "@/images/places-take-five.png";

const getAwayLocationsData = [
  {
    image: getAwayLocationOne,
    locationName: "Munnar",
    tourCount: "16",
    tourPrice: "₹ 12,500",
    redirect: "#",
  },
  {
    image: getAwayLocationTwo,
    locationName: "Mount Abu",
    tourCount: "18",
    tourPrice: "₹ 13,500",
    redirect: "#",
  },
  {
    image: getAwayLocationThree,
    locationName: "Spiti Valley",
    tourCount: "14",
    tourPrice: "₹ 10,500",
    redirect: "#",
  },
  {
    image: getAwayLocationFour,
    locationName: "Desert Safari",
    tourCount: "18",
    tourPrice: "₹ 16,500",
    redirect: "#",
  },
  {
    image: getAwayLocationFive,
    locationName: "Kasol",
    tourCount: "8",
    tourPrice: "₹ 8,500",
    redirect: "#",
  },
];

type GetawayLocationsProps = {
  isMob?: boolean;
};

const GetawayLocations: React.FC<GetawayLocationsProps> = ({ isMob }) => {
  const firstPart = getAwayLocationsData.slice(0, 2); // First 2 elements(DESKTOP)
  const secondPart = getAwayLocationsData.slice(2); // Remaining 3 elements(DESKTOP)

  const firstPartMob = getAwayLocationsData.slice(0, 1); // First element(MOBILE)
  const secondPartMob = getAwayLocationsData.slice(1); // Remaining 4 elements(MOBILE)

  return (
    <div className="bg-lightGray mt-gapLargest lg:mt-sectionGap relative py-gap px-0 lg:p-gap">
      {!isMob && (
        <Image
          src={cloud}
          alt="cloud"
          className="absolute top-[1.5rem] w-[13rem]"
        />
      )}
      <Wrapper>
        <SectionHeaderCommon
          mainText="Places we can take you to"
          subText="Our most visited sights are here for you to explore!"
        />

        {isMob ? (
          <>
            {/* Mobile Layout */}
            <div className="block mt-gap">
              {firstPartMob.map((item, index) => (
                <GetawayLocationCard key={index} data={item} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-gap mt-gap">
              {secondPartMob.map((item, index) => (
                <GetawayLocationCard key={index} data={item} />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Desktop Layout */}
            <div className="grid grid-cols-[2fr_1fr] gap-gapMed mt-gap">
              {firstPart.map((item, index) => (
                <GetawayLocationCard key={index} data={item} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-gapMed mt-gap">
              {secondPart.map((item, index) => (
                <GetawayLocationCard key={index} data={item} />
              ))}
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default GetawayLocations;
