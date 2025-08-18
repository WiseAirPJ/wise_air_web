import "./buttons.scss";

type Props = {
  onPointerDown: React.PointerEventHandler<HTMLDivElement>;
  onPointerMove: React.PointerEventHandler<HTMLDivElement>;
  onPointerUp: React.PointerEventHandler<HTMLDivElement>;
  onPointerCancel: React.PointerEventHandler<HTMLDivElement>;
};

const HandMovingButton: React.FC<Props> = ({
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
}) => {
  return (
    <div
      className="hand_moving_button"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      <div className="hand_moving_icon"></div>
    </div>
  );
};

export default HandMovingButton;
