import { ITodo } from "../interfaces/todos.interface";

export const TodoItem = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
}: {
  todo: ITodo;
  onDeleteTodo: any;
  onToggleTodo: any;
}) => {
  return (
    <>
      <li
        key={todo?.id}
        className="list-group-item d-flex justify-content-between"
      >
        <span
          className={`align-self-center ${
            todo?.done ? "text-decoration-line-through" : ""
          }`}
          onClick={() => onToggleTodo(todo)}
        >
          {todo?.description}
        </span>
        <button className="btn btn-danger" onClick={() => onDeleteTodo(todo)}>
          Borrar
        </button>
      </li>
    </>
  );
};
