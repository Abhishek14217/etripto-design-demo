import Link from "next/link";
import Image from "next/image";

import { NavItems } from "@/components/desktop/layout/navbar/NavItems";

import { AiOutlineClose } from "react-icons/ai";
import mail from "@/icons/mail-mob-new.svg";
import mapPoint from "@/icons/map-point-mob-new.svg";

type NavMobProps = {
  close: () => void;
};

const navBottomContent = [
  { title: "Contact @etripto.in", img: mail },
  { title: "123 5th Ave New York, NY 15123, USA", img: mapPoint },
];

const NavMob: React.FC<NavMobProps> = ({ close }) => {
  return (
    <div>
      <div className="flex items-center gap-gap py-gapMed px-gapSmall border-b border-gray-500">
        <AiOutlineClose
          className="text-[1.5rem] text-gray-500"
          onClick={close}
        />
        <h4 className="text-fontDeskLargest font-bold">Menu</h4>
      </div>
      <div className="flex gap-gap py-gapMed px-gapSmall border-b border-gray-500">
        <Link
          href="#"
          className="text-white text-fontDeskLarge py-[0.4rem] px-[2rem] bg-navyBlue rounded-3xl"
        >
          Log in
        </Link>
        <Link
          href="#"
          className="text-navyBlue text-fontDeskLarge py-[0.4rem] px-[2rem] bg-white rounded-3xl border border-navyBlue"
        >
          Sign up
        </Link>
      </div>
      <ul className="py-gapMed px-gapSmall border-b border-gray-500">
        {NavItems.map((item, index) => (
          <li key={index} onClick={close} className="mb-gapSmall last:mb-0">
            <Link href={item.url} className="text-fontDesk">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="py-gapMed px-gapSmall">
        {navBottomContent.map((item, index) => (
          <li key={index} className="mb-gapMed flex items-center gap-gapSmall">
            <Image
              src={item.img}
              alt="img"
              height={15}
              width={15}
              unoptimized
            />
            <span className="text-fontDesk text-grayDark">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMob;
