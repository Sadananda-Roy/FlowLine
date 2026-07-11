import { SORT_ORDER } from "../constants/sortOrder";
import { TASK_STATUS } from "../constants/taskStatus";

export const getTaskCountByStatus = (tasks, status) => {
  if (status === TASK_STATUS.ALL) {
    return tasks.length;
  }
  return tasks.filter((item) => item.status === status).length;
};

export const getPercentByStatus = (tasks, status) => {
  return (getTaskCountByStatus(tasks, status) / tasks.length) * 100;
};

export const filterTasks = (tasks, filter) =>
  filter === TASK_STATUS.ALL
    ? tasks
    : tasks.filter((item) => item.status === filter);

export const sortTasks = (tasks, sort) => {
  switch (sort) {
    case SORT_ORDER.DUE_DATE_ASC:
      return tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    case SORT_ORDER.DUE_DATE_DESC:
      return tasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    default:
      return tasks;
  }
};
