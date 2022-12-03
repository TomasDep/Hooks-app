import { useContext } from "react";
import { UserContext } from "./context/UserContext";
export const HomePage = () => {
  const { user } = useContext<any>(UserContext);
  return (
    <>
      <section className="mb-3">
        <h1>
          HomePage <small>{user?.name}</small>
        </h1>
        <hr />
        <pre>{JSON.stringify(user, null, 3)}</pre>
      </section>
    </>
  );
};
