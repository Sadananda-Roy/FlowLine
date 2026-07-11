import { useState } from "react";
import FilterBar from "../components/FilterBar";
import SummaryBar from "../components/SummaryCards/SummaryBar";
import TaskList from "../components/TaskList";
import "../styles/AllTasks.css";
import { TASK_STATUS } from "../constants/taskStatus";

const AllTasks = () => {
  const [statusFilter, setStatusFilter] = useState(TASK_STATUS.ALL);
  const changeFilter = (e) => {
    setStatusFilter(e.target.value);
  };

  return (
    <div className="all-tasks">
      <SummaryBar />
      <FilterBar statusFilter={statusFilter} changeFilter={changeFilter} />
      <TaskList />
    </div>
  );
};

export default AllTasks;
