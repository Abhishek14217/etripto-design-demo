import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import FooterCard from "./FooterCard";

import footerImg from "@/images/footer-img.png";
import globe from "@/images/globe.svg";
import balloon from "@/images/balloon.svg";

const Footer = () => {
  const copyrightText = (
    <p className="text-fontDeskSmall">
      © 2024 etripto. All Right Reserved. Web Design & Development by
      <b style={{ color: "#126cdc" }}> Web</b>
      <b style={{ color: "#ff7713" }}>Hopers</b>
    </p>
  );

  return (
    <footer className="mt-gapLargest lg:mt-sectionGap relative">
      <Image
        width={80}
        src={globe}
        alt="globe"
        className="absolute left-0 bottom-[2rem] hidden lg:block"
      />

      {/* ONLY MOBILE */}
      <div className="lg:hidden">
        <div className="bg-blueDark p-gap">
          <FooterCard />
        </div>
        <Wrapper>
          <div className="mt-gap">{copyrightText}</div>
        </Wrapper>
        <Image src={footerImg} alt="image" className="w-full mt-gap" />
      </div>

      {/* DESKTOP */}
      <div className="lg:block hidden">
        <Wrapper>
          <FooterCard />
          <div className="mt-gap">
            {copyrightText}
            <Image src={footerImg} alt="image" className="w-full mt-gap" />
          </div>
        </Wrapper>
      </div>

      <Image
        width={100}
        src={balloon}
        alt="balloon"
        className="absolute right-[1rem] bottom-[2rem] hidden lg:block"
      />
    </footer>
  );
};

export default Footer;

//----------------------EXTRA CODE-------------------------

{
  /* {isMob ? (
        <>
          <div className="bg-blueDark p-gap">
            <FooterCard />
          </div>
          <Wrapper>
            <div className="mt-gap">{copyrightText}</div>
          </Wrapper>
          <Image src={footerImg} alt="image" className="w-full mt-gap" />
        </>
      ) : (
        <Wrapper>
          <FooterCard />
          <div className="mt-gap">
            {copyrightText}
            <Image src={footerImg} alt="image" className="w-full mt-gap" />
          </div>
        </Wrapper>
      )} */
}
