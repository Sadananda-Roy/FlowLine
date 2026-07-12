import { useSelector } from "react-redux";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";
import { filterTasks, sortTasks } from "../utils/taskUtils";
import { TASK_STATUS } from "../constants/taskStatus";
import { useState } from "react";
import { SORT_ORDER } from "../constants/sortOrder";
import { useOutletContext } from "react-router";

const CompletedTasks = () => {
  const { setModalState } = useOutletContext();
  const [sortOrder, setSortOrder] = useState(SORT_ORDER.NEWEST_FIRST);

  const allTasks = useSelector((state) => state.tasks.list);

  const compTasks = filterTasks(allTasks, TASK_STATUS.COMPLETED);
  const sortedTasks = sortTasks([...compTasks], sortOrder);

  return (
    <div style={{ paddingInline: "8px" }}>
      {/* <SummaryBar /> */}
      <FilterBar
        statusFilter={TASK_STATUS.COMPLETED}
        sortOrder={sortOrder}
        changeSortFilter={setSortOrder}
        showAllStatuses={false}
      />
      <TaskList tasks={sortedTasks} setModalState={setModalState} />
    </div>
  );
};

export default CompletedTasks;
