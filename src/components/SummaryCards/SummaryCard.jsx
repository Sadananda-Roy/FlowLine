import { Progress, Tooltip } from "antd";
import "../../styles/SummaryCard.css";
import { useSelector } from "react-redux";
import {
  getPercentByStatus,
  getTaskCountByStatus,
} from "../../utils/taskUtils";
import { TASK_STATUS, TASK_STATUS_COLORS } from "../../constants/taskStatus";

const SummaryCard = ({ status, bgColor }) => {
  const tasks = useSelector((state) => state.tasks.list);
  return (
    <div className="summary-card" style={{ backgroundColor: bgColor }}>
      <div className="graph">
        {status === TASK_STATUS.ALL ? (
          <Tooltip
            title={`${getTaskCountByStatus(tasks, TASK_STATUS.COMPLETED)} Completed / ${getTaskCountByStatus(tasks, TASK_STATUS.IN_PROGRESS)} In Progress / ${getTaskCountByStatus(tasks, TASK_STATUS.PENDING)} Pending`}
          >
            <Progress
              size="small"
              percent={
                getPercentByStatus(tasks, TASK_STATUS.COMPLETED) +
                getPercentByStatus(tasks, TASK_STATUS.IN_PROGRESS)
              }
              success={{
                percent: getPercentByStatus(tasks, TASK_STATUS.COMPLETED),
              }}
              format={() => <div className="graph-percent"></div>}
              strokeWidth={10}
              railColor={TASK_STATUS_COLORS[TASK_STATUS.PENDING].text}
              type="circle"
            />
          </Tooltip>
        ) : (
          <Progress
            className="progress"
            size="small"
            type="circle"
            percent={getPercentByStatus(tasks, status)}
            strokeColor={TASK_STATUS_COLORS[status].text}
            strokeWidth={10}
            format={(percent) => (
              <div className="graph-percent">{percent}%</div>
            )}
          />
        )}
      </div>
      <div className="details">
        <div className="count">{getTaskCountByStatus(tasks, status)}</div>
        <div className="status">{status.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
