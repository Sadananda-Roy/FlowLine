import TaskCard from "./TaskCard";
import { Col, Row } from "antd";
import "../styles/TaskList.css";
import { TASK_STATUS_COLORS } from "../constants/taskStatus";

const TaskList = ({ tasks, setModalState, messageApi }) => {
  return (
    <Row className="task-list" gutter={[16, 16]}>
      {tasks.map((item) => (
        <Col xs={24} md={12} xl={8} key={item.id}>
          <TaskCard
            data={item}
            setModalState={setModalState}
            bgColor={TASK_STATUS_COLORS[item.status].bg}
            textColor={TASK_STATUS_COLORS[item.status].text}
            messageApi={messageApi}
          />
        </Col>
      ))}
    </Row>
  );
};

export default TaskList;
