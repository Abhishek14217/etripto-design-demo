import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";
import BannerContent from "./BannerContent";

import accomodation from "@/images/accomodation-new.svg";
import meals from "@/images/meals-new.svg";
import flights from "@/images/flights-new.svg";
import cab from "@/images/cab-new.svg";

const chooseUsData = [
  {
    image: accomodation,
    title: "Accommodation",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    image: meals,
    title: "All meals",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    image: flights,
    title: "Flight",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    image: cab,
    title: "Cab",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

type WhyChooseUsProps = {
  isMob?: boolean;
};

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ isMob }) => {
  return (
    <>
      {/*--------------------------------------- BANNER--------------------------------------------------- */}
      <div className="mt-gapLargest lg:mt-sectionGap">
        {isMob ? (
          <BannerContent />
        ) : (
          <Wrapper>
            <BannerContent />
          </Wrapper>
        )}
      </div>

      {/* --------------------------------WHY CHOOSE US SECTION------------------------------------- */}
      <div className="bg-mintLight mt-gapLargest lg:mt-sectionGap py-gap">
        <Wrapper>
          <SectionHeaderCommon
            mainText="Why Choose Us"
            subText="All Inclusive Trip Features"
          />

          <div className="lg:grid lg:grid-cols-4 lg:gap-sectionGap mt-gap lg:mt-gapLargest ">
            {chooseUsData.map((item, index) => (
              <div
                key={index}
                className="mb-gap lg:mb-0 last:mb-0 flex gap-gap lg:block"
              >
                <Image
                  src={item.image}
                  alt="choose-us-img"
                  width={70}
                  height={70}
                  unoptimized
                />
                <div>
                  <h5 className="lg:mt-gap text-fontDesk lg:text-fontDeskLarge">
                    {item.title}
                  </h5>
                  <p className="text-fontDeskSmall lg:text-fontDesk text-steelGray">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default WhyChooseUs;
