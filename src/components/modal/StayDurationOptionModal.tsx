import Select from "../inputs/Select";
import "./modal.scss";

type Props = {
  onChangeHandler: (value: { firstStep: number; secondStep: number }) => void;
  value: {
    firstStep: number;
    secondStep: number;
  };
};

const StayDurationOptionModal: React.FC<Props> = ({ onChangeHandler, value }) => {
  return (
    <div className="input_in_modal stay_duration">
      <Select
        options={Array.from({ length: 10 }, (_, i) => ({
          value: String(i + 1),
          label: `${i + 1}박`,
        }))}
        value={String(value.firstStep)}
        onChangeHandler={firstStep => onChangeHandler({ ...value, firstStep: Number(firstStep) })}
      />

      <Select
        options={Array.from({ length: 10 }, (_, i) => ({
          value: String(i + value.firstStep),
          label: `${i + value.firstStep}일`,
        }))}
        value={String(value.secondStep)}
        onChangeHandler={secondStep =>
          onChangeHandler({ ...value, secondStep: Number(secondStep) })
        }
      />
    </div>
  );
};

export default StayDurationOptionModal;
