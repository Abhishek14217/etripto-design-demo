import MainSlider from "@/components/desktop/layout/main-slider/MainSlider";
import DestByTheme from "@/components/desktop/layout/dest-by-theme/DestByTheme";
import Packages from "@/components/desktop/layout/packages/Packages";
import StateWisePackages from "@/components/desktop/layout/state-wise-packages/StateWisePackages";
import TopDestination from "@/components/desktop/layout/top-destination/TopDestination";
import WhyChooseUs from "@/components/desktop/layout/why-choose-us/WhyChooseUs";
import NYTripBanner from "@/components/desktop/layout/ny-trip-banner/NYTripBanner";
import TopTours from "@/components/desktop/layout/top-tours/TopTours";
import SeasonWisePackagesMob from "../layout/season-wise-packages-mob/SeasonWisePackagesMob";
import GetawayLocations from "@/components/desktop/layout/getaway-locations/GetawayLocations";
import Achievements from "@/components/desktop/layout/achievements/Achievements";
import Testimonials from "@/components/desktop/layout/testimonials/Testimonials";
import NewBlog from "@/components/desktop/layout/new-blog/NewBlog";
import SafeHolidays from "@/components/desktop/layout/safe-holidays/SafeHolidays";
import BestTravelPackages from "@/components/desktop/layout/best-travel-packages/BestTravelPackages";
import { GroupedPackagesData } from "@/types/grouped-packages-data";

import nyTripOne from "@/images/ny-trip-one.png";
import nyTripTwo from "@/images/ny-trip-two.png";

type HomeMobIndexProps = {
  domPackagesData: GroupedPackagesData;
  // intlPackagesData: GroupedPackagesData;
};

const HomeMobIndex: React.FC<HomeMobIndexProps> = ({
  domPackagesData,
  // intlPackagesData,
}) => {
  return (
    <>
      <MainSlider isMob />
      <Packages
        title="Explore our Best Domestic Packages"
        subtitle="Our most visited sights are here for you to explore!"
        redirectLink="#"
        data={domPackagesData}
      />
      <TopDestination />
      <DestByTheme />
      <StateWisePackages/>
      <WhyChooseUs isMob />
      <NYTripBanner bg={nyTripOne} city="DALHOUSIE" redirect="#" isMob />
      <TopTours isMob />
      <SeasonWisePackagesMob />
      <GetawayLocations isMob />
      {/* <Packages
        title="Explore our Best International Packages"
        subtitle="Our most visited sights are here for you to explore!"
        redirectLink="#"
        data={intlPackagesData}
        isMob
      /> */}
      <Achievements isMob />
      <Testimonials isMob />
      <NewBlog isMob />
      <NYTripBanner bg={nyTripTwo} city="MUSSORIE" redirect="#" isMob />
      <SafeHolidays isMob />
      <BestTravelPackages />
    </>
  );
};

export default HomeMobIndex;

//{CODE TO SETTLE SCREEN SIZE FOR TABLET LANDSCAPE VIEW. COMES AT A COST OF MAKING ALL THE COMPONENTS CLIENT COMPONENTS----------------

// const [isMob, setIsMob] = useState(false);

// useEffect(() => {
//   // Function to check screen width
//   const handleResize = () => {
//     setIsMob(window.innerWidth < 1024);
//   };

//   // Check on mount
//   handleResize();

//   // Add event listener
//   window.addEventListener("resize", handleResize);

//   // Cleanup event listener
//   return () => window.removeEventListener("resize", handleResize);
// }, [])}
