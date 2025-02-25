import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Button from "@/components/common/ui/Button";

import star from "@/icons/star.svg";
import compare from "@/icons/compare.svg";
import wishlist from "@/icons/wishlist.svg";
import talkToExpert from "@/icons/talk-to-expert.svg";

type CatPackagesViewCardProps = {
  data: {
    image: StaticImageData;
    title: string;
    duration: string;
    reviewCount: string;
    stars: string;
    datesFillingFast: { date: string; seats: string }[];
    departures: { dates: string; cities: string };
    cost: string;
    emi: string;
    tourType: String[];
  };
  view: string;
};

const CatPackagesViewCard: React.FC<CatPackagesViewCardProps> = ({
  data,
  view,
}) => {
  return (
    <div
      className={`border border-gray-300 p-gap rounded-xl bg-white ${
        view === "list" ? "grid grid-cols-3 gap-gap" : ""
      }`}
    >
      {/*-------------- IMAGE -------------------*/}
      <div className="relative overflow-hidden">
        <Image src={data.image} alt="image" className="size-full rounded-xl" />
        <div className="absolute right-gap top-gap flex flex-col gap-1 items-end">
          {data.tourType.map((subitem, subindex) => (
            <span
              key={subindex}
              className="text-black-600 text-fontDeskSmall px-3 py-1 rounded bg-primaryCyan last:bg-white last:text-deepIndigo w-fit"
            >
              {subitem}
            </span>
          ))}
        </div>
      </div>
      {/*--------------DETAIL -------------------*/}
      <div
        className={`package-details ${
          view === "list" ? "my-0" : "my-gapSmall"
        }`}
      >
        <div className={`flex justify-between items-start`}>
          <div className="w-[15rem]">
            <h3 className="text-navyBlue text-fontDeskLarge font-bold">
              {data.title}
            </h3>
            <p className="text-black text-fontDeskSmall">
              Kashmir Tour Package Srinagar, Gulmarg, Pahalgam
            </p>
          </div>
          <div className="flex flex-col gap-gapSmall items-end">
            <span className="text-steelGray text-fontDeskSmall">
              {data.duration}
            </span>
            <div className="flex flex-col items-end">
              <span className="flex gap-gapSmallest">
                {Array.from({ length: Number(data.stars) }, (_, index) => (
                  <Image
                    key={index}
                    src={star}
                    alt="star"
                    width={15}
                    height={15}
                  />
                ))}
              </span>
              <span className="text-[0.625rem] text-steelGray">
                {data.reviewCount} Reviews
              </span>
            </div>
          </div>
        </div>
        {/*--------------DATES-------------------*/}
        <div className="border-t border-gray-300 mt-gapSmall pt-gapSmall">
          <h6 className="text-fontDeskSmall text-red-400 font-semibold">
            Dates Filling Fast
          </h6>
          <div className="flex gap-gapSmallest">
            {data.datesFillingFast.map((item, index) => (
              <h6 key={index} className="text-fontDeskSmall text-black-600">
                {item.date}
                <span className="text-red-400 font-semibold">
                  {" "}
                  {item.seats}
                </span>
              </h6>
            ))}
          </div>
        </div>
        {/*--------------DEPARTURES-------------------*/}
        <div className="border-t border-gray-300 mt-gapSmall pt-gapSmall">
          <h6 className="text-fontDeskSmall font-semibold">Departures</h6>
          <h6 className="text-fontDeskSmall text-navyBlue font-semibold">
            {data.departures.dates}
            <span className="text-gray-400 font-normal">
              {" "}
              from {data.departures.cities}
            </span>
          </h6>
        </div>
      </div>
      {/*--------------PRICING-------------------*/}
      <div
        className={`border border-gray-300 p-0 bg-softBlue overflow-hidden rounded-md`}
      >
        <div className="flex justify-between mb-gap p-gapMed pb-0">
          <div className="text-fontDeskSmall text-gray-500">
            Starts From{" "}
            <span className="text-fontDesk text-navyBlue font-semibold">
              {data.cost}
            </span>{" "}
            <br /> Per person on twin sharing
          </div>
          <div className="text-end text-fontDeskSmall text-gray-500">
            EMI from
            <span className="block text-black text-fontDesk font-bold">
              {data.emi}
            </span>
          </div>
        </div>

        <div
          className={`flex justify-between mb-gap px-gapMed py-0 ${
            view === "list" ? "flex-col gap-gap" : ""
          }`}
        >
          <div
            className={`gap-gapSmall items-center ${
              view === "list" ? "grid grid-cols-2" : "flex"
            }`}
          >
            <button className="border border-gray-400 text-navyBlue text-fontDeskSmall rounded-md px-3 py-1 flex items-center gap-1 bg-white justify-center">
              <Image src={compare} alt="compare" unoptimized />
              Compare
            </button>
            <button className="border border-gray-400 text-navyBlue text-fontDeskSmall rounded-md px-3 py-1 flex items-center gap-1 bg-white justify-center">
              <Image src={wishlist} alt="wishlist" unoptimized />
              Wishlist
            </button>
          </div>
          <Button
            btnText="View Tour Details"
            className={`text-fontDeskSmall px-3 py-1  ${
              view === "list" ? "w-full text-center" : ""
            } `}
            redirect="#"
          />
        </div>

        <Link
          href="#"
          className="flex gap-gapSmall items-center bg-navyBlue justify-center p-gapSmall"
        >
          <Image src={talkToExpert} alt="talk-expert" unoptimized />
          <span className="text-fontDeskSmall text-white underline ">
            Talk to a Expert
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CatPackagesViewCard;
