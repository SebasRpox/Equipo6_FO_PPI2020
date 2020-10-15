import React, { useState } from "react";
import "./Registro.css";
import Title from "./Title/Title";
import Label from "./Label/Label";
import Input from "./Input/Input";
import fa from "../img/facebook.svg"
import go from "../img/google.png";

function Registro() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [hasError, setHasError] = useState(false);
    function handleChange(name, value) {
        if (name === "usuario") {
            setUser(value);
        } else {
            if (value.length < 6) {
                setPasswordError(true);
            } else {
                setPasswordError(false);
                setPassword(value);
            }
        }
    }
    function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0) {

            const { user, password } = param;
            let ac = { user, password };
            let account = JSON.stringify(ac);
            localStorage.setItem("account", account);
            setIsRegister(true);
        } else {
            setIsRegister(false);
            setHasError(true);
        }
    }
    function handleSubmit() {
        
        let account = { user, password };
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
                <Label text="Usuario" />
                <Input
                    attribute={{
                        id: "usuario",
                        name: "usuario",
                        type: "text",
                        placeholder: "Ingrese su usuario",
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
                    <button className="submit-button" onClick={handleSubmit}>
                        Ingresar
                    </button>
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
