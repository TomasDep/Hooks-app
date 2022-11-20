import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });
  const onFormSubmit = () => {
    event?.preventDefault();
    if (description?.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };
    onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button className="btn btn-outline-info mt-2" type="submit">
          <span>Agregar</span>
        </button>
      </form>
    </>
  );
};
