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

const WhyChooseUs = () => {
  return (
    <>
      {/*--------------------------------------- BANNER--------------------------------------------------- */}
      <div className="mt-gapLargest lg:mt-sectionGap">
        <div className="lg:hidden md:hidden">
          <BannerContent />
        </div>
        <div className="lg:block md:block hidden">
          <Wrapper>
            <BannerContent />
          </Wrapper>
        </div>
      </div>

      {/* --------------------------------WHY CHOOSE US SECTION------------------------------------- */}
      <div className="bg-mintLight mt-gapLargest lg:mt-sectionGap py-gap">
        <Wrapper>
          <SectionHeaderCommon
            mainText="Why Choose Us"
            subText="All Inclusive Trip Features"
          />

          <div className="lg:grid lg:grid-cols-4 lg:gap-sectionGap lg:mt-gapLargest md:grid md:grid-cols-2 md:gap-6 mt-gap ">
            {chooseUsData.map((item, index) => (
              <div
                key={index}
                className="mb-gap lg:mb-0 md:mb-0 last:mb-0 flex gap-gap lg:block"
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

//-----------------------EXTRA CODE-------------------
{
  /* {isMob ? (
          <BannerContent />
        ) : (
          <Wrapper>
            <BannerContent />
          </Wrapper>
        )} */
}
