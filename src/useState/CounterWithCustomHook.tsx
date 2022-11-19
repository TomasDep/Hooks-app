import { useCounter } from "../hooks/useCounter";
export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <section className="mb-3">
        <h2>Counter with Hook: {counter}</h2>
        <hr />
        <button className="btn btn-primary" onClick={() => increment(2)}>
          +1
        </button>
        <button className="btn btn-success" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-primary" onClick={() => decrement(2)}>
          -1
        </button>
      </section>
    </>
  );
};
