export const TASK_STATUS = {
  ALL: "All",
  IN_PROGRESS: "In Progress",
  PENDING: "Pending",
  COMPLETED: "Completed",
};

export const TASK_STATUS_OPTIONS = Object.values(TASK_STATUS);

export const TASK_STATUS_COLORS = {
  [TASK_STATUS.PENDING]: "#FB8C00", // Orange 600
  [TASK_STATUS.IN_PROGRESS]: "#1E88E5", // Blue 600
  [TASK_STATUS.COMPLETED]: "#43A047", // Green 600
};
