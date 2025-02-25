import Link from "next/link";
import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import SharedBanner from "../shared-banner/SharedBanner";
import TourPlannerForm from "@/components/common/forms/TourPlannerForm";

import downArrow from "@/icons/down-arrow.svg";
import categoriesBanner from "@/images/categories-banner.png";

const CategoriesBanner = () => {
  return (
    <>
      <SharedBanner
        bg={categoriesBanner}
        title="Tour packages from Jammu and Kashmir"
        tagline="Explore Adventure and Fresh Air"
        headerClass="mb-0"
      />

      <div className="mt-sectionGap">
        <Wrapper>
          <div className="grid grid-cols-[1.5fr_1fr] gap-gap">
            <div>
              <h4 className="text-black text-fontDeskLarge lg:text-fontDeskLargest font-bold">
                Find the best travel packages at Etripto
              </h4>

              <p className="text-fontDesk text-neutralGray mb-gapSmall mt-gapSmall">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

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
            </div>

            <TourPlannerForm />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default CategoriesBanner;
