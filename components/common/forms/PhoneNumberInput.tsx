"use client";
import { useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [valid, setValid] = useState(true);

  const handleInputChange = (value: string, country: {}) => {
    setPhoneNumber(value);
    // console.log(country, value);
  };

  return (
    <>
      <PhoneInput
        country={"in"}
        value={phoneNumber}
        onChange={handleInputChange}
        inputProps={{ required: true }}
        enableSearch
        disableSearchIcon
        containerStyle={{ height: "fit-content" }}
        inputStyle={{
          width: "100%",
          borderRadius: "0.375rem",
          height: "2.188rem",
        }}
        dropdownStyle={{ width: "15rem" }}
        searchStyle={{
          borderRadius: "0.375rem",
          border: "1px solid #cacaca",
          marginLeft: "0",
        }}
        buttonStyle={{ borderRadius: "0.375rem 0 0 0.375rem" }}
        //   className="focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
      />
      {/* {!valid && (
        <p className="text-red-400 text-fontDeskSmall">
          Please enter a valid phone number
        </p>
      )} */}
    </>
  );
};

export default PhoneNumberInput;
