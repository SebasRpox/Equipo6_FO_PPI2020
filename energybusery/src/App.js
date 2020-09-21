import React from 'react';
import { BrowserRouter as Router, Switch} from "react-router-dom"
//estilos
import './App.css';

//componentes
import Menu from "./components/Pages/Menu"
import Banner from "./components/Pages/Home/Banner"
import Footer from "./components/Pages/Footer"
import Seccion1 from './components/Pages/Home/Seccion1';
import Seccion2 from "./components/Pages/Home/Seccion2";
import Seccion3 from "./components/Pages/Home/Seccion3";
import Login from "./components/Pages/Login/Login"
import Cards from "./components/Pages/Dashboard/Cards"

function App() {
  return (

      // <Router>
      //   <Menu/>
      //   <Switch>
      //     <Banner/>
      //   </Switch>
      //   <Seccion1/>
      //   <Seccion2/>
      //   <Seccion3/>
      //   <Footer/>
      // </Router>


    // <Router>
    //   <Login/>
    // </Router>

    <Router>
    <Menu/>
    <Switch>
      <Cards/>
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
