import { headers } from "next/headers";

import HomeIndex from "@/components/desktop/entry-points/HomeIndex";
import HomeMobIndex from "@/components/mobile/entry-points/HomeMobIndex";

import kashmir from "@/images/kashmir.png";
import uttrakhand from "@/images/uttrakhand.png";
import rajasthan from "@/images/rajasthan.png";
import gujarat from "@/images/gujarat.png";
// import europe from "@/images/europe.png";
// import australia from "@/images/australia.png";
// import germany from "@/images/germany.png";
// import southKorea from "@/images/south-korea.png";

const DomPackagesData = [
  { image: kashmir, place: "Kashmir", price: "₹32,000", redirect: "#" },
  { image: uttrakhand, place: "Uttrakhand", price: "₹34,000", redirect: "#" },
  { image: rajasthan, place: "Rajasthan", price: "₹30,000", redirect: "#" },
  { image: gujarat, place: "Gujarat", price: "₹28,000", redirect: "#" },
  { image: kashmir, place: "Kashmir", price: "₹32,000", redirect: "#" },
];

// const IntlPackagesData = [
//   { image: europe, place: "Europe", price: "₹1,32,000", redirect: "#" },
//   { image: australia, place: "Australia", price: "₹2,34,000", redirect: "#" },
//   { image: germany, place: "Germany", price: "₹3,30,000", redirect: "#" },
//   {
//     image: southKorea,
//     place: "South Korea",
//     price: "₹4,28,000",
//     redirect: "#",
//   },
//   { image: europe, place: "Europe", price: "₹1,32,000", redirect: "#" },
// ];

export default async function Home() {
  const headersList = headers();
  const userAgent = (await headersList).get("user-agent");

  let isMobileView = userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  return (
    <main>
      {isMobileView ? (
        <HomeMobIndex
          domPackagesData={DomPackagesData}
          // intlPackagesData={IntlPackagesData}
        />
      ) : (
        <HomeIndex
          domPackagesData={DomPackagesData}
          // intlPackagesData={IntlPackagesData}
        />
      )}
    </main>
  );
}
