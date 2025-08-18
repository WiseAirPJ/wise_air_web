import "./FlightSearch.scss";
import moment from "moment";
import { useEffect, useState } from "react";
import HandMovingButton from "@/components/buttons/HandMovingButton";
// import FlightSearchSmall from "./FlightSearchSmall";
import FlightSearchBig from "./FlightSearchBig";

const FlightSearch = () => {
  const [inputs, setInputs] = useState({
    passengerCount: "1",
    departureAirport: "ICN",
    arrivalAirport: "",
    travelDate: {
      year: moment().format("YYYY"),
      month: moment().format("MM"),
    },
    stayDuration: {
      firstStep: 1,
      secondStep: 2,
    },
  });

  useEffect(() => {
    setInputs(prev => ({
      ...prev,
      stayDuration: {
        ...prev.stayDuration,
        secondStep: prev.stayDuration.firstStep + 1,
      },
    }));
  }, [inputs.stayDuration.firstStep]);

  return (
    <div className="flight_inputs">
      {/* <FlightSearchSmall inputs={inputs} setInputs={setInputs} /> */}
      <FlightSearchBig inputs={inputs} setInputs={setInputs} />
      <HandMovingButton />
    </div>
  );
};

export default FlightSearch;
