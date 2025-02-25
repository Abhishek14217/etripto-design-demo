import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type DestByThemeCardProps = {
  image: StaticImageData;
  theme: string;
  destCount: string;
  redirect: string;
};

const DestByThemeCard: React.FC<DestByThemeCardProps> = ({
  image,
  theme,
  destCount,
  redirect,
}) => {
  return (
    //Outer div is to protect Link tag from default classes of slick slider
    <div className="min-w-[8rem] lg:min-w-[unset]">
      <Link href={redirect} className="text-center lg:block lg:pr-gap">
        <div className="lg:overflow-hidden mb-gapSmall lg:mb-gap">
          <Image src={image} alt={`${theme} image`} className="size-full" />
        </div>
        <h5 className="text-fontDesk lg:text-fontDeskLarge font-bold">{theme}</h5>
        <h6 className="text-fontDeskSmall lg:text-fontDesk">{destCount} destinations</h6>
      </Link>
    </div>
  );
};

export default DestByThemeCard;
