import "./App.css";
import Title from "./components/title";
import Text from "./components/Text";

function App() {
  return (
    <>
      <Title> Necesito partir en componentes todo esto </Title>
      <Text>
        {" "}
        Para ello puedo usar React que me permitirá reutilizar todos esos
        componentes. Para ello tengo que:{" "}
      </Text>
      <ul>
        <li>Observar el HTML</li>
        <li>Pensar en cómo puedo extraer cada parte en componentes</li>
        <li>Usarlos, o mejor dicho, reusarlos en React</li>
      </ul>
      <a href="https://react.dev/">React Docs</a>
    </>
  );
}

export default App;
