import React from "react";

export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log("regenerate");
  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      <span>{numero}</span>
    </button>
  );
});
