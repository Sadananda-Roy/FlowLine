import TaskCard from "./TaskCard";
import { Col, Row } from "antd";
import "../styles/TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <Row className="task-list" gutter={[16, 16]}>
      {tasks.map((item) => (
        <Col xs={24} md={12} xl={8} key={item.id}>
          <TaskCard data={item} />
        </Col>
      ))}
    </Row>
  );
};

export default TaskList;
