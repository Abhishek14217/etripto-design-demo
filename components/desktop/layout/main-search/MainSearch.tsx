import Input from "@/components/desktop/ui/Input";

const MainSearch = () => {
  return (
    <div className="absolute bottom-[5rem] left-1/2 transform -translate-x-1/2">
      <form className="mt-gap">
        <div className="rounded-md flex mx-auto w-[40rem]">
          <Input
            inputType="text"
            placeholder="What are you looking for?"
            name="mainSearch"
            className="px-7 w-8/12 rounded-tl-md rounded-bl-md"
          />
          <select
            defaultValue="Location"
            className="px-gapMed md:w-40 bg-white border-l-[1px] outline-none text-fontDesk"
          >
            <option disabled>Location</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
          <button className="bg-navyBlue px-7 py-gapSmall text-white text-fontDesk rounded-tr-md rounded-br-md">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainSearch;
