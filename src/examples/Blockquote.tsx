import { useLayoutEffect, useRef, useState } from "react";

export const Blockquote = ({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const { width, height } = pRef?.current?.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);
  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-2">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};