import React from "react"
import Menu from "../Menu"
import Footer from "../Footer"
import Banner from "./Banner"
import Seccion1 from "./Seccion1"
import Seccion2 from "./Seccion2"
import Seccion3 from "./Seccion3"
import {BrowserRouter as Router,Switch} from "react-router-dom"

class Home extends React.Component{

    render(){
        return(
            
            
      <Router>
       
        <Switch>
          <Banner/>
        </Switch>
        <Seccion1/>
        <Seccion2/>
        <Seccion3/>
  
      </Router>

        )
    }

}
export default Home; 