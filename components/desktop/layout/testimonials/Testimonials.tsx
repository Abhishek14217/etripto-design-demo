"use client";
import { useState } from "react";
import Image from "next/image";

import Slider from "react-slick";
import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";
import Button from "@/components/common/ui/Button";
import Modal from "@/components/desktop/ui/Modal";

import testOne from "@/images/testimonial-one.png";
import testTwo from "@/images/testimonial-two.png";
import testThree from "@/images/testimonial-three.png";
import testFour from "@/images/testimonial-four.png";
import playBtn from "@/images/play-btn.png";
import cloud from "@/images/cloud.svg";
import cloudTwo from "@/images/cloud-two.svg";
import qantas from "@/images/qantas.svg";
import { RxCross2 } from "react-icons/rx";

const testimonialData = [
  { image: testOne, videoId: "Igt89sDaboE" },
  { image: testTwo, videoId: "5QP0mvrJkiY" },
  { image: testThree, videoId: "RBM03RihZVs" },
  { image: testFour, videoId: "Otq0LY90Qso" },
  { image: testOne, videoId: "Igt89sDaboE" },
];

const logosData = [qantas, qantas, qantas, qantas, qantas];

const TestimonialItem = ({ image, videoId, onClick }: any) => (
  <div className="min-w-[13rem] lg:min-w-[unset] lg:pr-gap relative">
    <Image src={image} alt="testimonial" className="size-full" />
    <Image
      src={playBtn}
      alt="play-btn"
      className="absolute bottom-[50%] left-1/2 transform -translate-x-1/2 cursor-pointer"
      onClick={() => onClick(videoId)}
    />
  </div>
);

type TestimonialsProps = {
  isMob?: boolean;
};

const Testimonials: React.FC<TestimonialsProps> = ({ isMob }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);

  const toggleModal = (videoId: any = null) => {
    setShowModal((prevState) => !prevState);
    setCurrentVideoId(videoId);
  };

  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      {/*--------------------------------------- TESTIMONIALS--------------------------------------------------- */}
      <div className="mt-gapLargest lg:mt-sectionGap relative">
        {!isMob && (
          <Image
            src={cloud}
            alt="cloud"
            className="absolute top-[1.5rem] w-[13rem]"
          />
        )}
        <Wrapper>
          <SectionHeaderCommon
            mainText="Our Happy Travellers"
            subText="Real Traveler, Real Story and Real Experience"
            hasBtn
            redirectLink="#"
            isMob={isMob}
          />

          <div className="mt-gapMed lg:mt-gap domestic-slider">
            {isMob ? (
              <div className="flex gap-gap overflow-x-scroll no-scrollbar">
                {testimonialData.map((item, index) => (
                  <TestimonialItem
                    key={index}
                    {...item}
                    onClick={toggleModal}
                  />
                ))}
              </div>
            ) : (
              <Slider {...settings}>
                {testimonialData.map((item, index) => (
                  <TestimonialItem
                    key={index}
                    {...item}
                    onClick={toggleModal}
                  />
                ))}
              </Slider>
            )}
          </div>

          {showModal && (
            <Modal
              close={() => toggleModal(null)}
              width={isMob ? "85%" : "50%"}
              height={isMob ? "45%" : "70%"}
              left={isMob ? "6%" : "25%"}
              top={"20vh"}
            >
              <div className="flex justify-end border-b border-gray-200">
                <button
                  className="cursor-pointer border-none bg-white text-[1.5rem] p-[0.3rem]"
                  onClick={() => toggleModal(null)}
                >
                  <RxCross2 />
                </button>
              </div>
              <div className="h-[calc(100%-2.5rem)] p-gap">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${currentVideoId}`}
                  title="Video Title"
                  allowFullScreen
                ></iframe>
              </div>
            </Modal>
          )}
          {isMob && (
            <div className="flex items-center justify-center mt-gapLarge">
              <Button redirect="#" />
            </div>
          )}
        </Wrapper>
        {!isMob && (
          <Image
            src={cloudTwo}
            alt="cloud-two"
            className="absolute right-[2rem] top-[2rem] w-[13rem] -z-10"
          />
        )}
      </div>

      {/*---------------------------------------LOGOS--------------------------------------------------- */}
      <div className="mt-gapLargest lg:mt-sectionGap">
        <Wrapper>
          <div className="lg:grid lg:grid-cols-5 flex gap-gap overflow-x-scroll no-scrollbar">
            {logosData.map((item, index) => (
              <div
                className="group  min-w-[4.9rem] lg:min-w-[unset] transition-all duration-300"
                key={index}
              >
                <Image
                  src={item}
                  alt="logos"
                  width={130}
                  height={45}
                  unoptimized
                  className="grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Testimonials;
