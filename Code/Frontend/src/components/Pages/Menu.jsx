import React from 'react';
import "./Menu.css"
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  
  state = {
    isLoged: false
  }

  render() {
    if (this.state.isLoged === false) {
      return (
        <div >
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <Link
                to="Home"
                className="Link"
              >
                <img
                  src="https://i.imgur.com/M4KX7K8.png"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Logo EnergyBusery"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/Home#principal">Principal</Nav.Link>
                <Nav.Link href="/Home#Seccion1">¿Que es?</Nav.Link>
                <Nav.Link href="/Home#Seccion2">Objetivos</Nav.Link>
                <Nav.Link href="/Home#Seccion3">Desarrolladores</Nav.Link>
              </Nav>
              <Form inline>
                <NavDropdown title="Identificarse" id="collasible-nav-dropdown">
                  <Link to="Login" className="Link"><NavDropdown.Item href="#action/3.1">Iniciar Sesion</NavDropdown.Item></Link>
                  <Link to="Registro" className="Link"><NavDropdown.Item href="#action/3.2">Registrarse</NavDropdown.Item></Link>
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
            <Navbar.Brand >
              <Link
                to="Home"
              >
                <img
                  src="https://i.imgur.com/M4KX7K8.png"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Logo EnergyBusery"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/Home#principal">Principal</Nav.Link>
                <Nav.Link href="/Home#Seccion1">¿Que es?</Nav.Link>
                <Nav.Link href="/Home#Seccion2">Objetivos</Nav.Link>
                <Nav.Link href="/Home#Seccion3">Desarrolladores</Nav.Link>
              </Nav>
              <Form inline>

                <div className="profile-icon">
                  <MdPerson size={30} />
                </div>
                <div className="dropdown">
                  <NavDropdown 
                    title=""
                    id="dropdown-menu-align-right"
                  >

                    <Link to="Dashboard"><NavDropdown.Item href="#action/3.1">Buses</NavDropdown.Item></Link>
                    <Link to="Perfil"><NavDropdown.Item href="#action/3.2">Perfil</NavDropdown.Item></Link>
                    <Link to="Configuraciones"><NavDropdown.Item href="#action/3.3">Configuracion</NavDropdown.Item></Link>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Cerrar Sesion</NavDropdown.Item>

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
