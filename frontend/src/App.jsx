import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";
import { GlobalStyle } from "./styledComps/GlobalStyle";
import { Switch, Route } from "react-router-dom";
import { TourDetails } from "./components/TourDetails";
import { Test } from "./Test";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/test" component={Test} />
        <Route path="/:slug" component={TourDetails} />
        <Route path="/" component={HomeScreen} exact />
      </Switch>
      {/* <HomeScreen /> */}
      <Footer />
    </>
  );
}

export default App;
