import TourPlannerForm from "@/components/common/forms/TourPlannerForm";
import PackageImgGallery from "./PackageImgGallery";

const PackageSummary = () => {
  return (
    <div className="package-summary flex flex-col gap-gap">
      <PackageImgGallery />
      <TourPlannerForm />
    </div>
  );
};

export default PackageSummary;
