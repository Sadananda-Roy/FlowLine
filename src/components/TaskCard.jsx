import { Button, Col, Popconfirm, Row } from "antd";
import "../styles/TaskCard.css";
import StatusPill from "./ui/StatusPill";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import {
  formatDisplayDate,
  getRemainingTime,
  getRemainingTimeBadgeColors,
} from "../utils/date";
import { TASK_STATUS } from "../constants/taskStatus";

const TaskCard = ({ data, setModalState, bgColor, messageApi }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    setModalState({ open: true, mode: "edit", task: data });
  };
  const handleDelete = () => {
    dispatch(deleteTask(data.id));
    messageApi.open({
      type: "error",
      content: `Task "${data.title}" was deleted successfully`,
    });
  };
  return (
    <div
      className="task-card"
      style={{
        backgroundColor:
          data.status === TASK_STATUS.COMPLETED ? bgColor : "#f7f8f7",
      }}
    >
      <Row className="title-container">
        <Col
          className={`title ${data.status === TASK_STATUS.COMPLETED ? "completed" : ""}`}
          span={18}
          // style={{ color: textColor }}
        >
          {data.title}
        </Col>
        <Col span={6} className="status">
          <StatusPill status={data.status} />
        </Col>
      </Row>
      <div className="description">{data.description}</div>
      <div className="footer">
        <div className="due-date">
          <div className="due">
            {data.status !== TASK_STATUS.COMPLETED ? (
              <div>Due: {formatDisplayDate(data.dueDate)}</div>
            ) : (
              <div className="done">Done</div>
            )}
          </div>
          {data.status !== TASK_STATUS.COMPLETED && (
            <span
              className="remaining-time"
              style={{
                backgroundColor: getRemainingTimeBadgeColors(
                  getRemainingTime(data.dueDate).days,
                ).bg,
                color: getRemainingTimeBadgeColors(
                  getRemainingTime(data.dueDate).days,
                ).text,
              }}
            >
              {getRemainingTime(data.dueDate).result}
            </span>
          )}
        </div>
        <div className="action-buttons">
          <Button
            className="edit"
            size="medium"
            icon={<EditOutlined className="edit-icon" />}
            onClick={handleEdit}
          />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={handleDelete}
          >
            <Button
              // onClick={handleDelete}
              className="delete"
              size="medium"
              icon={<DeleteOutlined className="delete-icon" />}
            />
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
