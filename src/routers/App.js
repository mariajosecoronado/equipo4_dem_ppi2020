import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/inicio";
import Registro from "../pages/registro";
import Menu from "../pages/menu";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
