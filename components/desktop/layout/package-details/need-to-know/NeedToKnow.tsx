import DetailsList from "./DetailsList";

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

const paymentTermsData = [
  {
    title: "Payment Terms",
    content: [
      "Guest can pay by Cheque/ Demand Draft/ Debit card / Credit card/ NEFT/ RTGS/ IMPS. For Debit / Credit card payment additional 1.8 % convenience charge will be applicable Cheque / Demand draft should be in favour of 'Veena Patil Hospitality Pvt ltd'",
    ],
  },
  {
    title: "Remarks",
    content: [
      "All meals are provided by Etripto in case the flight reaches the stipulated destination early morning or leaves destination late in the evening.",
      "The tour price mentioned for this tour is for Indian nationals only.",
      "The tour price varies for NRI’s or foreign nationals, for more details kindly contact your travel advisor.",
      "NRIs and Foreign nationals please ensure proper identity is conveyed to booking executive at the time of booking and all details along with passport copies are handed over to the booking executive.",
      "Standard Check-in and check-out time of hotels in India is generally 1.30 PM and 10 AM respectively.",
    ],
  },
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
        <DetailsList data={needToKnowData} />
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
        <DetailsList data={paymentTermsData} />
      </div>

      {/* ------------------------UPGRADES----------------------------------- */}
      <div className="mt-gap">
        <h5 className="text-fontDesk font-semibold">Upgrades Available</h5>
        <p className="text-fontDeskSmall text-gray-400 mt-gapSmallest">
          Call us at{" "}
          <span className="text-navyBlue font-semibold">1800 22 7009</span> for
          Coach Prime seats or Business Class upgrades for a premium travel
          experience.
        </p>
      </div>
    </>
  );
};

export default NeedToKnow;
