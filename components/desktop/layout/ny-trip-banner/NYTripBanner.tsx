import { StaticImageData } from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import NYTripBannerContent from "./NYTripBannerContent";

type NYTripBannerProps = {
  bg: StaticImageData;
  city: string;
  redirect: string;
  suppImg?: StaticImageData;
  right?: boolean;
};

const NYTripBanner: React.FC<NYTripBannerProps> = ({
  bg,
  city,
  redirect,
  suppImg,
  right,
}) => {
  return (
    <div className="mt-gapLargest lg:mt-sectionGap">
      <div className="lg:hidden md:hidden">
        <NYTripBannerContent bg={bg} city={city} redirect={redirect} />
      </div>
      <div className="lg:block md:block hidden">
        <Wrapper>
          <NYTripBannerContent
            bg={bg}
            city={city}
            redirect={redirect}
            suppImg={suppImg}
            right={right}
          />
        </Wrapper>
      </div>
    </div>
  );
};

export default NYTripBanner;

//-----------------------EXTRA CODE-------------------
// {isMob ? (
//   <NYTripBannerContent bg={bg} city={city} redirect={redirect} />
// ) : (
//   <Wrapper>
//     <NYTripBannerContent
//       bg={bg}
//       city={city}
//       redirect={redirect}
//       suppImg={suppImg}
//       right={right}
//     />
//   </Wrapper>
// )}
