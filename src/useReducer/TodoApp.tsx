import { TodoList, TodoAdd } from "../useReducer";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodos();
  return (
    <>
      <section className="mb-3">
        <h1>
          <span>
            Todo App <em>{todosCount}</em>,&nbsp;
          </span>
          <small>
            Pendientes: <em>{pendingTodosCount}</em>
          </small>
        </h1>
        <hr />
        <div className="row">
          <div className="col-7">
            <TodoList
              todos={todos}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
          </div>
          <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo={handleNewTodo} />
          </div>
        </div>
      </section>
    </>
  );
};
