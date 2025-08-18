import "./inputs.scss";

type Props = {
  options: { value: string; label: string }[];
  value: string;
  onChangeHandler: (value: string) => void;
};

const Select: React.FC<Props> = ({ options, value, onChangeHandler }) => {
  return (
    <select className="select" value={value} onChange={e => onChangeHandler(e.target.value)}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
