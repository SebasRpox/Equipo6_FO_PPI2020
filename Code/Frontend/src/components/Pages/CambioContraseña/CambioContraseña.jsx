import React, { useState, useContext } from "react"
import "./CambioContraseña.css"
import { UserContext } from "../Login/UserContext"
import Axios from "axios";

function CambioContraseña() {

    const [user, setUser] = useContext(UserContext);

    const [actualPass, setactualPass] = useState("");
    const [truePass, setTruePass] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [error, setError] = useState("");

    const changePassword = () => {
        Axios.get(`http://localhost:5000/getDatos`, {
            params:{
                userNameID: 21
            }
        })
            .then((response) => {
                console.log(response)
                setTruePass(response.data[0].Contraseña);
            });

        if (!actualPass === truePass) {
            setError("La contraseña no es correcta");
        } else if (!password === confirmPassword) {
            setError("Las contraseñas no coinciden");
        } else {
            Axios.patch("http://localhost:5000/cambiarContraseña", {
                userId: user,
                Contraseña: password
            })
                .then((response) => {
                    console.log(response);
                });
        }

    }

    function comprobarDatos() {
        if (!actualPass === truePass) {
            setError("La contraseña no es correcta");
        } else if (!password === confirmPassword) {
            setError("Las contraseñas no coinciden");
        }
    }

    return (
        <body>
            <div className="contenedor">
                <form>
                    <h3>Cambiar contraseña</h3>

                    <label className="label-alert">{error}</label>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder=" Actual" OnChange={(e) => {
                            setactualPass(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder=" Nueva" OnChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="vuelve a escribir la contraseña  nueva" OnChange={(e) => {
                            setconfirmPassword(e.target.value);
                        }} />
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
                </form>
                <button className="submit-button" onClick={changePassword}>Guardar Cambios</button>

            </div>
        </body>

    )

}
export default CambioContraseña;