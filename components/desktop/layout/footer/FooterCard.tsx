import Image from "next/image";
import Link from "next/link";

import Input from "@/components/desktop/ui/Input";

import logo from "@/images/etripto-logo.svg";
import fb from "@/icons/fb.svg";
import twitter from "@/icons/twitter.svg";
import instagram from "@/icons/instagram.svg";
import youtube from "@/icons/youtube.svg";

const socialMediaLinksData = [
  { image: fb, url: "#" },
  { image: twitter, url: "#" },
  { image: instagram, url: "#" },
  { image: youtube, url: "#" },
];

const footerLinksData = [
  {
    title: "Discover Us",
    content: [
      { value: "Guests Reviews", redirect: "#" },
      { value: "About us", redirect: "#" },
      { value: "Our Team", redirect: "#" },
      { value: "Tour Managers", redirect: "#" },
      { value: "Sales Partners", redirect: "#" },
      { value: "Become a Sales Partner", redirect: "#" },
      { value: "Careers", subtext: "We’re Hiring!", redirect: "#" },
      { value: "CSR Policy", redirect: "#" },
      { value: "Create Your Travel Portfolio", redirect: "#" },
    ],
  },
  {
    title: "Support",
    content: [
      { value: "Contact Us", redirect: "#" },
      { value: "Leave Your Feedback", redirect: "#" },
      { value: "How to book", redirect: "#" },
      { value: "FAQ", redirect: "#" },
      { value: "Travel Details", redirect: "#" },
      { value: "COVID-19 Public Notice", redirect: "#" },
    ],
  },
];

const FooterCard = () => {
  return (
    <div className="lg:border-t lg:border-b border-dustyGray lg:py-gap">
      <div className="flex flex-col flex-wrap sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-gapSmall sm:w-[40%] md:w-[31%] lg:w-[25%]">
          <Link href="/">
            <Image src={logo} alt="logo" height={83} width={83} unoptimized />
          </Link>
          <p className="text-fontDeskSmall text-steelGray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
          <div className="flex gap-gapSmall">
            {socialMediaLinksData.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                target="_blank"
                className="w-[2rem] h-[2rem] bg-navyBlue flex items-center justify-center rounded-full"
              >
                <Image
                  src={item.image}
                  alt="social-med-img"
                  width={16}
                  height={16}
                  unoptimized
                />
              </Link>
            ))}
          </div>
        </div>
        {footerLinksData.map((item, index) => (
          <div key={index} className="mt-gap sm:mt-0">
            <h5 className="text-fontDesk text-white lg:text-black mb-gapSmall">
              {item.title}
            </h5>
            <ul className="text-fontDeskSmall flex flex-col gap-gapSmall">
              {item.content.map((subitem, subindex) => (
                <li key={subindex}>
                  <Link
                    className="text-steelGray hover:text-navyBlue transition-all duration-300"
                    href={subitem.redirect}
                  >
                    {subitem.value}
                    {subitem.subtext && (
                      <span className="ml-gapSmall text-navyBlue font-bold">
                        {subitem.subtext}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-gapSmall mt-gap md:mt-0">
          <h5 className="text-fontDesk text-white lg:text-black">
            Keep travelling all year round!
          </h5>
          <p className="text-fontDeskSmall text-steelGray">
            Subscribe to our newsletter to find travel inspiration in your
            inbox.
          </p>
          <form className="flex border rounded-md focus-within:border-indigo-500">
            <Input
              inputType="text"
              placeholder="Enter your email*"
              name="footerEmail"
              className="min-w-0 flex-auto rounded-tl-md rounded-bl-md bg-white/5 px-3.5 py-2 text-fontDesk text-white lg:text-black"
            />
            <button className="text-fontDesk text-navyBlue px-4 py-2 inline-block bg-primaryCyan rounded-tr-md rounded-br-md hover:bg-navyBlue hover:text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
