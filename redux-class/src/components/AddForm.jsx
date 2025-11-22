import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();

  let handleChange = (e) => {
    setTask(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    setTask("");
    dispatch(addTodo(task));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task Here"
          value={task}
          onChange={handleChange}
        ></input>
        &nbsp; &nbsp;
        <button>Submit</button>
      </form>
    </>
  );
}
