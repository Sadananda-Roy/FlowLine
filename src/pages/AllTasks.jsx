import { useState } from "react";
import FilterBar from "../components/FilterBar";
import SummaryBar from "../components/SummaryCards/SummaryBar";
import TaskList from "../components/TaskList";
import "../styles/AllTasks.css";
import { TASK_STATUS } from "../constants/taskStatus";
import { useSelector } from "react-redux";
import { SORT_ORDER } from "../constants/sortOrder";
import { filterTasks, sortTasks } from "../utils/taskUtils";
import { useOutletContext } from "react-router";

const AllTasks = () => {
  const { setModalState, messageApi } = useOutletContext();
  const allTasks = useSelector((state) => state.tasks.list);
  const [statusFilter, setStatusFilter] = useState(TASK_STATUS.ALL);
  const [sortOrder, setSortOrder] = useState(SORT_ORDER.NEWEST_FIRST);

  const changeStatusFilter = (e) => {
    setStatusFilter(e.target.value);
  };

  const filteredTasks = filterTasks(allTasks, statusFilter);

  const sortedTasks = sortTasks([...filteredTasks], sortOrder);

  return (
    <div className="all-tasks">
      <SummaryBar />
      <FilterBar
        statusFilter={statusFilter}
        changeStatusFilter={changeStatusFilter}
        sortOrder={sortOrder}
        changeSortFilter={setSortOrder}
      />
      <TaskList
        tasks={sortedTasks}
        setModalState={setModalState}
        messageApi={messageApi}
      />
    </div>
  );
};

export default AllTasks;
