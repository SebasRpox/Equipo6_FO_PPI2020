import React from 'react';
import { BrowserRouter,Route,Router, Switch} from "react-router-dom"
//estilos
import './App.css';

//componentes

import Login from "./components/Pages/Login/Login"
import Cards from "./components/Pages/Dashboard/Cards"
import Home from "./components/Pages/Home/Home"
import Baterias from "./components/Pages/Baterias/Baterias"
import Layout from "./components/Layout"

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Layout>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Dashboard" component={Cards}/>
        <Route exact path="/Baterias" component={Baterias}/>
        </Layout>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
