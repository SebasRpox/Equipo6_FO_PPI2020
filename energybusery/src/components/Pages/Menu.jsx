import React from 'react';
import "./Menu.css"
import { Navbar, Nav, NavDropdown, Form} from "react-bootstrap";
import {MdPerson} from "react-icons/md";

class Menu extends React.Component {
  state = {
    isLoged: true
  }
  render() {
    if (this.state.isLoged === false) {
      return (
        <div >
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
                src="https://i.imgur.com/M4KX7K8.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Logo EnergyBusery"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Principal</Nav.Link>
                <Nav.Link href="#Seccion1">¿Que es?</Nav.Link>
                <Nav.Link href="#Seccion3">Objetivos</Nav.Link>
                <Nav.Link href="#Seccion3">Desarrolladores</Nav.Link>
              </Nav>
              <Form inline>
                <NavDropdown title="Identificarse" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Iniciar Sesion</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Registrarse</NavDropdown.Item>
                </NavDropdown>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div >
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
                src="https://i.imgur.com/M4KX7K8.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Logo EnergyBusery"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Principal</Nav.Link>
                <Nav.Link href="#Seccion1">¿Que es?</Nav.Link>
                <Nav.Link href="#Seccion3">Objetivos</Nav.Link>
                <Nav.Link href="#Seccion3">Desarrolladores</Nav.Link>
              </Nav>
              <Form inline>
                
                <div className="profile-icon">
                  <MdPerson size={30}/>
                </div>
                <div className="dropdown">
                <NavDropdown alignRight
                  title=""
                  id="dropdown-menu-align-right"
                  >
                  
                <NavDropdown.Item eventKey="1">Buses</NavDropdown.Item>
                  <NavDropdown.Item eventKey="2">Perfil</NavDropdown.Item>
                  <NavDropdown.Item eventKey="3">Configuracion</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4">Cerrar Sesion</NavDropdown.Item>

                </NavDropdown>
                </div>
                
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }

}

export default Menu;
