import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Board from "./components/Board";
import Exit from "./components/Exit";
import CardDetail from "./components/CardDetail";

class App extends React.PureComponent {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Welcome} />
            <Route path={"/board"} component={Board} />
            <Route path={"/exit"} component={Exit} />
            <Route path={"/detail"} component={CardDetail} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
