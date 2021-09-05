import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";
import { GlobalStyle } from "./styledComps/GlobalStyle";
import { Switch, Route } from "react-router-dom";
import { TourDetails } from "./components/TourDetails";
import { LoginScreen } from "./screens/LoginScreen";
import { useReducer } from "react";
import { Application } from "./reducers/userReducer";

function App() {
  const [state, dispatch] = useReducer(function (
    state = [],
    action
  ) {
    return [...state, action];
  });
  return (
    <Application.Provider value={{ state, dispatch }}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Route path="/:slug" component={TourDetails} />
        <Route path="/" component={HomeScreen} exact />
      </Switch>
      <Footer />
    </Application.Provider>
  );
}

export default App;
