import React, { useState, useContext} from "react";
import "./Style/Login.css"
import { Link } from "react-router-dom"
import {
    FaFacebookSquare
} from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc"
import Axios from "axios";
import Input from "../Registro/Components/Input/Input"
import {UserContext} from "./UserContext"

function Login() {

    const [user,setUser] = useContext(UserContext);

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [LoginStatus, setLoginStatus] = useState("");


    const login = () => {
        Axios.post("http://localhost:5000/loged", {

            pass: password,
            mail: correo,

        }).then((response) => {
            console.log(response)
            if(response.data.message){
                setLoginStatus(response.data.message);
            }else{
                setUser(response.data[0].userNameID)
            }
        })
    }

    function handleChange(name, value) {
        if (name === "correo") {
            setCorreo(value);
            console.log(value)
        } else if (name === "contraseña") {
            setPassword(value)
            console.log(value)
        }
    }

    return (

        <body>
            <div className="contenedor">
                <form>
                    <h3>Iniciar Sesion</h3>
                    <label className="label-alert">{LoginStatus}</label>
                    <div className="form-group">
                        <Input attribute={{
                            id: "correo",
                            name: "correo",
                            type: "text",
                            placeholder: "Ingrese su correo",
                        }} handleChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <Input attribute={{
                            id: "contraseña",
                            name: "contraseña",
                            type: "password",
                            placeholder: "Ingrese su contraseña",
                        }} className="form-control" handleChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                        </div>
                    </div>
                        </form>
                    <button className="submit-button" onClick={login}>
                        Ingresar
                    </button>
                    <form>
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
export default Login;