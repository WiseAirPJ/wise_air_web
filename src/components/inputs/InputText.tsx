import { JSX, ReactNode, useEffect } from "react";
import "./inputs.scss";
import classNames from "classnames";

type Props = {
  icon?: ReactNode;
  onChangeHandler: (value: string) => void;
  value: string;
  isModalData?: {
    openModal: () => void;
    closeModal: () => void;
    modalComponent: JSX.Element | null;
    isOpen: boolean;
    ref: React.Ref<HTMLDivElement> | null;
  };
};

const InputText: React.FC<Props> = ({ icon, value, onChangeHandler, isModalData }) => {
  useEffect(() => {
    // ref 바깥을 클릭시 모달 닫힘
    if (isModalData?.ref) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          isModalData.ref &&
          !(isModalData.ref as React.RefObject<HTMLDivElement>).current?.contains(
            event.target as Node
          )
        ) {
          isModalData.closeModal();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isModalData?.ref]);

  return (
    <div
      ref={isModalData?.ref}
      className="icon_input_container"
      onClick={() => isModalData && isModalData.openModal()}
    >
      <div
        className={classNames("icon_input", {
          none_icon: !icon,
        })}
      >
        <div className="icon_container">{icon}</div>
        <input
          type="text"
          value={value}
          readOnly={isModalData ? true : false}
          onChange={e => onChangeHandler(e.target.value)}
        />
      </div>
      {isModalData && isModalData.isOpen && isModalData.modalComponent}
    </div>
  );
};

export default InputText;
