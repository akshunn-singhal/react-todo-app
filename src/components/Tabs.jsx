import { getFilteredList } from "../utils/todoUtils";
export default function Tabs({ todos, selectedTab, setSelectedTab }) {
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, index) => {
        const numberOfTasks = getFilteredList(tab, todos).length;
        return (
          <button
            onClick={() => setSelectedTab(tab)}
            className={
              "tab-button " + (tab === selectedTab ? "tab-selected" : "")
            }
            key={index}
          >
            <h4>
              {tab}
              <span>({numberOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
