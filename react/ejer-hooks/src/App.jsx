import "./App.css";
import { useState } from "react";
import ActualizaPa from "./components/ActualizaPa";
import AforB from "./components/AforB";
import Desmontado from "./components/Desmontado";

function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <p> 1) Cambia a por b</p>
      <AforB></AforB>
      <br />
      <p> 2) Desmontado se ve en la terminal</p>
      <Desmontado></Desmontado>
      <p> 3) ActualizaPa se ve en la terminal</p>
      <div>
        <button onClick={handleClick}>Haz clic</button>
        <ActualizaPa clicks={clicks}> </ActualizaPa>
      </div>
    </>
  );
}

export default App;
