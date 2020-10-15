import React from "react";
import { Dropdown } from "react-bootstrap"
import {Slider} from "@material-ui/core"
import "./Style/Baterias.css"

class Baterias extends React.Component {

    render() {
        return (
            <div className="contenedor">
                <div className="baterias">
                    <Dropdown >
                        <Dropdown.Toggle id="dropdown-custom-components" variant="success">
                            Batera 1
    </Dropdown.Toggle>

                        <Dropdown.Menu >
                            <Dropdown.Item eventKey="1">Bateria2</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Bateria3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className= "Slider">
                    
                </div>
                <div className="container-things">
                <div className="switch-container">
                    <label>
                        <h1 className="switch-container-h1">Estado</h1>
                        <input className="switch" type="checkbox" />
                        <div>
                            <div></div>
                        </div>
                    </label>
                </div>
                </div>
          
                <div className="juntos">
                    <img className="juntos__img" src="https://i.imgur.com/mhjBQFY.png" alt="" />
                    <h1 className="porcentaje">
                        100%
                    </h1>
                </div>

            </div>
        );
    }

}
export default Baterias;