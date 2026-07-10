import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { Button } from "antd";

const AllTasks = () => {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  const samplePayload = {
    id: 21,
    title: "Testing Redux Toolkit",
    description: "Redux Toolkit setup done. Needs Testing",
    status: "Pending",
    dueDate: "2026-07-26",
  };

  const addNewTask = () => {
    dispatch(addTask(samplePayload));
  };

  return (
    <div>
      <Button type="primary" onClick={addNewTask}>
        Click
      </Button>
      {tasks.map((item, index) => {
        return <p key={item.title + index}>{item.title}</p>;
      })}
    </div>
  );
};

export default AllTasks;
