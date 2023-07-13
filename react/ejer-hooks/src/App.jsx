import "./App.css";
import { useState } from "react";
import ActualizaPa from "./components/ActualizaPa";
import AforB from "./components/AforB";
import Desmontado from "./components/Desmontado";
import ToDoApiJasonPlace from "./components/ToDoApiJsonPlace";

function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <h2> 1) Cambia a por b</h2>
      <AforB></AforB>
      <br />
      <h2> 2) Desmontado se ve en la terminal</h2>
      <Desmontado></Desmontado>
      <h2> 3) ActualizaPa se ve en la terminal</h2>
      <div>
        <button onClick={handleClick}>Haz clic</button>
        <ActualizaPa clicks={clicks}> </ActualizaPa>
      </div>
      <h2> 4) ToDo list JsonPlaceHolder</h2>
      <ToDoApiJasonPlace> </ToDoApiJasonPlace>
    </>
  );
}

export default App;
