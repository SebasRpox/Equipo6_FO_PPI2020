import React, { Component } from 'react'
import logo from '../img/user.png';
import fa from '../img/facebook.svg';
import git from '../img/git.png';
import yt from '../img/yt1.png';
import co from '../img/company.png';
import Button from 'react-bootstrap/Button';
class Banner extends Component {
    render() {
        return (
            <section className="container-banner">
                    <a href="#home"><img id="profilepic" src={logo}  width="250" height="170" alt="profilepic"/></a>
                    <h1> Usuario </h1>
                    <p id="paragarph1"> <b>Rango</b> <br/>
                    Conductor</p>
                    <p id="paragarph1"> <b>Correo</b> <br/>
                    123@empresa.com</p>
                    <p id="paragarph1"> <b>Contraseña</b> <br/>
                    en****</p>

                    <div id="contacto" className="logo">
                        
                    <a id="logo" href="https://github.com/SebasRpox/Equipo6_FO_PPI2020" ><img src={git} width="30" height="30" alt="cselogo"/></a> 
                    <a id="logo" href="https://www.youtube.com/channel/UCHAKiPvl3Ij142gVmwiz6lw?view_as=subscriber" ><img src={yt} width="30" height="30" alt="cselogo"/></a> 
                    <a id="logo" href="https://www.facebook.com/" ><img src={fa} width="30" height="30" alt="cselogo"/></a> 
                    <a id="logo" href="https://www.company.com/" ><img src={co} width="30" height="30" alt="cselogo"/></a> 
                    

                    </div>
                    <Button className="btn-logout" variant="danger">Cerrar Sesión</Button> 

            </section>
        )
    }
}

export default Banner


