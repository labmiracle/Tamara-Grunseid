import "./App.css";
import Title from "./components/title";
import Text from "./components/Text";
import List from "./components/List";
import Link from "./components/Link";
import Loading from "./components/Loading";

function App() {
  return (
    <div>
      <Loading show={true}>
        <Title> </Title>
        <Text> </Text>
        <List> </List>
        <Link href="https://react.dev/" openInNewTab>
          {"React Docs"}
        </Link>
      </Loading>
    </div>
  );
}

export default App;
