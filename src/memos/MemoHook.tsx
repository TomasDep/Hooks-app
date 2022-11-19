import { useCounter } from "../hooks/useCounter";
import { useMemo, useState } from "react";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("iteration", i);
  }
  return `${iterationNumber}`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);
  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <section>
        <h1>
          Counter: <small>{memorizeValue}</small>
        </h1>
        <hr />
        <h4>{heavyStuff(counter)}</h4>
        <button className="btn btn-primary" onClick={() => increment(1)}>
          <span>+1</span>
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => setShow(!show)}
        >
          <p className="mb-0">
            <span>Show/Hide&nbsp;</span>
            <code>{JSON.stringify(show)}</code>
          </p>
        </button>
      </section>
    </>
  );
};
