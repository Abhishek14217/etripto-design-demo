import { useEffect, useState } from "react";

import Select, { StylesConfig } from "react-select";

type SelectFieldProps = {
  options: { value: string; label: string }[];
  placeholder: string;
  isSearchable: boolean;
  defaultValue?: { value: string; label: string };
};

const SelectField: React.FC<SelectFieldProps> = ({
  isSearchable,
  placeholder,
  options,
  defaultValue,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const customStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "1px solid #122986" : "1px solid #cecece",
      boxShadow: "none",
      backgroundColor: "#f1f1f1",
      fontSize: "0.875rem",
      borderRadius: "6.25rem",
      "&:hover": {
        border: state.isFocused ? "1px solid  #122986" : "1px solid #cecece",
        boxShadow: "none",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "0.875rem",
      cursor: "pointer",
      backgroundColor: state.isFocused ? "#f5f7fa" : "white",
      color: state.isSelected ? "#737373" : "black",
      ":active": {
        backgroundColor: "#f5f7fa",
      },
    }),
  };

  return (
    isClient && (
      <Select
        options={options}
        isSearchable={isSearchable}
        placeholder={placeholder}
        styles={customStyles}
        defaultValue={defaultValue}
      />
    )
  );
};

export default SelectField;
