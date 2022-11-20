import { useEffect, useReducer } from "react";
import { ITodo } from "../interfaces/todos.interface";
import { todoReducer } from "../useReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")!) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleNewTodo = (todo: ITodo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  const handleDeleteTodo = (todo: ITodo) => {
    console.log("handleDeleteTodo todo: ", todo);
    const action = {
      type: "[TODO] Remove Todo",
      payload: todo,
    };
    dispatch(action);
  };
  const handleToggleTodo = (todo: ITodo) => {
    console.log("handleToggleTodo todo: ", todo);
    const action = {
      type: "[TODO] Toggle Todo",
      payload: todo,
    };
    dispatch(action);
  };
  return {
    todos,
    todosCount: todos?.length,
    pendingTodosCount: todos?.filter((todo: ITodo) => !todo?.done)?.length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
