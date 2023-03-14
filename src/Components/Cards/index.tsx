import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../features/counter/TodoSlice";
import InputWrapper from "../Input";
import { useState } from "react";

const Cards = ({ toDovalue }: any) => {
  console.log(toDovalue, "toDovalue");
  const [editView, setEditView] = useState(false);
  const [value, setValue] = useState<any>(toDovalue?.text || "");
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(toDovalue?.id));
  };
  const handleEdit = () => {
    setEditView((prev) => !prev);
  };
  const handleEditChange = (e: any) => {
    setValue((prev: any) => e.target.value);
    console.log("dasda");
  };
  const handleUpdate = (e: any) => {
    dispatch(updateTask({ id: toDovalue.id, text: value }));
    console.log("update");
  };

  return (
    <div className="CardsWrapper">
      <InputWrapper
        className="CardsWrapper-input"
        placeholder="Enter a Value"
        value={value}
        onChange={handleEditChange}
        disabled={!editView}
      />
      <div>
        <button
          onClick={editView ? handleUpdate : handleEdit}
          className="buttonWrapper"
        >
          {editView ? "Update" : "Edit"}
        </button>
        <button onClick={handleDelete} className="buttonWrapper">
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Cards;
