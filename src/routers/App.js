import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Apertura from "../pages/apertura";
import Registro from "../pages/registro";
import Menu from "../pages/menu";
import Bienvenida from "../pages/bienvenida";
import Inicio from "../pages/inicio";
import Inicio_admin from "../pages/inicio_admin";
import Perfil from "../pages/Perfil";
import perfil3 from "../pages/perfil3";
import IniciarS from "../pages/iniciarS";
import ListaDulce from "../pages/listaDulce";
import ListaSalado from "../pages/listaSalado";
import ListaDulce_admin from "../pages/listaDulce_admin";
import ListaSalado_admin from "../pages/listaSalado_admin";
import Mensajes_admin from "../pages/mensajes_admin";
import Mensaje_reporte_admin from "../pages/mensaje_reporte_admin";
import mensaje from "../pages/mensaje";
import recetaDulce from "../pages/recetaDulce";
import recetaSalada from "../pages/recetaSalada";
import Botones_mensajes_admin from "../pages/botones_mensajes_admin";
import Buscar_admin from "../pages/buscar_admin";
import Buscar from "../pages/buscar";
import perfil2 from "../pages/perfil2";
import editarPerfil from "../pages/editarperfil";
import recetaRollos from "../pages/recetaRollos";
import Receta_reportada_admin from "../pages/receta_reportada_admin"
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
        <Route exact path="/perfil2" component={perfil2} />
        <Route exact path="/perfil3" component={perfil3} />
        <Route exact path="/inicio_admin" component={Inicio_admin} />
        <Route exact path="/iniciarS" component={IniciarS} />
        <Route exact path="/listaDulce" component={ListaDulce} />
        <Route exact path="/recetaSalada" component={recetaSalada} />
        <Route exact path="/listaSalado" component={ListaSalado} />
        <Route exact path="/listaDulce_admin" component={ListaDulce_admin} />
        <Route exact path="/listaSalado_admin" component={ListaSalado_admin} />
        <Route exact path="/recetaDulce" component={recetaDulce} />
        <Route exact path="/mensajes_admin" component={Mensajes_admin} />
        <Route exact path="/receta_reportada_admin" component={Receta_reportada_admin} />
        <Route exact path="/editarperfil" component={editarPerfil} />
        <Route exact path="/recetaRollos" component={recetaRollos} />
        <Route
          exact
          path="/botones_mensajes_admin"
          component={Botones_mensajes_admin}
        />
        <Route exact path="/buscar_admin" component={Buscar_admin} />
        <Route exact path="/buscar" component={Buscar} />
        <Route
          exact
          path="/mensaje_reporte_admin"
          component={Mensaje_reporte_admin}
        />
        <Route exact path="/mensaje" component={mensaje} />
        <Route exact path="/recetaRollos" component={recetaRollos} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
