const express = require("express")
const router = express.Router();

const mysqlConnection = require("../db/db");

//Registro
router.post("/registrado", (req, res) => {
  const { userName, pass, mail } = req.body;

  const rol = "conductor"

  let usuario = [userName, pass, mail, rol];

  let nuevoUsuario = "INSERT INTO usuario(userName,Contraseña,Correo,Rol) VALUES (?,?,?,?)"

  mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: "Usuario Registrado" })
    console.log(usuario)
  })
})

//Login
router.post("/loged", (req, res) => {
  const { pass, mail } = req.body;
  mysqlConnection.query("SELECT * FROM usuario WHERE Contraseña = ? AND Correo = ?", [pass, mail], 
  (err, result) => {
    if (err) {
      return console.log(err)
    }
    console.log(result)
    if (result.length > 0) {
      res.send(result)
    } else {
      res.send({message: "Usuario o contraseña incorrectos"})
    }

  })

})

//Cambiar contraseña
router.get("/getDatos",(req,res)=>{
  const userNameID = req.query.userNameID;

  console.log(userNameID)

  mysqlConnection.query("SELECT Contraseña FROM usuario WHERE userNameID = ?",[userNameID],(err,rows)=>{
    console.log(rows)
    if(err){
      console.log(err)
    }else{
      res.send(rows)
    }
  });

})

router.patch("/cambiarContraseña",(req,res)=>{
  const {userId,Contraseña} = req.body;

  mysqlConnection.query("UPDATE usuario SET Contraseña=? WHERE userNameID = ?",[Contraseña,userId],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.json("Contraseña Actualizada");
    }
  });

})
module.exports = router;