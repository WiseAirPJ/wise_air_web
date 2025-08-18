import classNames from "classnames";

type Props = {
  tabNames: string[];
  selectedTab: string;
  setSelectedTab: (tabName: string) => void;
};

const TabButtonWrap: React.FC<Props> = ({ tabNames, selectedTab, setSelectedTab }) => {
  return (
    <div className="tab_button_wrap">
      {tabNames.map(tabName => (
        <button
          key={tabName}
          onClick={() => setSelectedTab(tabName)}
          className={classNames("tab_button", { active: selectedTab === tabName })}
        >
          {tabName}
        </button>
      ))}
    </div>
  );
};

export default TabButtonWrap;
