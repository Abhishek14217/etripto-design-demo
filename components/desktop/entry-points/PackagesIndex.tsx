import "@/styles-desk/packagepage.scss";

import Wrapper from "@/components/common/ui/Wrapper";
import SharedBanner from "../layout/shared-banner/SharedBanner";
import PackageDetails from "../layout/package-details/PackageDetails";
import PackageSummary from "../layout/package-summary/PackageSummary";

import packagesBanner from "@/images/packages-banner.png";

const PackagesIndex = () => {
  return (
    <>
      <SharedBanner
        bg={packagesBanner}
        title="Jammu Escape"
        tagline="Experience Adventure and Fresh Air"
        packageName="Kashmir Escape"
      />
      <div className="mt-sectionGap">
        <Wrapper>
          <div className="grid grid-cols-[auto_auto] gap-[2rem]">
            <PackageDetails />
            <PackageSummary />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default PackagesIndex;
