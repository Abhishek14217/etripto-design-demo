import Link from "next/link";

type ButtonProps = {
  redirect: string;
  className?: string;
  btnText?: string;
};

const Button: React.FC<ButtonProps> = ({ redirect, btnText, className }) => {
  return (
    <Link
      href={redirect}
      className={`text-navyBlue inline-block bg-primaryCyan rounded  hover:bg-navyBlue hover:text-white transition-all duration-300 ${
        className
          ? className
          : "text-fontDeskSmall lg:text-fontDesk  px-3 py-1 lg:px-6 lg:py-2 "
      } `}
    >
      {btnText ? btnText : "View More"}
    </Link>
  );
};

export default Button;
