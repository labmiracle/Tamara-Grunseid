import { useState } from "react";

export default function AddRemoveLetter(props) {
  const [letter, setLetter] = useState(" ");

  let incrementLetter = () => {
    setLetter(letter + "a");
  };
  let decrementLetter = () => {
    setLetter(letter.slice(0, -1));
  };

  return (
    <>
      <div>{letter}</div>
      <button onClick={incrementLetter}>agregar letra</button>
      <button onClick={decrementLetter}>sacar letra</button>
    </>
  );
}
