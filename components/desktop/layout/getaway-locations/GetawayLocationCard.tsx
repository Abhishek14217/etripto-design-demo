import Image, { StaticImageData } from "next/image";

import Button from "@/components/common/ui/Button";

type GetawayLocationCardProps = {
  data: {
    image: StaticImageData;
    locationName: string;
    tourCount: string;
    tourPrice: string;
    redirect: string;
  };
};

const GetawayLocationCard: React.FC<GetawayLocationCardProps> = ({ data }) => {
  return (
    <div className="relative h-[10rem] lg:h-full">
      <Image
        src={data.image}
        alt={`${data.locationName}-image`}
        className="size-full"
      />
      <div className="absolute bottom-gapSmall lg:bottom-gap left-gapLarge">
        <h5 className="text-white text-fontDeskLarge lg:text-fontDeskLargest font-bold">
          {data.locationName}
        </h5>
        <div className="flex gap-gap lg:gap-0 justify-between mb-[0.3rem] mt-[0.2rem] lg:mb-gap lg:mt-gapSmall">
          <span className="text-white">
            <h6 className="text-fontDesk font-light">Tours</h6>
            <h6 className="text-fontDeskLarge font-bold">{data.tourCount}</h6>
          </span>
          <span className="text-white">
            <h6 className="text-fontDesk font-light">Starting</h6>
            <h6 className="text-fontDeskLarge font-bold">{data.tourPrice}</h6>
          </span>
        </div>
        <Button btnText="View Tours" redirect={data.redirect} />
      </div>
    </div>
  );
};

export default GetawayLocationCard;
