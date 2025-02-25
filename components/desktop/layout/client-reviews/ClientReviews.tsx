"use client";
import Image from "next/image";

import Slider from "react-slick";
import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";

import clientReviewsBg from "@/images/client-reviews-bg.png";
import bookFlight from "@/images/book-flight-white.svg";
import clientRevOne from "@/images/client-rev-one.png";
import clientRevTwo from "@/images/client-rev-two.png";
import clientRevThree from "@/images/client-rev-three.png";
import clientRevCommon from "@/images/client-rev-common.svg";

const reviewsData = [
  {
    image: clientRevOne,
    review:
      "One of the best amd great experience from etripto. The management of whole tour from booking till execution is upto the mark",
    name: "Rahul Kumar",
  },
  {
    image: clientRevTwo,
    review:
      "One of the best amd great experience from etripto. The management of whole tour from booking till execution is upto the mark",
    name: "Shanu Dev",
  },
  {
    image: clientRevThree,
    review:
      "One of the best amd great experience from etripto. The management of whole tour from booking till execution is upto the mark",
    name: "Rohan Preet",
  },
  {
    image: clientRevOne,
    review:
      "One of the best amd great experience from etripto. The management of whole tour from booking till execution is upto the mark",
    name: "Rahul Kumar",
  },
];

const ClientReviews = () => {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="mt-sectionGap relative h-[25.75rem]">
      <Image src={clientReviewsBg} alt="client-reviews-bg" fill />
      <Wrapper>
        <div className="relative z-10 flex flex-col justify-center h-[25.75rem] ">
          <SectionHeaderCommon
            mainText="Client Reviews"
            subText="What are you waiting for?"
            img={bookFlight}
            color="white"
          />
          <div className="mt-gap client-reviews-slider">
            <Slider {...settings}>
              {reviewsData.map((item, index) => (
                <div key={index}>
                  <div className="bg-white rounded-md p-gap relative text-center mx-3">
                    <Image
                      width={64}
                      src={clientRevCommon}
                      alt="quote"
                      className="absolute left-7 top-5"
                    />
                    <div className="flex justify-center mb-gapSmall">
                      <Image src={item.image} alt="user" />
                    </div>
                    <p className="text-black text-fontDesk mb-gapSmall">
                      {item.review}
                    </p>
                    <h5 className="text-black text-fontDesk font-semibold">
                      {item.name}
                    </h5>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ClientReviews;
