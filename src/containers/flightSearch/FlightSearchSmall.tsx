import InputText from "@/components/inputs/InputText";
import Select from "@/components/inputs/Select";
import StayDurationOptionModal from "@/components/modal/StayDurationOptionModal";
import TravelDateOptionModal from "@/components/modal/TravelDateOptionModal";
import { useRef, useState } from "react";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { LuPlane, LuUserRound } from "react-icons/lu";

type Props = {
  inputs: {
    passengerCount: string;
    departureAirport: string;
    arrivalAirport: string;
    travelDate: {
      year: string;
      month: string;
    };
    stayDuration: {
      firstStep: number;
      secondStep: number;
    };
  };
  setInputs: React.Dispatch<
    React.SetStateAction<{
      passengerCount: string;
      departureAirport: string;
      arrivalAirport: string;
      travelDate: {
        year: string;
        month: string;
      };
      stayDuration: {
        firstStep: number;
        secondStep: number;
      };
    }>
  >;
};

const FlightSearchSmall: React.FC<Props> = ({ inputs, setInputs }) => {
  const stayDurationRef = useRef<HTMLDivElement | null>(null);
  const travelDateRef = useRef<HTMLDivElement | null>(null);
  const [isOpenStayDurationModal, setIsOpenStayDurationModal] = useState(false);
  const [isOpenTravelDateModal, setIsOpenTravelDateModal] = useState(false);

  return (
    <div className="small_input_group">
      <div className="input_group">
        <Select
          icon={<LuUserRound />}
          options={Array.from({ length: 10 }, (_, i) => ({
            value: String(i + 1),
            label: `${i + 1}명`,
          }))}
          value={inputs.passengerCount}
          onChangeHandler={value => setInputs({ ...inputs, passengerCount: value })}
        />
        <Select
          icon={<LuPlane />}
          options={[{ value: "ICN", label: "[ICN] 인천국제공항" }]}
          value={inputs.departureAirport}
          onChangeHandler={value => setInputs({ ...inputs, departureAirport: value })}
        />
      </div>
      <div className="input_group">
        <InputText
          icon={<HiOutlineCalendarDateRange />}
          value={`${inputs.travelDate.year}년 ${inputs.travelDate.month}월`}
          onChangeHandler={() => {}}
          isModalData={{
            openModal: () => setIsOpenTravelDateModal(true),
            closeModal: () => setIsOpenTravelDateModal(false),
            modalComponent: (
              <TravelDateOptionModal
                onChangeHandler={value => setInputs({ ...inputs, travelDate: value })}
                value={inputs.travelDate}
              />
            ),
            isOpen: isOpenTravelDateModal,
            ref: travelDateRef,
          }}
        />
        <InputText
          icon={<HiOutlineCalendarDateRange />}
          value={`${inputs.stayDuration.firstStep}박 ${inputs.stayDuration.secondStep}일`}
          onChangeHandler={() => {}}
          isModalData={{
            openModal: () => setIsOpenStayDurationModal(true),
            closeModal: () => setIsOpenStayDurationModal(false),
            modalComponent: (
              <StayDurationOptionModal
                onChangeHandler={value => setInputs({ ...inputs, stayDuration: value })}
                value={inputs.stayDuration}
              />
            ),
            isOpen: isOpenStayDurationModal,
            ref: stayDurationRef,
          }}
        />
      </div>
    </div>
  );
};

export default FlightSearchSmall;
