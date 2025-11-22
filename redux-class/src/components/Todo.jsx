import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  let handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  let handleMark = (id) => {
    dispatch(markAsDone(id));
  };

  const doneStyle = {
    textDecoration: "line-through",
    opacity: 0.5,
    color: "gray",
  };

  return (
    <>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? doneStyle : {}}>
              {" "}
              {todo.task} &nbsp;
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>&nbsp;
            <button onClick={() => handleMark(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
