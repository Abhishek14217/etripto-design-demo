"use client";
import { useState } from "react";

import NeedToKnow from "./NeedToKnow";
import Itinerary from "./Itinerary";
import TourDetailsAndInfo from "./TourDetailsAndInfo";

const btnsData = [
  { title: "Itinerary" },
  { title: "Tour Details" },
  { title: "Tour Information" },
  { title: "Need To Know" },
  { title: "Upgrades" },
  { title: "Policy & Terms" },
];

const tourDetailsData = [
  {
    title: "Flight Details",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    title: "Accommodation Details",
    content:
      "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    title: "Reporting & Dropping",
    content:
      "It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker",
  },
];

const tourInfoData = [
  {
    title: "Tour Inclusions",
    content: [
      "To and Fro economy class airfare and airport taxes for tour guests as mentioned in the itinerary",
      "Baggage Allowance as per the airline policy for tour",
      "Tour Manager Services from Day 01 Meeting point till the dropping point on last day",
      "Travel by small cars or Tempo Travellers or Mini Buses or big buses depending on the respective tour group size.",
      "Entrance fees of all sightseeing places to be visited from inside",
      "Accommodation in comfortable and convenient hotels",
      "All Meals – Breakfast, Lunch, Dinner (set menu) as mentioned in the itinerary",
      "All Tips – Guide, Driver & Restaurants",
      "1 Lt. Water Bottle per person per day",
      "Travel Insurance for guests up to 70 years of age",
    ],
  },
  {
    title: "Tour Exclusions",
    content: [
      "Travel by small cars or Tempo Travellers or Mini Buses or big buses depending on the respective tour group size.",
      "Entrance fees of all sightseeing places to be visited from inside",
      "Accommodation in comfortable and convenient hotels",
      "All Meals – Breakfast, Lunch, Dinner (set menu) as mentioned in the itinerary",
      "All Tips – Guide, Driver & Restaurants",
      "1 Lt. Water Bottle per person per day",
      "Travel Insurance for guests up to 70 years of age",
    ],
  },
  {
    title: "Advance preparation",
    content: [
      "To and Fro economy class airfare and airport taxes for tour guests as mentioned in the itinerary",
      "Baggage Allowance as per the airline policy for tour",
      "Tour Manager Services from Day 01 Meeting point till the dropping point on last day",
      "All Meals – Breakfast, Lunch, Dinner (set menu) as mentioned in the itinerary",
      "All Tips – Guide, Driver & Restaurants",
      "1 Lt. Water Bottle per person per day",
      "Travel Insurance for guests up to 70 years of age",
    ],
  },
];

const ScrollSections = () => {
  const [selectedButton, setSelectedButton] = useState("Itinerary");

  const handleButtonClick = (title: string) => {
    setSelectedButton(title);
  };

  return (
    <div className="mt-gap border-t border-gray-300 pt-gap">
      <ul className="flex items-center gap-gapSmall">
        {btnsData.map((item, index) => (
          <li
            className={`${
              selectedButton === item.title
                ? "bg-primaryCyan text-navyBlue"
                : ""
            } cursor-pointer text-fontDeskSmall border border-gray-200 px-5 py-2 rounded-md`}
            key={index}
            onClick={() => handleButtonClick(item.title)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <Itinerary />
      <TourDetailsAndInfo
        data={tourDetailsData}
        mainTitle="Tour Details"
        tagline="Best facilities with no added cost"
      />
      <TourDetailsAndInfo
        data={tourInfoData}
        mainTitle="Tour Information"
        tagline="Read this to prepare for your tour in the best way!"
        info
      />
      <NeedToKnow />
    </div>
  );
};

export default ScrollSections;
