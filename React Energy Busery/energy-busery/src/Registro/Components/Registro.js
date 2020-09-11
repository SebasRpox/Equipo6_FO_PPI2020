import React from "react";
import "./Registro.css";
import Title from "./Title/Title";
import Label from "./Label/Label";
import Input from "./Input/Input";

function Registro() {
    return (
        <div className="registro-container">
            Buenas soy Registro
            <Title text="Soy un título sin estilo"/>
            <Label text="Usuario"/>
            <Input 
            attribute ={{
                id: "usuario",
                name: "usuario",
                type: "text",
                placeholder: "Ingrese su usuario"
            }}
            
            />
            <Label text="Contraseña"/>
            {/*<Input />*/}
        </div>
    )
}
export default Registro;