const ruta=require("express").Router();
const UsuarioClase=require("../clases/UsuarioClase");

ruta.get("/",(req,res)=>{
    var usu={
        nombre: "lincon",
        celular: "4471128024",
        correo: "abraham@lincon.com"
    }
    var usuario1=new UsuarioClase(usu);
    console.log(usuario1.moatrarDatos);
    res.render("inicio");
});

module.exports=ruta;



ruta.get("/agregarUsuario"),(req,res)=>{
    res.render("formulario");
}