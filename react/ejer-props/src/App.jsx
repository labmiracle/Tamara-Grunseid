import "./App.css";
import Title from "./components/title";
import Text from "./components/Text";
import List from "./components/List";
import Link from "./components/Link";

function App() {
  return (
    <>
      <Title> </Title>
      <Text> </Text>
      <List> </List>
      <Link href="https://react.dev/" openInNewTab>
        {"React Docs"}
      </Link>
    </>
  );
}

export default App;
