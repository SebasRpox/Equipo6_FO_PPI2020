import React from "react"
import "./Cards.css"
import { Button } from "react-bootstrap"
import {Link} from "react-router-dom"

class Cards extends React.Component {
    render() {
        return (

            <section id="team" class="pb-5">
                <div class="container">
                    <h5 class="section-title h1">Buses</h5>
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                    <div class="frontside">
                                        <div class="card ">
                                            <div class="card-body text-center ">
                                                <p><img class=" img-fluid" src="https://www.transmilenio.gov.co/info/transmilenio/media/galeria290973.jpg" alt="card image" /></p>
                                                <h4 class="card-title">Nombre Bus</h4>
                                                <p class="card-text">-Matricula: TPW-087</p>
                                                <p class="card-text">-Conductor: Juan Sebastian</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                                <h4 class="card-title">Mas informacion</h4>
                                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptate qui tempore mollitia aspernatur animi, enim, officia ducimus magni placeat, sint doloribus! Quod.</p>
                                                <Link to="Baterias"><Button variant="success" size="sm">Bateria</Button>{' '}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                    <div class="frontside">
                                        <div class="card ">
                                            <div class="card-body text-center ">
                                                <p><img class=" img-fluid" src="https://www.vanguardia.com/binrepository/716x477/0c0/0d0/none/12204/EMHF/web_colp_lr_00094_big_ce_VL317874_MG21001349.jpg" alt="card image" /></p>
                                                <h4 class="card-title">Nombre Bus</h4>
                                                <p class="card-text">-Matricula: TPW-0035</p>
                                                <p class="card-text">-Conductor: Pepito Perez</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                                <h4 class="card-title">Mas informacion</h4>
                                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptate qui tempore mollitia aspernatur animi, enim, officia ducimus magni placeat, sint doloribus! Quod.</p>
                                                <Button variant="success" size="sm">Bateria</Button>{' '}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                    <div class="frontside">
                                        <div class="card ">
                                            <div class="card-body text-center ">
                                                <p><img class=" img-fluid" src="https://i.ytimg.com/vi/8lZ95uI-Ksg/hqdefault.jpg" alt="card image" /></p>
                                                <h4 class="card-title">Nombre Bus</h4>
                                                <p class="card-text">-Matricula: TPW-0035</p>
                                                <p class="card-text">-Conductor: Pepito Perez</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                                <h4 class="card-title">Mas informacion</h4>
                                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptate qui tempore mollitia aspernatur animi, enim, officia ducimus magni placeat, sint doloribus! Quod.</p>
                                                <Button variant="success" size="sm">Bateria</Button>{' '}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                    <div class="frontside">
                                        <div class="card ">
                                            <div class="card-body text-center ">
                                                <p><img class=" img-fluid" src="https://www.metrodemedellin.gov.co/Portals/1/EasyGalleryImages/1/392/01-articulado-electrico-1200x800.jpg" alt="card image" /></p>
                                                <h4 class="card-title">Nombre Bus</h4>
                                                <p class="card-text">-Matricula: TPW-0035</p>
                                                <p class="card-text">-Conductor: Pepito Perez</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                                <h4 class="card-title">Mas informacion</h4>
                                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptate qui tempore mollitia aspernatur animi, enim, officia ducimus magni placeat, sint doloribus! Quod.</p>
                                                <Button variant="success" size="sm">Bateria</Button>{' '}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                    <div class="frontside">
                                        <div class="card ">
                                            <div class="card-body text-center ">
                                                <p><img class=" img-fluid" src="https://www.dbus.eus/wp-content/uploads/2018/06/DBUS_13.06.2018_3_peq.jpg" alt="card image" /></p>
                                                <h4 class="card-title">Nombre Bus</h4>
                                                <p class="card-text">-Matricula: TPW-0035</p>
                                                <p class="card-text">-Conductor: Pepito Perez</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                                <h4 class="card-title">Mas informacion</h4>
                                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptate qui tempore mollitia aspernatur animi, enim, officia ducimus magni placeat, sint doloribus! Quod.</p>
                                                <Button variant="success" size="sm">Bateria</Button>{' '}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                    <div class="frontside">
                                        <div class="card ">
                                            <div class="card-body text-center ">
                                                <p><img class=" img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrycyWknUl0fze9VJCUZ1vFpZSObMuduJm_A&usqp=CAU" alt="card image" /></p>
                                                <h4 class="card-title">Nombre Bus</h4>
                                                <p class="card-text">-Matricula: TPW-0035</p>
                                                <p class="card-text">-Conductor: Pepito Perez</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                                <h4 class="card-title">Mas informacion</h4>
                                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptate qui tempore mollitia aspernatur animi, enim, officia ducimus magni placeat, sint doloribus! Quod.</p>
                                                <Button variant="success" size="sm">Bateria</Button>{' '}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default Cards;