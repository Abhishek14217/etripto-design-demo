import Image from "next/image";
import Link from "next/link";

import doubleTick from "@/icons/double-tick.svg";

type DetailsListProps = {
  data: {
    title: string;
    content: string[];
    link?: string;
  }[];
};

const DetailsList: React.FC<DetailsListProps> = ({ data }) => {
  return (
    <div className="mt-gap flex flex-col gap-gap">
      {data.map((item, index) => (
        <div key={index}>
          <span className="flex gap-gapSmall text-fontDeskSmall font-semibold">
            <Image
              src={doubleTick}
              alt="double-tick"
              width={15}
              height={15}
              unoptimized
            />
            {item.title}
          </span>
          <ul className="list-disc ml-6 flex flex-col gap-gapSmallest marker:text-black">
            {item.content.map((subitem, subindex) => (
              <li className="text-fontDeskSmall text-gray-400" key={subindex}>
                {subitem}{" "}
                {item.link && (
                  <Link className="text-navyBlue text-fontDeskSmall" href="#">
                    {item.link}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DetailsList;
