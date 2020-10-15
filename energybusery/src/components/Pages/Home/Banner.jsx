import React from "react";
import "./Style/Banner.css"
import { Button } from "react-bootstrap";

class Banner extends React.Component {
    render() {
        return (
                <div className="banner" id="principal">
                    <img className="banner-img" src="https://i.imgur.com/IntNYxy.png" height="540"/>
                    <div className="banner-info">
                        <h1>Disponible para <br></br>Android.</h1>
                        <Button variant="success" size="lg">Descargar</Button>{' '}
                    </div>
                </div>
        )
    }
}

export default Banner;