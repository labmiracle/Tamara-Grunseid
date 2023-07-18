import { useState } from "react";
import "./App.css";
import ListContainer from "./components/ListContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ListContainer />
    </div>
  );
}

export default App;
