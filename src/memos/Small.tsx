import React from "react";

export const Small = React.memo(({ value }: { value: number }) => {
  console.log("new Regen");
  return <small>{value}</small>;
});
