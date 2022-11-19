import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);
  return (
    <>
      <section className="mb-3">
        <h1>Callback Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment={incrementFather} />
      </section>
    </>
  );
};
