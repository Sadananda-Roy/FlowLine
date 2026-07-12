import { Badge } from "antd";
import "../../styles/StatusPill.css";
import { TASK_STATUS, TASK_STATUS_COLORS } from "../../constants/taskStatus";
import { CheckCircleFilled } from "@ant-design/icons";

const StatusPill = ({ status }) => {
  const getBadgeStatus = () => {
    if (status === TASK_STATUS.IN_PROGRESS) return "processing";
    return "warning";
  };
  return (
    <div className="status-pill">
      <span>
        {status === TASK_STATUS.COMPLETED ? (
          <CheckCircleFilled
            style={{
              paddingRight: "4px",
              fontSize: "14px",
              color: TASK_STATUS_COLORS[status].text,
            }}
          />
        ) : (
          <Badge className="badge" status={getBadgeStatus()} />
        )}
      </span>
      <span style={{ color: TASK_STATUS_COLORS[status].text }}>{status}</span>
    </div>
  );
};
export default StatusPill;
