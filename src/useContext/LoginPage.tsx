import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext<any>(UserContext);
  console.log(user);
  return (
    <>
      <section className="mb-3">
        <h1>LoginPage</h1>
        <hr />
        <pre>{JSON.stringify(user, null, 3)}</pre>
        <button
          className="btn btn-primary"
          onClick={() => {
            setUser({ id: 1, name: "John Doe", email: "jdoe@email.com" });
          }}
        >
          Set User
        </button>
      </section>
    </>
  );
};
