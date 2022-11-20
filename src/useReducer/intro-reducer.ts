const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action?.type?.includes("[TODO] add todo")) {
    return [...state, action?.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar fruta",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
