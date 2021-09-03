import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";
import { GlobalStyle } from "./styledComps/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomeScreen />
      <Footer />
    </>
  );
}

export default App;
