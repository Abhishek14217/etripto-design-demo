import Image from "next/image";

import videoThumbnail from "@/images/packages-gallery-vid.png";
import galleryImgOne from "@/images/packages-gallery-one.png";
import galleryImgTwo from "@/images/packages-gallery-two.png";
import galleryImgThree from "@/images/packages-gallery-three.png";
import playBtn from "@/images/circle-play.svg";

const galleryImgData = [galleryImgOne, galleryImgTwo, galleryImgThree];

const PackageImgGallery = () => {
  return (
    <div className="flex flex-col gap-gapSmall">
      <div className="relative">
        <Image
          src={videoThumbnail}
          alt="video-thumbnail"
          className="size-full"
        />
        <Image
          className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 cursor-pointer"
          src={playBtn}
          alt="play-btn"
          width={60}
          height={60}
          unoptimized
        />
      </div>
      <div className="flex gap-gapSmall">
        {galleryImgData.map((item, index) => (
          <div className="relative" key={index}>
            <Image src={item} alt="image" />
            {index === galleryImgData.length - 1 && (
              <div className="absolute top-0 text-white  bg-black bg-opacity-80 size-full flex flex-col items-center justify-center cursor-pointer">
                <h5 className="text-fontDeskLargest font-semibold">50+</h5>
                <h6 className="text-fontDeskSmall">Client Photos</h6>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageImgGallery;
