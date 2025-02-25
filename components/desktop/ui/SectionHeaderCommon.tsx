import Image, { StaticImageData } from "next/image";

import Button from "@/components/common/ui/Button";

import bookFlight from "@/images/book-flight.svg";

type SectionHeaderCommonProps = {
  mainText: string;
  subText: string;
  middleText?: string;
  containerClass?: string;
  middleTextFontSizeClass?: string;
  isMob?: boolean;
  hasBtn?: boolean;
  redirectLink?: string;
  img?: StaticImageData;
  color?: string;
  headerClass?: string;
};

const SectionHeaderCommon: React.FC<SectionHeaderCommonProps> = ({
  mainText,
  subText,
  middleText,
  containerClass,
  middleTextFontSizeClass,
  isMob,
  hasBtn,
  redirectLink,
  img,
  color,
  headerClass,
}) => {
  return (
    <div
      className={`flex items-center justify-center ${
        hasBtn ? "justifyBetween" : "justifyCenter"
      }`}
    >
      {!isMob && hasBtn && <div className="invisible">aaaaaaaaaaaaaa</div>}
      <div
        className={`${
          containerClass ? containerClass : ""
        } flex flex-col items-center justify-center`}
      >
        <div
          className={`relative ${headerClass ? headerClass : "mb-gapSmall"}`}
        >
          <h2
            className={`font-bold text-fontDeskLarge lg:text-fontDeskLargest ${
              color ? `text-${color}` : "text-navyBlue"
            }`}
          >
            {mainText}
          </h2>
          <Image
            src={img ? img : bookFlight}
            alt="book-flight"
            height={52}
            width={52}
            unoptimized
            className="absolute top-0 lg:top-[-0.5rem] right-[-1.7rem]  lg:right-[-2.5rem] h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem]"
          />
        </div>

        {middleText && (
          <h4
            className={`${
              middleTextFontSizeClass ? middleTextFontSizeClass : ""
            } mb-gapSmall`}
            dangerouslySetInnerHTML={{ __html: middleText }}
          ></h4>
        )}
        <h6
          className={`${
            color ? `text-${color}` : "text-steelGray"
          } text-fontDeskSmall lg:text-sm text-center`}
        >
          {subText}
        </h6>
      </div>
      {!isMob && hasBtn && <Button redirect={redirectLink ?? "#"} />}
    </div>
  );
};

export default SectionHeaderCommon;
