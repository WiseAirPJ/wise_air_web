import MainButton from "@/components/buttons/MainButton";
import TabButtonWrap from "@/components/buttons/TabButtonWrap";
import DashBox from "@/components/DashBox";
import InputText from "@/components/inputs/InputText";
import Select from "@/components/inputs/Select";
import StayDurationOptionModal from "@/components/modal/StayDurationOptionModal";
import moment from "moment";
import { useRef, useState } from "react";

const tabNames = ["편도", "왕복"];

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

const FlightSearchBig: React.FC<Props> = ({ inputs, setInputs }) => {
  const stayDurationRef = useRef<HTMLDivElement | null>(null);
  const [isOpenStayDurationModal, setIsOpenStayDurationModal] = useState(false);

  const [selectedTab, setSelectedTab] = useState(tabNames[0]);

  return (
    <div className="big_input_group">
      <TabButtonWrap
        tabNames={tabNames}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <div className="input_group_container">
        <DashBox />
        <h5>가는편</h5>

        <div className="input_group">
          <h4>출발</h4>
          <Select
            options={[{ value: "ICN", label: "[ICN] 인천국제공항" }]}
            value={inputs.departureAirport}
            onChangeHandler={value => setInputs({ ...inputs, departureAirport: value })}
          />
        </div>

        <div className="input_group">
          <h4>도착</h4>
          <Select
            options={[{ value: "", label: "도착지를 선택해주세요." }]}
            value={inputs.arrivalAirport}
            onChangeHandler={value => setInputs({ ...inputs, arrivalAirport: value })}
          />
        </div>

        <div className="input_group_two_row">
          <div className="input_group">
            <h4>년도</h4>
            <Select
              options={[moment().format("YYYY"), moment().add(1, "year").format("YYYY")].map(
                year => {
                  return {
                    value: year,
                    label: `${year}년`,
                  };
                }
              )}
              value={inputs.travelDate.year}
              onChangeHandler={value =>
                setInputs({ ...inputs, travelDate: { ...inputs.travelDate, year: value } })
              }
            />
          </div>
          <div className="input_group">
            <h4>월</h4>
            <Select
              options={Array.from({ length: 12 }, (_, i) => ({
                value: String(i + 1),
                label: `${i + 1}월`,
              }))}
              value={inputs.travelDate.month}
              onChangeHandler={value =>
                setInputs({ ...inputs, travelDate: { ...inputs.travelDate, month: value } })
              }
            />
          </div>
        </div>

        <div className="input_group_two_row">
          <div className="input_group">
            <h4>체류 기간</h4>
            <InputText
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
          <div className="input_group">
            <h4>인원 수</h4>
            <Select
              options={Array.from({ length: 10 }, (_, i) => ({
                value: String(i + 1),
                label: `${i + 1}명`,
              }))}
              value={inputs.passengerCount}
              onChangeHandler={value => setInputs({ ...inputs, passengerCount: value })}
            />
          </div>
        </div>
      </div>

      <MainButton btnName="검색" onClickHandler={() => {}} />
    </div>
  );
};

export default FlightSearchBig;
