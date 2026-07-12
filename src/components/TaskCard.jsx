import { Button, Col, Row } from "antd";
import "../styles/TaskCard.css";
import StatusPill from "./ui/StatusPill";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { getRemainingTime } from "../utils/date";

const TaskCard = ({ data, setModalState }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    setModalState({ open: true, mode: "edit", task: data });
  };
  const handleDelete = () => {
    dispatch(deleteTask(data.id));
  };
  return (
    <div className="task-card">
      <Row className="title-container">
        <Col className="title" span={15}>
          {data.title}
        </Col>
        <Col span={9} className="status">
          <StatusPill status={data.status} />
        </Col>
      </Row>
      <div className="description">{data.description}</div>
      <div className="footer">
        <div className="due-date">
          <div className="due">Due {data.dueDate}</div>
          <div className="remaining-time">{getRemainingTime(data.dueDate)}</div>
        </div>
        <div className="action-buttons">
          <Button
            className="edit"
            size="small"
            icon={<EditFilled />}
            onClick={handleEdit}
          />
          <Button
            onClick={handleDelete}
            className="delete"
            size="small"
            icon={<DeleteFilled />}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
