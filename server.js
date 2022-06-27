

// Creamos enlace que necesitamos
const express = require("express");
import { postFotosController } from "./controllers/tablasPorfolio/fotoscontrollers.mjs";

const app = express();

const jsonParser = express.json ();


// establecer el motor de visualización en ejs. (use res.render) para cargar un archivo de  "ejs view ""
app.set("view engine", "ejs");

// Endpoint para descarga de ficheros estáticos.
app.use("/static/",express.static("./static/"))

// Página index
app.get("/", function (req, res) {
  res.render("./paginas/index");
});

// Página Sobre mí
app.get("/sobremi", function (req, res) {
  res.render("./paginas/sobremi");
});

// Página Contacto
app.get("/contacto", function (req, res) {
  res.render("./paginas/contacto");
});


app.post (PATH_FREFIX + "/porfolio/foto/", jsonParser,  postFotosController );

app.listen(8080);
console.log("8080 este es el puerto mágico");

// http://localhost:8080/

/** Pasar datos a Vistas y Parciales.- Index.ejs
Vamos a definir algunas variables básicas y una lista para pasar a nuestra página 
de inicio. Vuelva a su archivo server.js y añada lo siguiente dentro de su 
ruta app.get('/').
Hemos creado una lista llamada mascots y una cadena sencilla llamada tagline. 
Vamos a entrar en nuestro archivo index.ejs para usarlas.*/
