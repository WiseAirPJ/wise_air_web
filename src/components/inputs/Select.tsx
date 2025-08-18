import { ReactNode } from "react";
import "./inputs.scss";
import classNames from "classnames";

type Props = {
  icon?: ReactNode;
  options: { value: string; label: string }[];
  onChangeHandler: (value: string) => void;
  value: string;
};

const Select: React.FC<Props> = ({ icon, options, value, onChangeHandler }) => {
  return (
    <div className="icon_select_container">
      <div
        className={classNames("icon_select", {
          none_icon: !icon,
        })}
      >
        <div className="icon_container">{icon}</div>
        <select value={value} onChange={e => onChangeHandler?.(e.target.value)}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
