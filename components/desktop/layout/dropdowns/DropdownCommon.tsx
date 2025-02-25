import Link from "next/link";

type DropdownCommonProps = {
  data: { title: string; redirect?: string }[];
  sortDropdown?: boolean;
  onSelect?: (title: string) => void;
  selectedSort?: string;
};

const DropdownCommon: React.FC<DropdownCommonProps> = ({
  data,
  sortDropdown,
  onSelect,
  selectedSort,
}) => {
  return (
    <ul className="text-fontDesk">
      {data.map((item, index) => (
        <li key={index} className="border-b border-gray-200">
          {sortDropdown ? (
            <span
              className={`${
                selectedSort === item.title ? "font-bold text-navyBlue" : ""
              } p-gap block hover:text-navyBlue transition-all duration-300`}
              onClick={(e) => {
                e.stopPropagation();
                onSelect?.(item.title);
              }}
            >
              {item.title}
            </span>
          ) : (
            <Link
              href={item.redirect ?? "#"}
              className="p-gap block hover:text-navyBlue transition-all duration-300"
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropdownCommon;
