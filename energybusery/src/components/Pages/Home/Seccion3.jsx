import React from "react"
import "./Style/Seccion3.css"

class Seccion2 extends React.Component {
    render() {
        return (
            <div className="cards">
                <div className="container">
                    <h1 className="titulo">Desarrolladores</h1>
                    <div class="card-deck">
                        <div class="card border-warning">
                            <img src="https://i.imgur.com/wHQvds0.png" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Alexander Mosquera Escobar</h5>
                                <p class="card-text">-Programador <br></br>-Diseñador</p>
                            </div>
                        </div>
                        <div class="card border-success">
                            <img src="https://i.imgur.com/yyVT0xh.png" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Jeferson Ospina Gallego</h5>
                                <p class="card-text">-Programador <br></br>-Diseñador</p>                            </div>
                        </div>
                        <div class="card border-dark">
                            <img src="https://i.imgur.com/wf0UOhT.png" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Sebastian Restrepo Zambrano</h5>
                                <p class="card-text">-Programador <br></br>-Lider</p>                            </div>
                        </div>
                        <div class="card border-danger">
                            <img src="https://i.imgur.com/buc0bAy.png" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Juan Sebastian Lopez Palma</h5>
                                <p class="card-text">-Programador <br></br>-Documentador</p>                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Seccion2;