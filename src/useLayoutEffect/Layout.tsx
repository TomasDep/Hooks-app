import { useFetch, useCounter } from "../hooks";
import { Loading } from "../shared/Loading";
import { Blockquote } from "../examples/Blockquote";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote, author } = !!data && data[0];
  return (
    <>
      <section className="mb-3">
        <h1>BreakingBad Quotes</h1>
        <hr />
        {isLoading ? <Loading /> : <Blockquote quote={quote} author={author} />}
        <div className="text-end">
          <button
            disabled={isLoading}
            className="btn btn-warning"
            onClick={() => decrement(1)}
          >
            <span>Previous quote</span>
          </button>
          <button
            disabled={isLoading}
            className="btn btn-warning"
            onClick={() => increment(1)}
          >
            <span>Next quote</span>
          </button>
        </div>
      </section>
    </>
  );
};
