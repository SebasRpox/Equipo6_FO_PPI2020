import React, { useState, useMemo } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom"
import {UserContext} from "./components/Pages/Login/UserContext"
//estilos
import './App.css';

//componentes

import Login from "./components/Pages/Login/Login"
import Cards from "./components/Pages/Dashboard/Cards"
import Home from "./components/Pages/Home/Home"
import Baterias from "./components/Pages/Baterias/Baterias"
import Layout from "./components/Layout"
import Registro from "./components/Pages/Registro/Components/Registro"
import Perfil from "./components/Pages/Perfil/Perfil"
import Configuraciones from "./components/Pages/Configuraciones/Configuraciones"
import Ayuda from "./components/Pages/Ayuda/Ayuda"
import Seguridad from "./components/Pages/Seguridad/Seguridad"
import CambioContraseña from "./components/Pages/CambioContraseña/CambioContraseña"

function App() {
  const [user,setUser] = useState([]);
  // const provideUserID = useMemo(() => ({ userID, setUserID,userPassword,setUserPassword}), [userID, setUserID,userPassword,setUserPassword]);

  return (

    <BrowserRouter>
      <Switch>
        <Layout>
          <UserContext.Provider value={[user,setUser]}>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Registro" component={Registro} />
            <Route exact path="/Perfil" component={Perfil} />
            <Route exact path="/Dashboard" component={Cards} />
            <Route exact path="/Baterias" component={Baterias} />
            <Route exact path="/Configuraciones" component={Configuraciones} />
            <Route exact path="/Ayuda" component={Ayuda} />
            <Route exact path="/Seguridad" component={Seguridad} />
            <Route exact path="/CambioContraseña" component={CambioContraseña} />
          </UserContext.Provider>
        </Layout>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
