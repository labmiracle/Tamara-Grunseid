import { useState } from "react";

export default function CountButtons(props) {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>incrementar</button>
      <button onClick={decrement}>decrementar</button>
    </>
  );
}
