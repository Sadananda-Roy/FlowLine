import taskMocks from "../mocks/taskMocks";

const STORAGE_KEY = "flowline_tasks";

export const loadTasks = () => {
  try {
    const localTasks = localStorage.getItem(STORAGE_KEY);
    if (!localTasks) return taskMocks;
    return JSON.parse(localTasks);
  } catch (error) {
    console.error("Failed to load tasks:", error);
    return taskMocks;
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Failed to save tasks:", error);
  }
};
