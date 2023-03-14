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
      // state : it mentions initial state
      // action : it mentions payload(values) and type
      console.log(action, "action");
      return {
        ...state,
        // previous value
        tasks: [
          ...state.tasks,
          //
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
    //   const index = state.tasks.findIndex(
    //     (value: any) => value.id === action.payload.id
    //   );
    //   const editValue = [...state];
    //   return  (editValue[index].text = action.payload.text);
    // },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (value: any) => value.id === action.payload.id
      );
      const givenValue = [...state.tasks];
      givenValue[index].text = action.payload.text
      state.tasks = givenValue
      return state;
    },
  },
});

export const { addTask, deleteTask,updateTask } = ToDoSlice.actions;

export default ToDoSlice;

