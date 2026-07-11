import { Badge } from "antd";
import "../../styles/StatusPill.css";
import { TASK_STATUS } from "../../constants/taskStatus";
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
            style={{ paddingRight: "8px", fontSize: "14px", color: "green" }}
          />
        ) : (
          <Badge className="badge" status={getBadgeStatus()} />
        )}
      </span>
      {status}
    </div>
  );
};
export default StatusPill;
