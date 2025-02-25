import Image from "next/image";
import { useEffect } from "react";

import datePicker from "@/icons/date-picker.svg";

type DatePickerProps = {
  id?: string;
  setSelectedDate: any;
  selectedDate: {
    from: string;
    to: string;
  };
  clear?: boolean;
};

const DatePicker: React.FC<DatePickerProps> = ({
  id = "datepicker",
  setSelectedDate,
  selectedDate,
  clear,
}) => {
  useEffect(() => {
    const loadDatePicker = async () => {
      try {
        // Load the easepick library
        const easepickScript = document.createElement("script");
        easepickScript.src =
          "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.umd.min.js";
        easepickScript.async = true;
        document.body.appendChild(easepickScript);
        easepickScript.onload = () => {
          const picker = new (window as any).easepick.create({
            element: document.getElementById(id),
            css: ["/ease-picker.css", "/date-picker.css"],
            zIndex: 10,
            grid: 2,
            calendars: 2,
            autoApply: false,
            AmpPlugin: {
              dropdown: {
                months: true,
                years: true,
              },
              resetButton: clear,
              darkMode: false,
            },
            RangePlugin: {
              repick: true,
            },
            PresetPlugin: {
              position: "bottom",
            },
            plugins: ["AmpPlugin", "RangePlugin", "PresetPlugin"],
          });
          // Event handling for date changes
          picker.on(
            "select",
            ({
              detail,
            }: {
              detail: {
                start: string;
                end: string;
              };
            }) => {
              const startDate = new Date(detail.start).toLocaleDateString(
                "en-CA"
              );
              const endDate = new Date(detail.end).toLocaleDateString("en-CA");
              setSelectedDate({
                ...selectedDate,
                from: startDate,
                to: endDate,
              });
            }
          );

          picker.on("clear", () => {
            clear && setSelectedDate({ ...selectedDate, from: "", to: "" });
          });

          // Event handling for adjusting position
          // picker.on("show", () => {
          //   adjustPosition(picker, "left", 0, 50);
          // });
        };
      } catch (error) {
        console.error("Error loading date picker:", error);
      }
    };

    loadDatePicker();
  }, []);

  return (
    <div className="p-gapMed relative flex items-center">
      <label
        className="border rounded-md w-full p-2 cursor-pointer"
        htmlFor={id}
      >
        <span className="text-fontDeskSmall">
          {(selectedDate.from &&
            `${selectedDate.from.split("T")[0]} - ${
              selectedDate.to.split("T")[0]
            }`) ||
            "Select Date Range"}
        </span>
        <Image
          className="absolute right-[1.2rem] bottom-[1.2rem]"
          src={datePicker}
          alt="date-picker"
          height={18}
          width={18}
          unoptimized
        />
      </label>
      <input
        placeholder="select date range"
        className="hidden w-max bg-white border-none rounded-sm"
        id={id}
        value={
          (selectedDate.from &&
            `${selectedDate.from.split("T")[0]} - ${
              selectedDate.to.split("T")[0]
            }`) ||
          ""
        }
        readOnly
      />
    </div>
  );
};

export default DatePicker;
