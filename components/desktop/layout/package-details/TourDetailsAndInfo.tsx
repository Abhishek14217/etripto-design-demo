import { useState } from "react";
import Image from "next/image";

import paperPlaneSmall from "@/icons/paper-plane-small.svg";

type TourDetailsAndInfoProps = {
  data: { title: string; content: string | string[] }[];
  mainTitle: string;
  tagline: string;
  info?: boolean;
};

const TourDetailsAndInfo: React.FC<TourDetailsAndInfoProps> = ({
  data,
  mainTitle,
  tagline,
  info,
}) => {
  const [selectedTab, setSelectedTab] = useState(data[0].title);

  const handleSelectedTab = (title: string) => {
    setSelectedTab(title);
  };

  return (
    <div className="mt-gap">
      <h5 className="text-fontDesk font-semibold">
        {mainTitle}{" "}
        <small className="text-[0.625rem] text-steelGray italic font-normal">
          {tagline}
        </small>
      </h5>
      <div className="mt-gap">
        <div className="flex gap-gapSmall items-center">
          {data.map((item, index) => (
            <button
              key={index}
              className={`${
                selectedTab === item.title
                  ? "bg-primaryCyan text-navyBlue"
                  : "bg-white"
              } text-fontDeskSmall border border-gray-200 px-5 py-2 rounded-md`}
              onClick={() => handleSelectedTab(item.title)}
            >
              {item.title}
            </button>
          ))}
        </div>

        {data.map((item, index) =>
          info ? (
            <div
              className={`${
                selectedTab === item.title
                  ? "flex flex-col gap-gapSmall"
                  : "hidden"
              } p-gap pt-5 border border-gray-300 rounded-xl -mt-4 -ml-3 -z-10`}
              key={index}
            >
              {Array.isArray(item.content) &&
                item.content.map((subitem, subindex) => (
                  <span
                    className={`flex items-center gap-gapSmall text-fontDeskSmall`}
                    key={subindex}
                  >
                    <Image src={paperPlaneSmall} alt="image" unoptimized />
                    {subitem}
                  </span>
                ))}
            </div>
          ) : (
            <p
              className={`${
                selectedTab === item.title ? "block" : "hidden"
              } p-gap pt-5 border border-gray-300 rounded-xl -mt-4 -ml-3 -z-10 text-fontDeskSmall`}
              key={index}
            >
              {item.content}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default TourDetailsAndInfo;
