import { Col, Radio, Row, Select } from "antd";
import { TASK_STATUS, TASK_STATUS_OPTIONS } from "../constants/taskStatus";
import "../styles/FilterBar.css";
import { SORT_ORDER_OPTIONS } from "../constants/sortOrder";

const FilterBar = ({
  statusFilter,
  changeStatusFilter,
  changeSortFilter,
  sortOrder,
  showAllStatuses = true,
}) => {
  const select_options = showAllStatuses
    ? TASK_STATUS_OPTIONS
    : [TASK_STATUS.COMPLETED];
  return (
    <Row className="filter-bar">
      <Col
        className="status-container"
        xs={{ span: 24, order: 2 }}
        md={{ span: 15, order: 1 }}
        xl={{ span: 8, order: 1 }}
      >
        <Radio.Group
          className="radio-group-status"
          defaultValue={statusFilter}
          onChange={changeStatusFilter}
        >
          {select_options.map((item) => (
            <Radio.Button
              className={`radio-btn ${item === statusFilter ? "checked" : ""}`}
              value={item}
              key={item}
            >
              {item}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Col>
      <Col
        className="sortby-container"
        xs={{ span: 24, order: 1 }}
        md={{ span: 9, order: 2 }}
        xl={{ span: 8, order: 2 }}
      >
        <label>Sort by</label>
        <Select
          className="input-select"
          size="large"
          value={sortOrder}
          style={{ width: 150 }}
          onChange={changeSortFilter}
          options={SORT_ORDER_OPTIONS}
        />
      </Col>
    </Row>
  );
};

export default FilterBar;
