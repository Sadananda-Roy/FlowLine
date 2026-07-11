export const SORT_ORDER = {
  NONE: "none",
  DUE_DATE_ASC: "due_asc",
  DUE_DATE_DESC: "due_desc",
};

export const SORT_ORDER_OPTIONS = [
  {
    value: SORT_ORDER.NONE,
    label: "None",
  },
  {
    value: SORT_ORDER.DUE_DATE_ASC,
    label: "Nearest Deadline",
  },
  {
    value: SORT_ORDER.DUE_DATE_DESC,
    label: "Furthest Deadline",
  },
];
