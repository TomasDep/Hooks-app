export const ShowIncrement = ({ increment }) => {
  console.log("regenerate");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
};
