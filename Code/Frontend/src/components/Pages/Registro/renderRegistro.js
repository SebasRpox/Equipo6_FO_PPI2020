


import React from "react";
import "./App.css";
import Registro from "./Registro/Components/Registro";
import Logo from "./Registro/img/logo.png";
import Spinner from "react-bootstrap/Spinner";


class App extends React.Component {

    state = {
        cambio: true
    }

    render() {
        if (this.state.cambio) {
            setTimeout(() => {
                this.setState({ cambio: false })
            }, 3500);
            return (
                <div className="Container">
                    <div><img className="logo" alt="logo" src={Logo} />

                    </div>
                    <div className="Spinner">
                        <Spinner animation="grow" />
                        <h3>Cargando...</h3>
                    </div>
                </div>

            )
        } else {
            return (
                <Registro />
            )
        }

    }
}
export default App;