import Link from "next/link";
import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";

import lookingForHelp from "@/images/looking-for-help.svg";

const TopDestinationContent = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-center relative z-10 text-center">
        <SectionHeaderCommon
          mainText="Top Destination"
          middleText="<b>Let’s Explore</b> your Dream Destination here!"
          subText="We have recommended popular destinations every week so you don’t
        have to worry about your dream destination with traver."
          containerClass="lg:w-7/12"
          middleTextFontSizeClass="text-xl lg:text-3xl"
        />

        <div className="relative bg-navyBlue text-white text-start lg:w-[60%] mx-auto p-gap rounded-xl lg:rounded-3xl mt-gap lg:mt-[2.5rem]">
          <h5 className="text-fontDeskLarge mb-gapSmall lg:mb-0 lg:text-fontDeskLargest font-bold">
            Hey! Are you looking for help ?
          </h5>
          <p className="text-white text-fontDeskSmall lg:text-fontDesk max-w-[75%] lg:max-w-[unset]">
            Got it! Let me know if you'd like help with any travel plans or
            itineraries. 🌍✈️
          </p>
          <Link
            href="#"
            className="text-navyBlue inline-block bg-primaryCyan rounded mt-gapMed text-fontDeskSmall lg:text-fontDesk px-3 py-1 lg:px-6 lg:py-2"
          >
            Get a Quote
          </Link>
          <Image
            src={lookingForHelp}
            alt="looking-for-help"
            width={170}
            height={150}
            unoptimized
            className="absolute right-0 bottom-[10%] lg:bottom-0 w-[7rem] h-[7rem] lg:w-[10.625rem] lg:h-[9.375rem]"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default TopDestinationContent;
