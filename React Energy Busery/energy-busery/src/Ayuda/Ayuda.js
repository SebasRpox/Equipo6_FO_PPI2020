import React from "react";
import "./Ayuda.css";
import Reportar from "../img/report.svg";
import Servicio from "../img/ayuda.png";
import AyudaPyS from "../img/salvavidas.png";
import Navbar from 'react-bootstrap/Navbar';
import Usuario from "../img/user.png";
import Condiciones from "../img/politicas.png";

function Ayuda() {
    return (
        <div>
            <div className="all">
                <div>
                    <Navbar>
                        <Navbar.Brand href="#home">Ayuda</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                En línea <img src={Usuario} />
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                    <hr></hr>
                    <img className="icon ml-2 mr-2" src={Reportar} />
                Reportar un problema
                </div>
                <div>
                    <img className="icon ml-2 my-3" src={Servicio} />
                Servicio de ayuda
                </div>

                <div>
                    <img className="icon ml-2 my-3" src={AyudaPyS} />
                Ayuda sobre privacidad y seguridad
                </div>
                <div>
                    <img className="icon ml-2 my-3" src={Condiciones} />
                Condiciones y politicas
                </div>
            </div>
        </div>
    )
}
export default Ayuda;