import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import { saveTasks } from "../services/storage";

const store = configureStore({
  reducer: { tasks: taskReducer },
});

store.subscribe(() => {
  const tasks = store.getState().tasks.list;
  saveTasks(tasks);
});

export { store };
