import Select from "../inputs/Select";
import "./modal.scss";
import moment from "moment";

type Props = {
  onChangeHandler: (value: { year: string; month: string }) => void;
  value: {
    year: string;
    month: string;
  };
};

const TravelDateOptionModal: React.FC<Props> = ({ onChangeHandler, value }) => {
  return (
    <div className="input_in_modal travel_date">
      <Select
        options={[moment().format("YYYY"), moment().add(1, "year").format("YYYY")].map(year => {
          return {
            value: year,
            label: `${year}년`,
          };
        })}
        value={value.year}
        onChangeHandler={year => onChangeHandler({ ...value, year })}
      />

      <Select
        options={Array.from({ length: 12 }, (_, i) => ({
          value: String(i + 1),
          label: `${i + 1}월`,
        }))}
        value={String(value.month)}
        onChangeHandler={month => onChangeHandler({ ...value, month })}
      />
    </div>
  );
};

export default TravelDateOptionModal;
