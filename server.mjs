import  express from "express";

import db from "./sqlModels/db.mjs";
import { getAllFotosSQL } from "./sqlModels/porfolioSQL/fotosSqlModels.mjs";
import { postFotosController } from "./controllers/tablasPorfolio/fotoscontrollers.mjs";

// Creamos enlace que necesitamos

const PATH_FREFIX = "/api/v0.0"
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

// Galería ejemplo
app.get("/ejemploporfolio", function (req,res) {
  db.all(
    getAllFotosSQL, // response.locals.authorization.id_fotos,
      (err,fotos)=>{
          if ( err ) throw err
          console.log(fotos);
          res.render("./paginas/porfolio",{fotos})
      }
  )
})


app.post (PATH_FREFIX + "/porfolio/foto/", jsonParser,  postFotosController );

app.listen(3000);
console.log("3000 este es el puerto mágico");

// http://localhost:8080/

/** Pasar datos a Vistas y Parciales.- Index.ejs
Vamos a definir algunas variables básicas y una lista para pasar a nuestra página 
de inicio. Vuelva a su archivo server.js y añada lo siguiente dentro de su 
ruta app.get('/').
Hemos creado una lista llamada mascots y una cadena sencilla llamada tagline. 
Vamos a entrar en nuestro archivo index.ejs para usarlas.*/
