import Image from "next/image";
import Link from "next/link";

import star from "@/icons/star.svg";
import tourManager from "@/images/tour-manager.svg";
import hotel from "@/images/hotel.svg";
import meals from "@/images/meals-new.svg";
import transport from "@/images/cab-new.svg";
import sightSeeing from "@/images/sight-seeing.svg";
import flight from "@/images/flights-new.svg";
import paperPlaneSmall from "@/icons/paper-plane-small.svg";

const tourIncludesData = [
  { image: tourManager, title: "Tour Manager" },
  { image: hotel, title: "Hotel" },
  { image: meals, title: "Meals" },
  { image: transport, title: "Transport" },
  { image: sightSeeing, title: "Sight Seeing" },
  { image: flight, title: "Flight" },
];

const tourHighlightsData = [
  {
    title: "Tour Highlights:",
    content: [
      "Pahalgam",
      "Saffron fields at Pampore",
      "Walk & Click tour of Betaab Valley",
      "Photo stop at Apple Valley and Walnut Plantations",
      "Kashmiri Cricket Bat Factory",
      "Avantipur ruins",
      "Gondola ride to Apharwat point",
    ],
  },
  {
    title: "Why travel with Etripto",
    content: [
      "Expert tour manager all throughout the tour.",
      "All meals included in tour price.",
      "Music, fun and games everyday.",
    ],
  },
];

const TourHighlights = () => {
  const starCount = 5;

  return (
    <>
      <div className="package-title">
        {/* ------------------------TOUR TYPE----------------------------------- */}
        <div className="flex gap-1">
          <span className="text-black-600 text-fontDeskSmall px-3 py-1 rounded bg-primaryCyan w-fit">
            Group
          </span>
          <span className="text-deepIndigo text-fontDeskSmall px-3 py-1 rounded bg-white w-fit border border-gray-100">
            Family
          </span>
        </div>

        {/* ------------------------PACKAGE TITLE----------------------------------- */}
        <div className="mt-gapSmall">
          <h2 className="text-fontDeskLargest text-navyBlue font-bold">
            Kashmir Escape
          </h2>
          <div className="flex gap-gapSmall items-center">
            <span className="flex gap-gapSmallest items-center">
              {Array.from({ length: starCount }).map((_, index) => (
                <Image
                  key={index}
                  src={star}
                  alt="star"
                  width={12}
                  height={12}
                  unoptimized
                />
              ))}
            </span>

            <span className="text-[0.625rem] text-steelGray">50 Reviews</span>
          </div>
          <div className="mt-gapSmall text-fontDeskSmall">
            <p className="text-black font-medium">
              Kashmir Tour Package Srinagar, Gulmarg, Pahalgam
            </p>
            <p className="text-steelGray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <Link
            href="#"
            className="block mt-gap text-navyBlue font-semibold text-fontDeskSmall w-fit"
          >
            View daywise tour itinerary
          </Link>
        </div>
      </div>

      <div className="tour-highlights mt-gap border-t border-gray-300 pt-gap">
        {/* ------------------------TOUR INCLUDE----------------------------------- */}
        <div className="flex flex-col gap-gapMed">
          <h2 className="text-fontDeskLarge text-navyBlue font-semibold">
            Tour Include:
          </h2>
          <div className="flex gap-gap">
            {tourIncludesData.map((item, index) => (
              <div className="flex flex-col gap-1 items-center" key={index}>
                <Image
                  src={item.image}
                  alt="image"
                  width={40}
                  height={40}
                  unoptimized
                />
                <span className="text-fontDeskSmall">{item.title}</span>
              </div>
            ))}
          </div>
          <span className="text-gray-400 text-fontDeskSmall">
            *Economy class air travel is included for all departure cities,
            except for joining/leaving points; Taxes Extra
          </span>
        </div>

        {/* ------------------------TOUR HIGHLIGHTS AND WHY TRAVEL----------------------------------- */}
        <div className="flex gap-gap mt-gap">
          {tourHighlightsData.map((item, index) => (
            <div key={index} className="w-1/2">
              <h3 className="text-fontDeskLarge text-navyBlue font-semibold mb-gapSmall">
                {item.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {item.content.map((subitem, subindex) => (
                  <li
                    key={subindex}
                    className="flex items-center gap-1 text-fontDeskSmall font-medium"
                  >
                    <Image
                      src={paperPlaneSmall}
                      alt="paper-plane"
                      height={16}
                      width={16}
                      unoptimized
                    />
                    {subitem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TourHighlights;
