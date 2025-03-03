import "@/styles-desk/homepage.scss";

import MainSlider from "../layout/main-slider/MainSlider";
import MainSearch from "../layout/main-search/MainSearch";
import Packages from "../layout/packages/Packages";
import TopDestination from "../layout/top-destination/TopDestination";
import DestByTheme from "../layout/dest-by-theme/DestByTheme";
import StateWisePackages from "../layout/state-wise-packages/StateWisePackages";
import WhyChooseUs from "../layout/why-choose-us/WhyChooseUs";
import NYTripBanner from "../layout/ny-trip-banner/NYTripBanner";
import Achievements from "../layout/achievements/Achievements";
import TopTours from "../layout/top-tours/TopTours";
import SeasonWisePackages from "../layout/season-wise-packages/SeasonWisePackages";
import GetawayLocations from "../layout/getaway-locations/GetawayLocations";
import Testimonials from "../layout/testimonials/Testimonials";
import NewBlog from "../layout/new-blog/NewBlog";
import SafeHolidays from "../layout/safe-holidays/SafeHolidays";
import BestTravelPackages from "../layout/best-travel-packages/BestTravelPackages";
import { GroupedPackagesData } from "@/types/grouped-packages-data";

import nyTripOne from "@/images/ny-trip-one.png";
import nyTripTwo from "@/images/ny-trip-two.png";
import globe from "@/images/globe.svg";
import balloon from "@/images/balloon.svg";

type HomeIndexProps = {
  domPackagesData: GroupedPackagesData;
  // intlPackagesData: GroupedPackagesData;
};

const HomeIndex: React.FC<HomeIndexProps> = ({
  domPackagesData,
  // intlPackagesData,
}) => {
  return (
    <>
      <div className="mt-[-100px] relative">
        <MainSlider />
        <MainSearch />
      </div>
      <Packages
        title="Explore our Best Domestic Packages"
        subtitle="Our most visited sights are here for you to explore!"
        redirectLink="#"
        data={domPackagesData}
      />
      <TopDestination />
      <DestByTheme />
      <StateWisePackages />
      <WhyChooseUs />
      <NYTripBanner
        bg={nyTripOne}
        city="DALHOUSIE"
        redirect="#"
        suppImg={balloon}
      />
      <TopTours />
      <SeasonWisePackages />
      <GetawayLocations />
      {/* <Packages
        title="Explore our Best International Packages"
        subtitle="Our most visited sights are here for you to explore!"
        redirectLink="#"
        data={intlPackagesData}
        suppImg={balloon}
      /> */}
      <Achievements />
      <Testimonials />
      <NewBlog />
      <NYTripBanner
        bg={nyTripTwo}
        city="MUSSORIE"
        redirect="#"
        suppImg={globe}
        right
      />
      <SafeHolidays />
      <BestTravelPackages />
    </>
  );
};

export default HomeIndex;
