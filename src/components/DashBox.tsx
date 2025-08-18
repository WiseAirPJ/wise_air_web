import "./components.scss";

const DashBox = () => {
  return (
    <svg className="dash" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <rect
        x="1.5"
        y="1.5"
        width="97"
        height="97"
        rx="4"
        ry="4"
        fill="none"
        stroke="#dae1e9"
        stroke-width="1"
        stroke-linecap="round"
        stroke-dasharray="6 8"
        vector-effect="non-scaling-stroke"
      />
    </svg>
  );
};

export default DashBox;
