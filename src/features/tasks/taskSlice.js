import { createSlice } from "@reduxjs/toolkit";
import taskMocks from "../../mocks/taskMocks";

const initialState = { list: taskMocks };

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },

    deleteTask: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },

    updateTask: (state, action) => {
      let indexToUpdate = state.list.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.list[indexToUpdate] = action.payload;
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
