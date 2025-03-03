import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { IndGroupedPackagesData } from "@/types/grouped-packages-data";

import domLinkArrow from "@/icons/dom-link-arrow.svg";

type LocationCardProps = {
  data: IndGroupedPackagesData;
};

const LocaitonCard: React.FC<LocationCardProps> = ({ data }) => {
  return (
    <div className="relative mr-0 min-w-[13.5rem] md:min-w-[18rem] lg:min-w-[unset] lg:mr-gap ">
      <Image src={data.image} alt="destination" className="size-full" />

      <div className="p-gap absolute bottom-0 left-0 right-0">
        <span className="text-white text-fontDeskLarge font-bold">
          {data.place}
        </span>
        <div className="flex justify-between items-center mt-gapSmall">
          <h6 className="flex items-center gap-gapSmallest text-white text-fontDeskSmall">
            Starting From
            <span className="bg-white text-black font-extrabold px-gapSmall rounded">
              {data.price}
            </span>
          </h6>
          <Link href={data.redirect}>
            <Image
              src={domLinkArrow}
              alt="dom-link-arrow"
              height={20}
              width={20}
              unoptimized
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocaitonCard;
