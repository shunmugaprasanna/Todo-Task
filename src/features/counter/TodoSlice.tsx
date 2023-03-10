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
      console.log(action, "action");
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { text: action.payload.value, id: action.payload.id },
        ],
      };
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      console.log("id", id);
      const temp = state?.tasks?.filter((tasks: any) => tasks.id !== id);
      return {
        ...state,
        tasks: temp,
      };
    },
    // editTask: (state, action) => {
    //   const index  = action.payload.text;
    //   // const editValue = state?.tasks.findIndex((tasks: any) => tasks.id === );

    //   return {
    //     ...state,
    //     tasks:editValue,
    //   };
    // },
  },
});

export const { addTask, deleteTask , } = ToDoSlice.actions;

export default ToDoSlice;
