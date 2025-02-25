import Link from "next/link";
import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";

import downArrow from "@/icons/down-arrow.svg";

const dummyTravelPackagesText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const BestTravelPackages = () => {
  return (
    <div className="mt-gapLargest lg:mt-sectionGap">
      <Wrapper>
        <h4 className="text-black text-fontDeskLarge lg:text-fontDeskLargest font-bold">
          Find the best travel packages at Etripto
        </h4>
        <div className="mt-gapSmall">
          <p className="text-fontDesk text-neutralGray mb-gapSmall">
            {dummyTravelPackagesText}
          </p>
          <p className="text-fontDesk text-neutralGray mb-gapSmall">
            {dummyTravelPackagesText}
          </p>
          <p className="text-fontDesk text-neutralGray">
            {dummyTravelPackagesText}
          </p>
        </div>
        <Link
          href="#"
          className="flex text-navyBlue text-fontDeskSmall items-center gap-gapSmall font-bold mt-gap"
        >
          Read More
          <Image
            src={downArrow}
            alt="downa-arrow"
            height={11}
            width={11}
            unoptimized
            className="rotate-[-90deg]"
          />
        </Link>
      </Wrapper>
    </div>
  );
};

export default BestTravelPackages;
