import "./App.css";
import { Header } from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";
import { GlobalStyle } from "./styledComps/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomeScreen />
    </>
  );
}

export default App;
