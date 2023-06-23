import { useState } from "react";

export default function DecButton(props) {
  const [count, setCount] = useState(0);

  let decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={decrement}>decrementar</button>
    </>
  );
}
