// import { useSelector, useDispatch } from "react-redux";
// import { addTask } from "../features/tasks/taskSlice";
import SummaryBar from "../components/SummaryCards/SummaryBar";
import "../styles/AllTasks.css";

const AllTasks = () => {
  // const tasks = useSelector((state) => state.tasks.list);
  // const dispatch = useDispatch();

  // const samplePayload = {
  //   id: 21,
  //   title: "Testing Redux Toolkit",
  //   description: "Redux Toolkit setup done. Needs Testing",
  //   status: "Pending",
  //   dueDate: "2026-07-26",
  // };

  // const addNewTask = () => {
  //   dispatch(addTask(samplePayload));
  // };

  return (
    <div className="all-tasks">
      <SummaryBar />
    </div>
  );
};

export default AllTasks;
