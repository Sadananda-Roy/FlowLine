import dayjs from "dayjs";

export const formatDate = (date) => {
  return date.format("YYYY-MM-DD");
};

export const getRemainingTime = (dueDate) => {
  const now = dayjs();
  const due = dayjs(dueDate);

  const isOverdue = now.isAfter(due);

  const diff = Math.abs(due.diff(now));

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let value;

  if (days > 0) {
    value = `${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    value = `${hours} hour${hours > 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    value = `${minutes} minute${minutes > 1 ? "s" : ""}`;
  } else {
    return "Due now";
  }

  return isOverdue ? `Overdue by ${value}` : `Due in ${value}`;
};
