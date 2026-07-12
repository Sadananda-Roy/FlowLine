export const TASK_STATUS = {
  ALL: "All",
  IN_PROGRESS: "In Progress",
  PENDING: "Pending",
  COMPLETED: "Completed",
};

export const TASK_STATUS_OPTIONS = Object.values(TASK_STATUS);

export const TASK_STATUS_COLORS = {
  [TASK_STATUS.PENDING]: {
    bg: "#FFF3E0",
    text: "#EF6C00",
  },
  [TASK_STATUS.IN_PROGRESS]: {
    bg: "#E3F2FD",
    text: "#1565C0",
  },
  [TASK_STATUS.COMPLETED]: {
    bg: "#E8F5E9",
    text: "#2E7D32",
  },
  DUE: {
    bg: "#F3E5F5",
    text: "#6A1B9A",
  },
  OVERDUE: {
    bg: "#FFEBEE",
    text: "#C62828",
  },
};

export const DUE_IN_COLORS = {
  FAR: {
    // more than 10 days remaining
    bg: "#E8F5E9",
    text: "#2E7D32",
  },
  UPCOMING: {
    // 6 to 10 days remaining
    bg: "#F1F8E9",
    text: "#558B2F",
  },
  SOON: {
    // around 5 days remaining
    bg: "#FFF8E1",
    text: "#F57F17",
  },
  URGENT: {
    // around 1 day remaining
    bg: "#FBE9E7",
    text: "#D84315",
  },
};
