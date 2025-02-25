import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type NYTripBannerContentProps = {
  bg: StaticImageData;
  city: string;
  redirect: string;
  suppImg?: StaticImageData;
  right?: boolean;
};

const NYTripBannerContent: React.FC<NYTripBannerContentProps> = ({
  bg,
  city,
  redirect,
  suppImg,
  right,
}) => {
  return (
    <div className="relative h-[8rem] lg:h-[auto]">
      {suppImg && (
        <Image
          width={right ? 80 : 100}
          src={suppImg}
          alt="supp-img"
          className={`absolute ${
            right ? "right-[-5rem] bottom-0" : "left-[-6.5rem] top-[4rem]"
          } `}
        />
      )}

      <Image src={bg} alt="ny-banner-one" className="size-full" />
      <div className="absolute top-2 lg:top-12 left-[35%] flex flex-col lg:flex-row text-center lg:text-start items-center gap-1 lg:gap-[6rem]">
        <h4
          style={{ fontFamily: "Bebas Neue, serif" }}
          className=" text-2xl lg:text-5xl text-navyBlue capitalize"
        >
          {city}
          <br />
          <span className="text-white">NEW YEAR TRIP</span>
        </h4>
        <Link
          href={redirect}
          className="bg-navyBlue px-3 py-1 lg:px-6 lg:py-2 text-white text-fontDeskSmall lg:text-fontDesk rounded capitalize"
        >
          get a quote
        </Link>
      </div>
    </div>
  );
};

export default NYTripBannerContent;
