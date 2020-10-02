import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Apertura from "../pages/apertura";
import Registro from "../pages/registro";
import Menu from "../pages/menu";
import Bienvenida from "../pages/bienvenida";
import Inicio from "../pages/inicio";
import Inicio_admin from "../pages/inicio_admin";
import Perfil from "../pages/Perfil";
import IniciarS from "../pages/iniciarS";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Apertura} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu" component={Bienvenida} />
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/Perfil" component={Perfil} />
        <Route exact path="/inicio_admin" component={Inicio_admin} />
        <Route exact path="/iniciarS" component={IniciarS} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
