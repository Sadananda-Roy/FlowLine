import { Col, Row } from "antd";
import {
  TASK_STATUS,
  TASK_STATUS_COLORS,
  TASK_STATUS_OPTIONS,
} from "../../constants/taskStatus";
import SummaryCard from "./SummaryCard";
import "../../styles/SummaryBar.css";

const SummaryBar = () => {
  return (
    <Row className="summary-bar" gutter={[16, 16]}>
      {TASK_STATUS_OPTIONS.filter((item) => item !== TASK_STATUS.ALL).map(
        (status) => (
          <Col xs={24} md={12} xl={8} key={status}>
            <SummaryCard
              status={status}
              bgColor={TASK_STATUS_COLORS[status]?.bg}
            />
          </Col>
        ),
      )}
    </Row>
  );
};

export default SummaryBar;
