import dayjs from "dayjs";
import { DUE_IN_COLORS } from "../constants/taskStatus";

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

  return {
    result: isOverdue ? `Overdue by ${value}` : `${value} remaining`,
    days: isOverdue ? -days : days,
  };
};

export const formatDisplayDate = (date) => {
  return dayjs(date).format("dddd, DD MMMM YYYY");
};

export const getRemainingTimeBadgeColors = (days) => {
  console.log(days);
  switch (true) {
    case days > 10:
      return DUE_IN_COLORS.FAR;

    case days >= 6:
      return DUE_IN_COLORS.UPCOMING;

    case days >= 2:
      return DUE_IN_COLORS.SOON;

    default:
      return DUE_IN_COLORS.URGENT;
  }
};
