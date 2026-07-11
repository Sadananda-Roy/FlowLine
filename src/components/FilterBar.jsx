import { Radio, Row, Select } from "antd";
import { TASK_STATUS, TASK_STATUS_OPTIONS } from "../constants/taskStatus";
import "../styles/FilterBar.css";
import { useState } from "react";

const FilterBar = () => {
  const [statusFilter, setStatusFilter] = useState(TASK_STATUS.ALL);
  const changeFilter = (e) => {
    setStatusFilter(e.target.value);
  };
  return (
    <Row className="filter-bar">
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
      <div className="sortby-container">
        <label>Sort by</label>
        <Select
          className="input-select"
          size="small"
          defaultValue="due_asc"
          style={{ width: 150 }}
          //   onChange={handleChange}
          options={[
            { value: "due_asc", label: "Due date - Asc" },
            { value: "due_desc", label: "Due date - Desc" },
          ]}
        />
      </div>
    </Row>
  );
};

export default FilterBar;
