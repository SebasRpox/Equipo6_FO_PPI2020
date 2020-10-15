import React from "react" 
import "./CambioContraseña.css"
class CambioContraseña extends React.Component{
render(){
return(
<body>
                <div className="contenedor">
                    <form>
                        <h3>Cambiar contraseña</h3>

                    
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder=" Actual" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder=" Nueva" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="vuelve a escribir la contraseña  nueva" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                
                        <div className="texto">
                            <p className="text-left">
                                Olvidaste tu<a href="#"> contraseña?</a>
                            </p>
                           
                           </div>   
                              
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success btn-block">Guardar Cambios</button>
                       
                 
                    </form>
                </div>
            </body>

)
}
}
export  default CambioContraseña;