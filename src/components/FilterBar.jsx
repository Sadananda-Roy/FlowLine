import { Radio, Row, Select } from "antd";
import { TASK_STATUS_OPTIONS } from "../constants/taskStatus";
import "../styles/FilterBar.css";
import { SORT_ORDER_OPTIONS } from "../constants/sortOrder";

const FilterBar = ({
  statusFilter,
  changeStatusFilter,
  changeSortFilter,
  sortOrder,
}) => {
  return (
    <Row className="filter-bar">
      <Radio.Group
        className="radio-group-status"
        defaultValue={statusFilter}
        onChange={changeStatusFilter}
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
          value={sortOrder}
          style={{ width: 150 }}
          onChange={changeSortFilter}
          options={SORT_ORDER_OPTIONS}
        />
      </div>
    </Row>
  );
};

export default FilterBar;
