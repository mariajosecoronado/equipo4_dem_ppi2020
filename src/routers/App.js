import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Apertura from "../pages/apertura";
import Registro from "../pages/registro";
import Menu from "../pages/menu";
import Bienvenida from "../pages/bienvenida";
import IniciarS from "../pages/iniciarS";
import Inicio from "../pages/inicio";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Apertura} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu" component={Bienvenida} />
        <Route exact path="/iniciarS" component={IniciarS} />
        <Route exact path="/inicio" component={Inicio} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
