type DropdownContentProps = {
  children: React.ReactNode;
  className?: string;
};

const DropdownContent: React.FC<DropdownContentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`${
        className ? className : ""
      }absolute left-auto bg-white z-10 shadow-lg`}
    >
      {children}
    </div>
  );
};

export default DropdownContent;
