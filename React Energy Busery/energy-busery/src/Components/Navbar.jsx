import React, { Component } from 'react'
import './css/Main.css'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="#home"><i className="fa fa-fw fa-home"></i>Hogar</a>
                <a href="#container-about"><i className="fa fa-fw fa-user"></i>Sobre mí</a>
                <a href="#contacto"><i className="fa fa-fw fa-envelope"></i>Contacto</a>
            </nav>
        )
    }
}

export default Navbar
