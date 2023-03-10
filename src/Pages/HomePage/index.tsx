import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTask } from "../../features/counter/TodoSlice";
import { RootState } from "../../app/store";
import Cards from "../../Components/Cards";
import InputWrapper from "../../Components/Input";

const HomePage = () => {
  const [value, setValue] = useState<any>();
  const [id, setId] = useState<any>(1);
  const dispatch = useDispatch();
  const tasks: any = useSelector((state: RootState) => state?.toDo?.tasks);
  console.log(tasks, "tasks");

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTask({ value: value, id: id }));
    setId(id + 1);
  };

  console.log(value, "value");

  return (
    <div className="HomePageWrapper">
      <h1 className="hero"> Todolist using Redux-Toolkit </h1>
      <div className="valueWrapper">
        <InputWrapper
          onChange={handleInputChange}
          type="text"
          placeholder="Enter a Value"
        />
        <button onClick={handleSubmit} className="buttonWrapper">
          Add +
        </button>
      </div>
      {value && (
        <div className="toDoCardWrapper">
          {tasks && tasks?.map((el: any) => <Cards toDovalue={el} />)}
        </div>
      )}
    </div>
  );
};

export default HomePage;
