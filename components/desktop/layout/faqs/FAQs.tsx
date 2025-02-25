"use client";
import Image from "next/image";
import { useState } from "react";

import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";

import faqAccArrow from "@/icons/faq-acc-arrow.svg";

const faqData = [
  {
    title: "How many days are enough for Kashmir?",
    content:
      "4-5-night holiday packages to Kashmir are more than enough for you to explore the natural abundance of this city. Located in the Kashmir Valley, offering views of snow-capped mountains amidst a serene environment, Kashmir is a visual delight for all travellers. With 4-5-night Kashmir packages, you can enjoy a shikara ride on the Dal Lake, spend a night on a houseboat, visit the Mughal Garden, ride the second highest gondola at Gulmarg, explore Pahalgam, and do much more, with ease.",
  },
  {
    title: "Why should I visit Kashmir?",
    content:
      "Located in the Kashmir Valley, offering views of snow-capped mountains amidst a serene environment, Kashmir is a visual delight for all travellers. With 4-5-night Kashmir packages, you can enjoy a shikara ride on the Dal Lake, spend a night on a houseboat, visit the Mughal Garden, ride the second highest gondola at Gulmarg, explore Pahalgam, and do much more, with ease.",
  },
  {
    title: "What should I pack for Kashmir?",
    content:
      "4-5-night holiday packages to Kashmir are more than enough for you to explore the natural abundance of this city. Located in the Kashmir Valley, offering views of snow-capped mountains amidst a serene environment, Kashmir is a visual delight for all travellers. With 4-5-night Kashmir packages, you can enjoy a shikara ride on the Dal Lake, spend a night on a houseboat, visit the Mughal Garden, ride the second highest gondola at Gulmarg, explore Pahalgam, and do much more, with ease.",
  },
  {
    title: "Is Kashmir safe at night?",
    content:
      "Located in the Kashmir Valley, offering views of snow-capped mountains amidst a serene environment, Kashmir is a visual delight for all travellers. With 4-5-night Kashmir packages, you can enjoy a shikara ride on the Dal Lake, spend a night on a houseboat, visit the Mughal Garden, ride the second highest gondola at Gulmarg, explore Pahalgam, and do much more, with ease.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const onAccordionClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mt-sectionGap bg-lightGray pt-gap">
      <Wrapper>
        <SectionHeaderCommon
          mainText="Frequently Asked Questions"
          subText="We help you prepare for your trip and ensure an effortless and enjoyable travel experience."
        />
        <div className="mt-gapLargest mx-auto w-[60%] flex flex-col gap-gap">
          {faqData.map((item, index) => (
            <div
              className="border-b border-gray-400 pb-gap last:border-none"
              key={index}
            >
              <div
                className="flex justify-between items-center mb-gapSmallest cursor-pointer"
                onClick={() => onAccordionClick(index)}
              >
                <span className="text-fontDesk text-black">{item.title}</span>
                <Image
                  src={faqAccArrow}
                  alt="faq-arrow"
                  width={24}
                  height={24}
                  unoptimized
                  className={`${
                    index === activeIndex
                      ? "transition-all duration-300 -rotate-180"
                      : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  index === activeIndex ? "max-h-[5rem]" : "max-h-0"
                }`}
              >
                <p className="text-fontDeskSmall text-steelGray">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default FAQs;
