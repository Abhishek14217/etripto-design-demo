import Image from "next/image";

import doubleTick from "@/icons/double-tick.svg";
import Link from "next/link";

const needToKnowData = [
  {
    title: "Weather",
    content: ["For detailed Information about weather kindly visit"],
    link: "www.accuweather.com",
  },
  {
    title: "Transport",
    content: [
      "Mumbai – Srinagar / Srinagar – Mumbai",
      "We use Air India / Indigo Airlines",
    ],
  },
  {
    title: "Documents Required for Travel",
    content: [
      "ADULT: Voters ID / Passport / Aadhar Card / Driving Licence",
      "CHILD : Passport / Aadhar Card / School ID",
      "INFANT: Aadhar Card/ Birth certificate",
      "ID card, ID card type and ID card number is mandatory at time of booking, kindly carry the same ID card on tour.",
      "For NRI and Foreign National Guests alongwith Passport, Valid Indian Visa/ OCI Card/ PIO Card is mandatory.",
      "Carry two passport size photographs.",
    ],
  },
];

const cancellationData = [
  { days: "0-5", fee: "100%" },
  { days: "6-15", fee: "75%" },
  { days: "16-25", fee: "55%" },
  { days: "26-45", fee: "35%" },
  { days: "46-65", fee: "10%" },
  { days: "66-75", fee: "10%" },
  { days: "76-85", fee: "10%" },
  { days: "86-55", fee: "10%" },
];

const NeedToKnow = () => {
  return (
    <>
      {/* ------------------------NEED TO KNOW----------------------------------- */}
      <div className="mt-gap">
        <h5 className="text-fontDesk font-semibold">
          Need to Know{" "}
          <small className="text-[0.625rem] text-steelGray italic font-normal">
            Things to consider before the trip!
          </small>
        </h5>
        <div className="mt-gap flex flex-col gap-gap">
          {needToKnowData.map((item, index) => (
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
                  <li
                    className="text-fontDeskSmall text-gray-400"
                    key={subindex}
                  >
                    {subitem}{" "}
                    {item.link && (
                      <Link
                        className="text-navyBlue text-fontDeskSmall"
                        href="#"
                      >
                        {item.link}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------CANCELLATION POLICY AND PAYMENT TERMS----------------------------------- */}
      <div className="mt-gap">
        <h5 className="text-fontDesk font-semibold">
          Cancellation Policy & Payment Terms{" "}
          <small className="text-[0.625rem] text-steelGray italic font-normal">
            We keep it transparent, crystal clear!
          </small>
        </h5>
        <div className="mt-gap flex w-full max-w-full border rounded-md">
          <div className="bg-navyBlue w-[18.75rem] flex flex-col rounded-l-md">
            <div className="text-fontDesk text-white border-b border-gray-400 p-gap">
              Cancellation received no. of days prior to departure
            </div>
            <div className="text-fontDesk text-white p-gap">
              Cancellation fee applicable on Net Tour Price (per person)
            </div>
          </div>
          <div className="flex flex-1">
            {cancellationData.map((item, index) => (
              <div
                className="flex w-full flex-col text-fontDeskSmall"
                key={index}
              >
                <div className="border-b border-gray-400 size-full pt-[0.1rem] flex flex-col items-center justify-center">
                  <span>D</span>
                  {item.days}
                </div>
                <div className="flex items-center justify-center size-full">
                  {item.fee}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NeedToKnow;
