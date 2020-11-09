import React, { useState } from "react";
import "./Registro.css";
import Title from "./Title/Title";
import Label from "./Label/Label";
import Input from "./Input/Input";
import fa from "../img/facebook.svg"
import go from "../img/google.png";
import Axios from "axios";
import {Link} from "react-router-dom"

function Registro() {
    const [correo, setCorreo] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [hasError, setHasError] = useState(false);

    const register = () =>{
        Axios.post("http://localhost:5000/registrado",{

            userName : user,
            pass : password,
            mail : correo,

        }).then((response)=>{
            console.log(response)
        })
    }

    function handleChange(name, value) {
        if (name === "usuario") {
            setUser(value);
            console.log(value);
            console.log(name);
        } else {
            if (value.length < 6) {
                setPasswordError(true);
            } else if(name==="contraseña"){
                setPasswordError(false);
                setPassword(value);
                console.log(value)
            }else if(name==="correo"){
                setCorreo(value)
            }
        }
    }
    function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0) {

            const { correo, user, password } = param;
            let ac = { correo, user, password };
            let account = JSON.stringify(ac);
            localStorage.setItem("account", account);
            setIsRegister(true);
        } else {
            setIsRegister(false);
            setHasError(true);
        }
    }
    function handleSubmit() {
        
        let account = { correo, user, password };
        if (account) {
            ifMatch(account);
        }
    }
    return (
        <div className="registro-container">
            { isRegister ? 
            <>
            <h1>Felicidades, {user}</h1> 
            <label>Te registraste con éxito</label> 
            </>:
            <div className="registro-content">
                <Title text="Registro" />
                {hasError && <label className="label-alert">Los datos ingresados son incorrectos</label>}
                <Label text="Correo" />
                <Input
                    attribute={{
                        id: "correo",
                        name: "correo",
                        type: "text",
                        placeholder: "Ingrese su correo",
                    }}
                    handleChange={handleChange}
                />
                <Label text="Usuario" />
                <Input
                    attribute={{
                        id: "usuario",
                        name: "usuario",
                        type: "text",
                        placeholder: "Ingrese su usuario",
                    }}
                    OnChange={(e)=>{
                        setUser(e.target.value);
                    }}
                    handleChange={handleChange}
                />
                <Label text="Contraseña" />
                <Input
                    attribute={{
                        id: "contraseña",
                        name: "contraseña",
                        type: "password",
                        placeholder: "Ingrese su contraseña",
                    }}
                    OnChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    handleChange={handleChange}
                    param={passwordError}
                />
                <Label text="Confirma Contraseña" />
                <Input
                    attribute={{
                        id: "repeat-contraseña",
                        name: "contraseña",
                        type: "password",
                        placeholder: "Repita su contraseña",
                    }}
                    handleChange={handleChange}
                    param={passwordError}
                />
                {passwordError && (
                    <label className="label-error">
                        La contraseña debe contener 6 o más caracteres
                    </label>
                )}{passwordError && (
                    <label className="label-error-repeat">
                        Las contraseñas no son iguales
                    </label>
                )}
                <div className="submit-button-container">
                   <Link to="home"><button className="submit-button" onClick={register}>
                        Ingresar
                    </button></Link>
                    <label className="label-iniciar_sesion">Quiero <a href="#">iniciar sesión</a> </label>
                </div>
                <div className="login">
                    También puedes registrarte con:
                    
                </div>
                <div className="iconos-registro">
                <a className="img-google" href="https://accounts.google.com/AccountChooser/signinchooser?continue" ><img src={go} width="30" height="30" alt="cselogo"/></a> 
                    <a className="img-facebook" href="https://www.facebook.com/" ><img src={fa} width="30" height="30" alt="cselogo"/></a> 
                    </div>
            
            </div>
            }
        </div>
    );
}
export default Registro;
