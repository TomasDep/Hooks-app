import { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2, counter3 } = state;
  return (
    <>
      <section className="mb-3">
        <h2>Counter</h2>
        <hr />
        <h3>
          <span>counter1:</span> {counter1}
        </h3>
        <h3>
          <span>counter2:</span> {counter2}
        </h3>
        <h3>
          <span>counter3:</span> {counter3}
        </h3>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() =>
            setCounter({
              ...state,
              counter1: counter1 + 1,
            })
          }
        >
          +1
        </button>
      </section>
    </>
  );
};
