//-----------------------------------THIS COMPOENNT CURRENTLY NOT USED------------------------------

// "use client";

// import Wrapper from "@/components/common/ui/Wrapper";
// import LocaitonCard from "@/components/desktop/layout/location-card/LocationCard";
// import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";
// import Button from "@/components/common/ui/Button";
// import SelectField from "@/components/common/ui/SelectField";

// import kashmir from "@/images/kashmir.png";
// import uttrakhand from "@/images/uttrakhand.png";
// import rajasthan from "@/images/rajasthan.png";
// import gujarat from "@/images/gujarat.png";

// const calenderMonths = [
//   { month: "January", slug: "jan" },
//   { month: "February", slug: "feb" },
//   { month: "March", slug: "mar" },
//   { month: "April", slug: "apr" },
//   { month: "May", slug: "may" },
//   { month: "June", slug: "june" },
//   { month: "July", slug: "july" },
//   { month: "August", slug: "aug" },
//   { month: "September", slug: "sep" },
//   { month: "October", slug: "oct" },
//   { month: "November", slug: "nov" },
//   { month: "December", slug: "dec" },
// ];

// const DummyLocationsData = [
//   { image: kashmir, place: "Kashmir", price: "₹32,000", redirect: "#" },
//   { image: uttrakhand, place: "Uttrakhand", price: "₹34,000", redirect: "#" },
//   { image: rajasthan, place: "Rajasthan", price: "₹30,000", redirect: "#" },
//   { image: gujarat, place: "Gujarat", price: "₹28,000", redirect: "#" },
// ];

// const SeasonWisePackagesMob = () => {
//   const monthOptions = calenderMonths.map((month) => ({
//     value: month.slug,
//     label: month.month,
//   }));

//   return (
//     <div className="mt-gapLargest">
//       <Wrapper>
//         <SectionHeaderCommon
//           mainText="Package picks from each Season"
//           subText="Our most visited sights are here for you to explore!"
//         />
//         <div className="mt-gap flex flex-col gap-gap">
//           <SelectField
//             options={monthOptions}
//             isSearchable={true}
//             placeholder="Select your Month of Travel"
//             defaultValue={monthOptions[0]}
//           />
//           <div className="flex gap-gap overflow-x-scroll no-scrollbar">
//             {DummyLocationsData.map((item, index) => (
//               <LocaitonCard data={item} key={index} />
//             ))}
//           </div>
//         </div>
//         <div className="flex items-center justify-center mt-gapLarge">
//           <Button redirect="#" />
//         </div>
//       </Wrapper>
//     </div>
//   );
// };

// export default SeasonWisePackagesMob;
