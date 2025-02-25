import Image from "next/image";

import topDestbanner from "@/images/top-dest-bg.png";
import parachute from "@/images/parachute-small.svg";

import TopDestinationContent from "./TopDestinationContent";

type TopDestinationProps = {
  isMob?: boolean;
};

const TopDestination: React.FC<TopDestinationProps> = ({ isMob }) => {
  return isMob ? (
    <div className="bg-softGray h-[12.75rem] mt-gapLargest relative pt-gap">
      <Image
        src={parachute}
        alt="top-dest-banner"
        className="absolute top-[1rem] left-[1rem]"
        width={50}
        height={50}
        unoptimized
      />
      <TopDestinationContent />
      <Image
        src={parachute}
        alt="top-dest-banner"
        className="absolute top-[1rem] right-[1rem]"
        width={50}
        height={50}
        unoptimized
      />
    </div>
  ) : (
    <div className="mt-sectionGap relative h-[20.75rem]">
      <Image src={topDestbanner} alt="top-dest-banner" fill />
      <TopDestinationContent />
    </div>
  );
};

export default TopDestination;
