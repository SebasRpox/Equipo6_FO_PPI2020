import React from "react"
import "./Style/Seccion1.css"
import Button from 'react-bootstrap/Button'

class Seccion1 extends React.Component {
    render() {
        return (
            <div className="acerca-de">
                <div className="contenedor">
                    <h1 className="sobre-nosotros">¿Que és?</h1>
                    <h3 className="slogan">Energy Busery</h3>
                    <p className="parrafo">El urbanismo de las ciudades están cambiando en la dirección de respetar más el medio
                    ambiente (Ya no se trata de voluntad, es necesidad). Sin embargo, si te paras un momento a
                    observar el transporte público, en realidad, podrás ver que hay muy pocos autobuses
                    eléctricos.</p>
                    <img className="imagen"src="https://i.imgur.com/uIEWb7r.jpg" alt="" width="300" />
                    <p>Este proyecto será una aplicación que les permitirá a los interesados y a los ciudadanos
                    conocer sobre los buses eléctricos, la importancia de su uso, estadísticas, riesgos, progresos, además podrán gestionar/administrar datos del bus.</p>
                </div>
            </div>
        )
    }
}
export default Seccion1;