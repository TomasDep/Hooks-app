import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";
import { useState } from "react";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <>
      <section>
        <h1>
          Counter: <Small value={counter} />
        </h1>
        <hr />
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
