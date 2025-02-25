import Image from "next/image";
import Link from "next/link";

import Wrapper from "@/components/common/ui/Wrapper";

import mail from "@/icons/mail.svg";
import mapPoint from "@/icons/map-point.svg";
import fb from "@/icons/fb.svg";
import twitter from "@/icons/twitter.svg";
import instagram from "@/icons/instagram.svg";
import youtube from "@/icons/youtube.svg";
import signIn from "@/icons/signin.svg";

const socialMediaLinksData = [
  { image: fb, url: "#" },
  { image: twitter, url: "#" },
  { image: instagram, url: "#" },
  { image: youtube, url: "#" },
];

const Header = () => {
  return (
    <header className="bg-navyBlue py-gap">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="flex gap-gapLarge">
            <div className="border-r border-gray-200 pr-gapLarge">
              <a
                className="flex items-center gap-gapSmall"
                href="mailto:contact@etripto.in"
              >
                <Image
                  src={mail}
                  alt="mail"
                  height={15}
                  width={15}
                  unoptimized
                />
                <span className="text-white text-fontDesk">
                  Contact @etripto.in
                </span>
              </a>
            </div>

            <div className="flex items-center gap-gapSmall">
              <Image
                src={mapPoint}
                alt="map-point"
                height={20}
                width={20}
                unoptimized
              />
              <span className="text-white text-fontDesk">
                123 5th Ave New York, NY 15123, USA
              </span>
            </div>
          </div>

          <div className="flex gap-gapLarge">
            <ul className="flex items-center gap-gapLarge border-r border-gray-200 pr-gapLarge">
              {socialMediaLinksData.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>
                    <Image
                      src={item.image}
                      alt="social-media"
                      height={19}
                      width={19}
                      unoptimized
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="#" className="flex items-center gap-gapSmall">
              <Image
                src={signIn}
                alt="signIn"
                height={17}
                width={17}
                unoptimized
              />
              <span className="text-white text-fontDesk">Sign In</span>
            </Link>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
