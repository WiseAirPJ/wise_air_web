import "./buttons.scss";

type Props = {
  btnName: string;
  onClickHandler: () => void;
};

const MainButton: React.FC<Props> = ({ btnName, onClickHandler }) => {
  return (
    <button
      className="main_button"
      onClick={e => {
        e.stopPropagation();
        onClickHandler();
      }}
    >
      {btnName}
    </button>
  );
};

export default MainButton;
