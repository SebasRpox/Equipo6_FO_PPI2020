import React from "react"
import "./Style/Login.css"
import { Link } from "react-router-dom"
import {
    FaFacebookSquare
} from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc"

class Login extends React.Component {
    render() {
        return (
            
            <body>
                <div className="contenedor">
                    <form>
                        <h3>Iniciar Sesion</h3>

                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Correo" />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Contraseña" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success btn-block">Iniciar Sesion</button>
                        <div className="texto">
                            <p className="text-left">
                                Aun no estas<a href="#"> registrado?</a>
                            </p>
                            <p className="forgot-password text-right">
                                Olvidaste tu <a href="#">contraseña?</a>
                            </p>
                        </div>
                        <div className="login-with">
                            <p>Tambien puedes iniciar sesion con: </p>
                            <Link
                                className='login-with-link'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <FcGoogle />
                            </Link>
                            <Link
                                className='login-with-link'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <FaFacebookSquare />
                            </Link>
                        </div>
                    </form>
                </div>
            </body>

        );
    }
}
export default Login;