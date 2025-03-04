import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";

import protectionGear from "@/images/protection-gear.png";
import sanitizedPremises from "@/images/sanitized-premises.png";
import socialDistancing from "@/images/social-distancing.png";
import temperatureChecks from "@/images/temperature-checks.png";
import coconutReverse from "@/images/coconut-reverse.svg";

const safeHolidaysData = [
  {
    image: protectionGear,
    title: "Availability of Protection Gear",
    content:
      "Ensuring availability of sanitizers, masks & gloves during commute and at hotels",
  },
  {
    image: sanitizedPremises,
    title: "Sanitized Premises",
    content: "Thoroughly sanitized commute Vehicles, Hotel rooms and premises",
  },
  {
    image: socialDistancing,
    title: "Social Distancing Measures",
    content:
      "Maintaining social distancing measures at hotel premises like restaurants, bars, lobby, areas etc",
  },
  {
    image: temperatureChecks,
    title: "Regular Temperature Checks",
    content: "Regular screening of Hotel Staff, Guests, Drivers and Guides",
  },
];

const SafeHolidays = () => {
  return (
    <div className="bg-softGray mt-gapLargest lg:mt-sectionGap p-gap relative">
      <Wrapper>
        <SectionHeaderCommon
          mainText="Our Commitment to Safe Holidays"
          subText="We are actively working with our holiday partners to maintain the safety measures for providing you a risk free vacation"
        />

        <div className="mt-gap flex flex-col lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 gap-gap">
          {safeHolidaysData.map((item, index) => (
            <div key={index} className="flex flex-col gap-gapSmall">
              <Image
                src={item.image}
                alt="safe-holidays-img"
                className="lg:min-h-[12rem] w-full"
              />
              <h4 className="text-black text-fontDesk lg:text-fontDeskLarge font-bold">
                {item.title}
              </h4>
              <p className="text-fontDeskSmall lg:text-fontDesk text-steelGray">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>

      <Image
        src={coconutReverse}
        alt="coconut-rev"
        width={113}
        className="absolute right-[1rem] bottom-0 hidden xl:block"
        unoptimized
      />
    </div>
  );
};

export default SafeHolidays;
