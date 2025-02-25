import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import timeClock from "@/icons/time-clock.svg";

type TopToursCardProps = {
  data: {
    image: StaticImageData;
    location: string;
    stayTime: string;
    price: string;
    redirect: string;
  };
};

const TopToursCard: React.FC<TopToursCardProps> = ({ data }) => {
  return (
    <div className="relative min-w-[15rem] lg:mr-gap lg:min-w-[unset]">
      <Image src={data.image} alt="top-tours" className="size-full" />

      <div className="bg-gray-50 absolute bottom-5 left-0 right-0 flex flex-col gap-gapSmallest p-gap z-10 w-11/12 mx-auto rounded-xl lg:rounded-3xl">
        <span className="text-fontDesk lg:text-fontDeskLarge font-bold text-center">
          {data.location} Backpacking
        </span>
        <span className="flex items-center justify-center gap-gapSmallest text-fontDeskSmall">
          <Image
            src={timeClock}
            alt="time-clock"
            width={14}
            height={14}
            unoptimized
          />
          {data.stayTime}
        </span>
        <div className="flex justify-between items-center bg-navyBlue px-gap py-gapSmall rounded">
          <h6 className="text-fontDesk border-r border-white pr-gapSmall lg:pr-[2.3rem] text-white">
            ₹ {data.price}
          </h6>
          <Link href={data.redirect} className="text-white text-fontDesk">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopToursCard;
