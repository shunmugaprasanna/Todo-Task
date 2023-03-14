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
        // previous value and spreading all datas from state
        tasks: [
          ...state.tasks,
          //previous value of tasks which given in initial state
          { text: action.payload.value, id: action.payload.id },
        ],
      };
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      console.log("id", id);
      const temp = state?.tasks?.filter((tasks: any) => tasks.id !== id);
      // if task.id and payload.id are equalit will delete the card
      return {
        ...state,
        tasks: temp,
      };
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task: any) => task.id === action.payload.id
        // checking id of task and payload id using findindex array method(checking index of id since it is array)
      );
      const givenValue = [...state.tasks];
      // we are converting state.task into array bcoz index value can only taken from array
      givenValue[index].text = action.payload.text;
      // assigning payload text (checking index value of text and assigning to payload.text)
      state.tasks = givenValue;
      // ( givenValue[index].text = action.payload.text;)=>(assigning updated value to store)
      return state;
      // returning initial state
    },
  },
});

export const { addTask, deleteTask, updateTask } = ToDoSlice.actions;

export default ToDoSlice;
