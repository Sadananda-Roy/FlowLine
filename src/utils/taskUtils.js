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
