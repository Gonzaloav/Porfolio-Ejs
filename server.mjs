import express from "express";
import db from "./sqlModels/db.mjs";
import multer from 'multer' 

const UPLOADS_FOLDER = "./uploads/"
const upload = multer({ dest: UPLOADS_FOLDER })

import { getAllFotosSQL, postFotosSQL, getGalleryFotosSQL } from "./sqlModels/porfolioSQL/fotosSqlModels.mjs";
import { postFotosController } from "./controllers/tablasPorfolio/fotoscontrollers.mjs";

// Creamos enlace que necesitamos

const PATH_FREFIX = "/api/v0.0";
const app = express();
const jsonParser = express.json();

// establecer el motor de visualización en ejs. (use res.render) para cargar un archivo de  "ejs view ""
app.set("view engine", "ejs");

// Endpoint para descarga de ficheros estáticos.
app.use("/static/", express.static("./static/"));

// Endpoint para descarga de fotos.
app.use("/photos/", express.static("./uploads/"));


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

// Página Porfolio
app.get("/porfolio", function (req, res) {
  res.render("./paginas/porfolio");
});

// Formulario para recibir las fotos desde la base de datos. 

app.get("/photos/new", function (req, res) {
  res.render("./paginas/newPhotoForm");
})

// Formulario para enviar las fotos a la base de datos.

app.post("/photos/new", upload.array('file'), function (req, res) {
//console.log("Files:", req.files);     console.log("Body:", req.body)
  req.files.forEach(
    file => db.run(postFotosSQL,[file.filename,req.body.galeria_fotos], 
      function (err) {
        if (err) console.error(err)
    })
  )
  res.sendStatus(201)
})

// Galería ejemplo
app.get("/ejemploporfolio", function (req, res) {
  db.all(
    getAllFotosSQL, // response.locals.authorization.id_fotos,
    (err, fotos) => {
      if (err) throw err;
      console.log(fotos);
      res.render("./paginas/porfolio", { fotos });
    }
  );
});

// Galería ejemplo en filas
app.get("/ejemploporfoliofilas/:galeria_fotos", function (req, res) {
  db.all(
    getGalleryFotosSQL,
    [req.params.galeria_fotos],
    (err, fotos) => {
      if (err) throw err;
      const FOTOS_POR_FILA = 5
      const filas = []
      for (let inicioFila = 0; inicioFila < fotos.length; inicioFila += FOTOS_POR_FILA) {
        const fila = []
        for (let fotoFila = inicioFila; fotoFila < inicioFila+FOTOS_POR_FILA && fotoFila < fotos.length; fotoFila++) {
          fila.push(fotos[fotoFila])
        }
        filas.push(fila)
      }
      console.log(filas);
      res.render("./paginas/porfolioEnFilas", { filas });
    }
  );
});

app.post(PATH_FREFIX + "/porfolio/foto/", jsonParser, postFotosController);


app.listen(3000);
console.log("3000 este es el puerto mágico");

// http://localhost:3000/

/** Pasar datos a Vistas y Parciales.- Index.ejs
Vamos a definir algunas variables básicas y una lista para pasar a nuestra página 
de inicio. Vuelva a su archivo server.js y añada lo siguiente dentro de su 
ruta app.get('/').
Hemos creado una lista llamada mascots y una cadena sencilla llamada tagline. 
Vamos a entrar en nuestro archivo index.ejs para usarlas.*/
