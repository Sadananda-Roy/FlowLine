import { Col, Row } from "antd";
import { TASK_STATUS_OPTIONS } from "../../constants/taskStatus";
import SummaryCard from "./SummaryCard";
import "../../styles/SummaryBar.css";

const SummaryBar = () => {
  return (
    <Row className="summary-bar" gutter={[16, 16]}>
      {TASK_STATUS_OPTIONS.map((status) => (
        <Col xs={24} md={12} xl={6} key={status}>
          <SummaryCard status={status} />
        </Col>
      ))}
    </Row>
  );
};

export default SummaryBar;
