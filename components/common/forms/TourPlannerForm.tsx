import Input from "@/components/desktop/ui/Input";
import PhoneNumberInput from "@/components/common/forms/PhoneNumberInput";

const TourPlannerForm = () => {
  return (
    <div className=" bg-navyBlue rounded-md p-gap">
      <h3 className="text-white text-center text-fontDeskLarge">
        <span className="text-primaryCyan">Planning a tour?</span> Get in touch
        with us.
      </h3>
      <form className="mt-gap">
        <div className="grid grid-cols-2 gap-gapMed">
          <Input
            inputType="text"
            placeholder="Name"
            name="name"
            className="text-fontDesk rounded-md px-3 py-1.5 outline-none border border-gray-300 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
          <PhoneNumberInput />
        </div>
        <button
          type="submit"
          className="text-fontDesk text-navyBlue lg:px-6 lg:py-2 block bg-primaryCyan rounded mt-gapLargest mx-auto hover:bg-indigo-500 hover:text-white transition-all duration-300"
        >
          Request a call back
        </button>
      </form>
    </div>
  );
};

export default TourPlannerForm;
