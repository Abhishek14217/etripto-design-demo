import Image from "next/image";
import Link from "next/link";

import camel from "@/images/camel.png";

const BannerContent = () => {
  return (
    <div className="relative h-[13rem] lg:h-[auto]">
      <Image src={camel} alt="camel" className="size-full" />
      <div className="lg:w-5/12 absolute top-gapSmall right-gap lg:top-0 lg:right-0 text-white flex flex-col justify-center lg:h-full items-start">
        <div className="border-l-4 border-white pl-gap mb-gap">
          <h4 className="text-fontDeskLarge lg:text-2xl font-semibold">
            Jaisalmer
          </h4>
          <h3 className="text-2xl lg:text-5xl text-sunflower font-bold">
            Thar Desert
          </h3>
        </div>
        <h4 className="text-fontDeskLarge lg:text-2xl font-semibold mb-0 lg:mb-gapSmall">
          Delhi to Jaisalmer
        </h4>
        <h5 className="text-fontDeskLarge lg:text-2xl font-semibold">
          2 Days | 29 Dec | From ₹80,000
        </h5>

        <Link
          href="#"
          className="bg-sunflower px-3 py-1 lg:px-6 lg:py-2 text-black text-fontDeskSmall lg:text-fontDesk mt-gap lg:mt-gapLargest rounded"
        >
          Book now
        </Link>
        <span className="text-[0.6rem] lg:text-xs mt-1">*T&C Apply</span>
      </div>
    </div>
  );
};

export default BannerContent;
