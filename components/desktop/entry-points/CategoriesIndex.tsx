import "@/styles-desk/categoriespage.scss";

import CategoriesBanner from "../layout/categories-banner/CategoriesBanner";
import CategoriesDetail from "../layout/categories-detail/CategoriesDetail";
import Packages from "../layout/packages/Packages";
import ClientReviews from "../layout/client-reviews/ClientReviews";
import FAQs from "../layout/faqs/FAQs";
import BestTravelPackages from "../layout/best-travel-packages/BestTravelPackages";

import europe from "@/images/europe.png";
import australia from "@/images/australia.png";
import germany from "@/images/germany.png";
import southKorea from "@/images/south-korea.png";

const similarPackagesData = [
  { image: europe, place: "Europe", price: "₹1,32,000", redirect: "#" },
  { image: australia, place: "Australia", price: "₹2,34,000", redirect: "#" },
  { image: germany, place: "Germany", price: "₹3,30,000", redirect: "#" },
  {
    image: southKorea,
    place: "South Korea",
    price: "₹4,28,000",
    redirect: "#",
  },
  { image: europe, place: "Europe", price: "₹1,32,000", redirect: "#" },
];

const CategoriesIndex = () => {
  return (
    <>
      <CategoriesBanner />
      <CategoriesDetail />
      <Packages
        title="Similar Packages"
        subtitle="Our most visited sights are here for you to explore!"
        redirectLink="#"
        data={similarPackagesData}
      />
      <ClientReviews />
      <FAQs />
      <BestTravelPackages />
    </>
  );
};

export default CategoriesIndex;
