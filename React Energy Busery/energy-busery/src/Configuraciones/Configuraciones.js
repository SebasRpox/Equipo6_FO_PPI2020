import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Gestion from "../img/gestion.png";
import not_silen from "../img/not-silencio.png";
import Temas from "../img/themes.jpg";
import Seguridad from "../img/security.png";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "./Configuraciones.css";
import Navbar from 'react-bootstrap/Navbar';
import Usuario from "../img/user.png";
function Configuraciones() {
    return (
        <div className="contenedor">
            <div className="all">
                <Navbar>
                    <Navbar.Brand href="#home">Configuraciones</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            En línea <img src={Usuario} />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                <InputGroup className="">
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary">Buscar</Button>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Buscar ajustes" aria-describedby="basic-addon1" />
                </InputGroup>
                <hr></hr>
                <div>
                    <img className="icon ml-2 mr-2" src={Gestion} />
                Gestion
                </div>
                <div>
                    <img className="icon ml-2 my-3" src={Seguridad} />
                Seguridad
                </div>
                <hr></hr>
                <div>
                    <img className="icon ml-2 my-3" src={Temas} />
                Tema
                </div>
                <div>
                    <img className="icon ml-2 my-3" src={not_silen} />
                Silenciar notificaciones
                </div>
            </div>
        </div>
    );
}
export default Configuraciones;