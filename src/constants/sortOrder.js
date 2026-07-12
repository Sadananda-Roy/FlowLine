export const SORT_ORDER = {
  NEWEST_FIRST: "newest",
  DUE_DATE_ASC: "due_asc",
  DUE_DATE_DESC: "due_desc",
};

export const SORT_ORDER_OPTIONS = [
  {
    value: SORT_ORDER.NEWEST_FIRST,
    label: "Newest first",
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
