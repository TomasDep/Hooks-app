import { TodoItem } from "./TodoItem";
import { ITodo } from "../interfaces/todos.interface";

export const TodoList = ({
  todos,
  onDeleteTodo,
  onToggleTodo,
}: {
  todos: ITodo[];
  onDeleteTodo: any;
  onToggleTodo: any;
}) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo?.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </>
  );
};
