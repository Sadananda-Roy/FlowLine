import { Button } from "antd";
import "../styles/TaskCard.css";
import StatusPill from "./ui/StatusPill";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

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
      <div className="title-container">
        <div className="title">{data.title}</div>
        <StatusPill status={data.status} />
      </div>
      <div className="description">{data.description}</div>
      <div className="footer">
        <div className="due-date">Due {data.dueDate}</div>
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
