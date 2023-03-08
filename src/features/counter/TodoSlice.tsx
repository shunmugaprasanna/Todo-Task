import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  ToDoList: any;
}
const initialState: any = {
  tasks: [],
};

export const ToDoSlice = createSlice({
  name: "todo",
  initialState: initialState,

  reducers: {
    addTask: (state, action) => {
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload }],
      };
    },
  },
});

export const { addTask } = ToDoSlice.actions;

export default ToDoSlice;
