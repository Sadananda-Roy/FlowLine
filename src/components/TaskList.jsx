import TaskCard from "./TaskCard";
import { Row, Col } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/TaskList.css";
import { TASK_STATUS_COLORS } from "../constants/taskStatus";

const MotionCol = motion.create(Col);

const cardVariants = {
  initial: { opacity: 0, scale: 0.9, y: 16 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.92, y: -10 },
};

const TaskList = ({ tasks, setModalState, messageApi }) => {
  return (
    <Row className="task-list" gutter={[16, 16]}>
      <AnimatePresence mode="popLayout" initial={false}>
        {tasks.map((item) => (
          <MotionCol
            xs={24}
            md={12}
            xl={8}
            key={item.id}
            layout
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <TaskCard
              data={item}
              setModalState={setModalState}
              bgColor={TASK_STATUS_COLORS[item.status].bg}
              textColor={TASK_STATUS_COLORS[item.status].text}
              messageApi={messageApi}
            />
          </MotionCol>
        ))}
      </AnimatePresence>
    </Row>
  );
};

export default TaskList;
