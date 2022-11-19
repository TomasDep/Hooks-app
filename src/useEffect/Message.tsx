import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseMove = ({ x, y }: { x: number; y: number }) => {
      setCoords({ x, y });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <>
      <small className="text-danger">Username exist!</small>
      <small>{JSON.stringify(coords)}</small>
    </>
  );
};
