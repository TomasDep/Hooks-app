import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { onInputChange, onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });
  return (
    <>
      <section className="mb-3">
        <h1>Form With Custom Hook</h1>
        <hr />
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        <input
          type="email"
          className="form-control my-2"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input
          type="password"
          className="form-control my-2"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        <button className="btn btn-primary" onClick={onResetForm}>
          Reset
        </button>
      </section>
    </>
  );
};
