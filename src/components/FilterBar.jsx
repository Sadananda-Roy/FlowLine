import { Radio } from "antd";
import { TASK_STATUS, TASK_STATUS_OPTIONS } from "../constants/taskStatus";
import "../styles/FilterBar.css";
import { useState } from "react";

const FilterBar = () => {
  const [statusFilter, setStatusFilter] = useState(TASK_STATUS.ALL);
  const changeFilter = (e) => {
    setStatusFilter(e.target.value);
  };
  return (
    <div className="filter-bar">
      <Radio.Group
        className="radio-group-status"
        defaultValue={statusFilter}
        onChange={changeFilter}
      >
        {TASK_STATUS_OPTIONS.map((item) => (
          <Radio.Button
            className={`radio-btn ${item === statusFilter ? "checked" : ""}`}
            value={item}
            key={item}
          >
            {item}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

export default FilterBar;
