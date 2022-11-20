import { ITodo, ITodoReducer } from "../interfaces/todos.interface";

export const todoReducer = (initialState = [], action: ITodoReducer) => {
  switch (action?.type) {
    case "[TODO] Add Todo":
      return [...initialState, action?.payload];
    case "[TODO] Remove Todo":
      return initialState?.filter(
        (todo: ITodo) => todo?.id !== action?.payload?.id
      );
    case "[TODO] Toggle Todo":
      return initialState?.map((todo: ITodo) => {
        console.log(action?.payload?.id, todo?.id);
        if (todo?.id === action?.payload?.id) {
          return { ...todo, done: !todo?.done };
        }
        console.log(todo);
        return todo;
      });
    default:
      return initialState;
  }
};
