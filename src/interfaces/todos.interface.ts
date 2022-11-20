export interface ITodo {
  id: number;
  description: string;
  done: boolean;
}

export interface ITodoReducer {
  type: string;
  payload: ITodo;
}
