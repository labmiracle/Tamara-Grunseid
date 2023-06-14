import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Juego de Ta-Te-Ti</h1>
      <Board />
    </>
  );
}

export default App;
