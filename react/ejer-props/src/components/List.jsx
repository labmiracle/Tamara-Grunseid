import ListItem from "./ListItem";

export default function List(props) {
  return (
    <ul>
      <ListItem item="Observar el HTML1"> </ListItem>
      <ListItem item="Pensar en cómo puedo extraer cada parte en componentes"></ListItem>
      <ListItem item="Usarlos, o mejor dicho, reusarlos en React"> </ListItem>
    </ul>
  );
}
