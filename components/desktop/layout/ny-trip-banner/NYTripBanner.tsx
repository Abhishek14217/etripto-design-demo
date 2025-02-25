import { StaticImageData } from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import NYTripBannerContent from "./NYTripBannerContent";

type NYTripBannerProps = {
  bg: StaticImageData;
  city: string;
  redirect: string;
  suppImg?: StaticImageData;
  right?: boolean;
  isMob?: boolean;
};

const NYTripBanner: React.FC<NYTripBannerProps> = ({
  bg,
  city,
  redirect,
  suppImg,
  right,
  isMob,
}) => {
  return (
    <div className="mt-gapLargest lg:mt-sectionGap">
      {isMob ? (
        <NYTripBannerContent bg={bg} city={city} redirect={redirect} />
      ) : (
        <Wrapper>
          <NYTripBannerContent
            bg={bg}
            city={city}
            redirect={redirect}
            suppImg={suppImg}
            right={right}
          />
        </Wrapper>
      )}
    </div>
  );
};

export default NYTripBanner;
