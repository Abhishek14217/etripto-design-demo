import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";

import achievementBanner from "@/images/achievement-banner.png";
import happyCustomer from "@/icons/happy-customer.svg";
import toursCompleted from "@/icons/tours-completed.svg";
import tourExperts from "@/icons/tour-experts.svg";
import tourDestinations from "@/icons/tour-destinations.svg";
import ourMission from "@/icons/our-mission.svg";
import bookFlightTeal from "@/images/book-flight-teal.svg";
import parachute from "@/images/parachute.svg";

const achievementsData = [
  { image: happyCustomer, value: "95,558", title: "Happy Customers" },
  { image: toursCompleted, value: "52,243", title: "Tours Completed" },
  { image: tourExperts, value: "325+", title: "Tour Experts" },
  { image: tourDestinations, value: "2500+", title: "Tour Destinations" },
  {
    image: ourMission,
    value: "Our Mission",
    title: "India's Best Travel Company",
  },
];

type AchievementsProps = {
  isMob?: boolean;
};

const Achievements: React.FC<AchievementsProps> = ({ isMob }) => {
  return (
    <div className="mt-gapLargest lg:mt-sectionGap relative h-full lg:h-[15.75rem] bg-navyBlue bg-[url('/world-map-achieve.png')] bg-no-repeat bg-center lg:bg-none">
      {!isMob && (
        <Image src={achievementBanner} alt="achievements-banner" fill />
      )}
      <Wrapper>
        <div className="relative z-10 py-gap flex flex-col justify-between h-full lg:h-[15.75rem]">
          <div className="border-l-4 border-primaryCyan pl-3">
            <h2 className="flex items-center text-primaryCyan font-bold text-fontDeskLargest">
              Our Achievements
              <Image
                src={bookFlightTeal}
                alt="flight"
                className="-mx-1 block"
                height={45}
                width={45}
              />
            </h2>
            <h6 className="text-white text-sm">
              We're curating experiences that
            </h6>
          </div>
          <div className="mt-gap lg:mt-0 grid grid-cols-2 lg:grid-cols-5 gap-[2rem] lg:gap-0">
            {achievementsData.map((item, index) => (
              <div key={index} className="flex flex-col gap-gapSmall">
                <Image
                  src={item.image}
                  alt="achievements"
                  height={45}
                  width={45}
                  unoptimized
                />
                <div>
                  <h4 className="text-white text-fontDeskLargest font-bold">
                    {item.value}
                  </h4>
                  <span className="text-white text-sm">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
      {!isMob && (
        <Image
          src={parachute}
          alt="parachute"
          width={140}
          height={150}
          unoptimized
          className="absolute right-0 top-[-4rem] -z-10"
        />
      )}
    </div>
  );
};

export default Achievements;
