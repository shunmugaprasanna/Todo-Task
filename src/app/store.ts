import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {ToDoSlice}  from "../features/counter/TodoSlice";

export const store = configureStore({
  reducer: {
    toDo: ToDoSlice.reducer,
  },
});
// export const deleteTask = remove =>({
//   type : "REMOVE"
//   payload : remove
// })
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
