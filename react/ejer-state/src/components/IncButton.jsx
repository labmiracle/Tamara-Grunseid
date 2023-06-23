import { useState } from "react";

export default function IncButton(props) {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>incrementar</button>
    </>
  );
}
