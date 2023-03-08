import InputWrapper from "../../Input";
import Cards from "../../Cards";
import { RootState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import { useAppDispatch } from "../../../app/hooks";
import { addTask } from "../../../features/counter/TodoSlice";

const HomePage = () => {
  const [value, setValue] = useState<any>();
  const [values, setValues] = useState<any>();
  const dispatch = useDispatch();

  const tasks: any = useSelector((state: RootState) => state?.toDo?.tasks);
  console.log(tasks,"tasks");
  

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setValues(value);
    dispatch(addTask( value ));
  };

  console.log(values, "value1");

  console.log(value, "value");

  return (
    <div className="HomePageWrapper">
      <h1 className="hero">Redux-toolkit Todolist</h1>
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
      {values&&<div className="toDoCardWrapper">
        {tasks &&tasks?.map((el: any) => (
          <Cards toDovalue={el} />
        ))}
      </div>}
    </div>
  );
};

export default HomePage;
