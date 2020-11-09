import React from "react"
import "./Style/Seccion2.css"
class Seccion2 extends React.Component {
    render() {
        return (
            <div className="acerca-de" id="Seccion2">
                <div className="contenedor">
                    <h1 className="titulo">Objetivos</h1>
                    <img className="imagen" src="https://i.imgur.com/OZrYVT2.jpg" alt="" width="100" height="100" />

                    <p className="parrafo">Desarrollar una aplicación que de fundamentos sobre los buses eléctricos y permita la gestión y/o administración de los mismos.<br></br>

                    Implementar un proyecto que sirva como complemento para la formación de los interesados en cuanto a la movilidad del transporte público masivo.<br></br>

                    Concientizar a los ciudadanos sobre la gran importancia de los buses eléctricos y por qué no se han implementado a gran escala, estrategias, puntos de vista, etc.<br></br>
                    </p>
                    <h3 className="subtitulo">Objetivos Especificos</h3>
                    <p>- Identificar el problema, sus causas y efectos.<br></br>

                    - Investigar sobre el problema, soluciones, antecedentes, ideas similares o implementadas.<br></br>

                    - Recopilar la información útil y necesaria para el desarrollo del proyecto.<br></br>

                    - Utilizar los datos almacenados en el análisis para la elaboración de la aplicación.<br></br>
                    </p>
                </div>
            </div>
        )
    }
}
export default Seccion2;