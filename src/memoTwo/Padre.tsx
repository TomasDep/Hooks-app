import { useState, useCallback } from "react";
import { Hijo } from "./Hijo";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);
  const incrementar = useCallback((num) => {
    setValor((oldValue) => oldValue + num);
  }, []);
  return (
    <>
      <section className="mb-3">
        <h1>Padre</h1>
        <p>
          <span>Total:&nbsp;</span>
          <strong>{valor}</strong>
        </p>
        <hr />
        {numeros.map((n) => (
          <Hijo key={n} numero={n} incrementar={incrementar} />
        ))}
      </section>
    </>
  );
};
