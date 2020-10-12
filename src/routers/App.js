import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Apertura from "../pages/apertura";
import Registro from "../pages/registro";
import Menu from "../pages/menu";
import Menu_admin from "../pages/menu_admin";
import Bienvenida from "../pages/bienvenida";
import Inicio from "../pages/inicio";
import Inicio_admin from "../pages/inicio_admin";
import Perfil from "../pages/Perfil";
import Perfil3 from "../pages/perfil3";
import IniciarS from "../pages/iniciarS";
import ListaDulce from "../pages/listaDulce";
import ListaSalado from "../pages/listaSalado";
import ListaDulce_admin from "../pages/listaDulce_admin";
import ListaSalado_admin from "../pages/listaSalado_admin";
import Mensaje_reporte_admin from "../pages/mensaje_reporte_admin";
import Mensajes_admin from "../pages/mensajes_admin";
import Mensaje from "../pages/mensaje";
import RecetaDulce from "../pages/recetaDulce";
import RecetaSalada from "../pages/recetaSalada";
import Botones_mensajes_admin from "../pages/botones_mensajes_admin";
import Buscar_admin from "../pages/buscar_admin";
import Buscar from "../pages/buscar";
import Perfil2 from "../pages/perfil2";
import RecetaRollos from "../pages/recetaRollos";
import EditarPerfil from "../pages/editarperfil";
import EditarPublicacion from "../pages/editarpublicacion";
import Reporte_admin from "../pages/reporte_admin";
import NuevaReceta from "../pages/nuevareceta";
import Recetas_reportadas_admin from "../pages/recetas_reportadas_admin";
import Recetas_sin_reportar_admin from "../pages/recetas_sin_reportar_admin"


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Apertura} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu_admin" component={Menu_admin} />
        <Route exact path="/bienvenida" component={Bienvenida} />
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/Perfil" component={Perfil} />
        <Route exact path="/perfil2" component={Perfil2} />
        <Route exact path="/perfil3" component={Perfil3} />
        <Route exact path="/inicio_admin" component={Inicio_admin} />
        <Route exact path="/iniciarS" component={IniciarS} />
        <Route exact path="/listaDulce" component={ListaDulce} />
        <Route exact path="/recetaSalada" component={RecetaSalada} />
        <Route exact path="/listaSalado" component={ListaSalado} />
        <Route exact path="/listaDulce_admin" component={ListaDulce_admin} />
        <Route exact path="/listaSalado_admin" component={ListaSalado_admin} />
        <Route exact path="/recetaDulce" component={RecetaDulce} />
        <Route exact path="/mensajes_admin" component={Mensajes_admin} />
        <Route exact path="/editarpublicacion" component={EditarPublicacion} />
        <Route
          exact
          path="/mensaje_reporte_admin"
          component={Mensaje_reporte_admin}
        />
        <Route exact path="/nuevareceta" component={NuevaReceta} />
        <Route
          exact
          path="/recetas_reportadas_admin"
          component={Recetas_reportadas_admin}
        />
          <Route
          exact
          path="/recetas_sin_reportar_admin"
          component={Recetas_sin_reportar_admin}
        />
        <Route exact path="/editarperfil" component={EditarPerfil} />
        <Route exact path="/recetaRollos" component={RecetaRollos} />
        <Route exact path="/reporte_admin" component={Reporte_admin} />
        <Route
          exact
          path="/botones_mensajes_admin"
          component={Botones_mensajes_admin}
        />
        <Route exact path="/buscar_admin" component={Buscar_admin} />
        <Route exact path="/buscar" component={Buscar} />

        <Route exact path="/mensaje" component={Mensaje} />
        <Route exact path="/recetaRollos" component={RecetaRollos} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
