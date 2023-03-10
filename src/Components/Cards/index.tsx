import { useDispatch } from "react-redux";
import { deleteTask } from "../../features/counter/TodoSlice";
import InputWrapper from "../Input";
import { useState } from "react";

const Cards = ({ toDovalue }: any) => {
  console.log(toDovalue, "toDovalue");
  const [editView, setEditView] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(toDovalue?.id));
  };
  const handleEdit = () => {
    setEditView(true);
    // dispatch(deleteTask(toDovalue?.index));
  };

  return (
    <div className="CardsWrapper">
      {!editView ? (
        <span style={{width: '200px'}}>{toDovalue?.text}</span>
      ) : (
        <InputWrapper
          className="CardsWrapper-input"
          placeholder="Enter a Value"
          value={toDovalue?.text}
          onChange={handleEdit}
        />
      )}

      <div>
        <button onClick={handleEdit} className="buttonWrapper">
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
