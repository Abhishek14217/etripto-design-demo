import { useState } from "react";
import Image from "next/image";

import plus from "@/icons/plus.svg";
import minus from "@/icons/minus.svg";

const itineraryData = [
  {
    day: "Day 1",
    date: "24 Feb, 25",
    location: "Srinagar (4 Nights)",
    content:
      "What you just did was click on an accordion. Essentially, an accordion is a graphical control element comprising a vertically stacked list of of items that can be expanded or collapsed to reveal content.",
  },
  {
    day: "Day 2",
    date: "25 Feb, 25",
    location: "Srinagar – Pahalgam – Srinagar",
    content:
      "An accordion is great for hiding information that you only want to be display when a user is interested. For example: Using an accordion is great on a frequently asked questions page, especially if you have a bunch of questions!",
  },
  {
    day: "Day 3",
    date: "26 Feb, 25",
    location: "Srinagar – Gulmarg – Srinagar",
    content:
      "I'm always open to helping you out. If you wish to contact me, my Twitter is always open!",
  },
  {
    day: "Day 4",
    date: "27 Feb, 25",
    location: "Srinagar",
    content:
      "Essentially, an accordion is a graphical control element comprising a vertically stacked list of of items that can be expanded or collapsed to reveal content.",
  },
  {
    day: "Day 5",
    date: "28 Feb, 25",
    location: "Srinagar – Departure",
    content:
      "I'm always open to helping you out. If you wish to contact me, my Twitter is always open!",
  },
];

const Itinerary = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [isAllOpen, setIsAllOpen] = useState(false);

  const handleActiveIndex = (index: number) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleAllSections = () => {
    if (isAllOpen) {
      setActiveIndexes([]); // Close all
    } else {
      setActiveIndexes(itineraryData.map((_, i) => i)); // Open all
    }
    setIsAllOpen(!isAllOpen);
  };

  return (
    <div className="mt-gap">
      <div className="flex items-center justify-between mb-gap">
        <h5 className="text-fontDesk font-semibold">
          Itinerary{" "}
          <small className="text-[0.625rem] text-steelGray italic font-normal">
            (Day Wise)
          </small>
        </h5>

        <button
          className="text-fontDeskSmall text-navyBlue font-semibold"
          onClick={toggleAllSections}
        >
          {isAllOpen ? "Hide all days" : "View all days"}
        </button>
      </div>
      {itineraryData.map((item, index) => (
        <div
          key={index}
          className="border-l border-dashed border-[#D0D0D0] pl-gap pb-gap ml-gap"
        >
          <div
            className="itinerary-accordion-header relative flex justify-between items-center cursor-pointer"
            onClick={() => handleActiveIndex(index)}
          >
            <div className="flex flex-col gap-gapSmallest text-fontDeskSmall font-semibold">
              {item.day} / {item.date}
              <span className="text-steelGray">{item.location}</span>
            </div>
            <Image
              src={activeIndexes.includes(index) ? minus : plus}
              alt="plus"
              width={13}
              height={13}
              unoptimized
            />
          </div>
          <p
            className={`${
              activeIndexes.includes(index) ? "max-h-[5rem]" : "max-h-0"
            } overflow-hidden transition-[max-height] duration-500 ease-in-out text-fontDeskSmall text-gray-400 mt-gapSmall`}
          >
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Itinerary;
