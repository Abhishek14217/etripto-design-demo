import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";

import bookFlight from "@/images/book-flight-white.svg";

type SharedBannerProps = {
  bg: StaticImageData;
  title: string;
  tagline: string;
  headerClass?: string;
  packageName?: string;
};

const SharedBanner: React.FC<SharedBannerProps> = ({
  bg,
  title,
  tagline,
  headerClass,
  packageName,
}) => {
  return (
    <div className="relative mt-gapLargest h-[13rem]">
      <Image src={bg} alt="banner" priority={true} fill />
      <div className="absolute inset-0 flex flex-col gap-gapSmall justify-center items-center z-9">
        <div className="text-fontDesk text-white">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          {">"}
          <Link className="hover:underline" href="#">
            Top destinations
          </Link>
          {">"}
          {packageName ? (
            <>
              <Link className="hover:underline" href="#">
                Jammu and Kashmir
              </Link>
              {">"}
              <span className="font-bold">{packageName}</span>
            </>
          ) : (
            <span className="font-bold">Jammu and Kashmir</span>
          )}
        </div>
        <SectionHeaderCommon
          mainText={title}
          subText={tagline}
          img={bookFlight}
          color="white"
          headerClass={headerClass}
        />
      </div>
    </div>
  );
};

export default SharedBanner;
