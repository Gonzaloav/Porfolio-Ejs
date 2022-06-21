
// Creamos enlace que necesitamos
const express = require('express');
const app = express();

// establecer el motor de visualización en ejs
app.set('view engine', 'ejs');

// use res.render para cargar un archivo de  "ejs view ""

// Página index 
app.get('/', function(req, res) {
    let mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    let tagline = "Ningún concepto de programación está completo sin una linda mascota.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// Página about 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// Página Sobre mí
app.get('/sobremi', function(req, res) {
    res.render('pages/sobremi');
});

// Página Contacto
app.get('/contacto', function(req, res) {
    res.render('pages/contacto');
});

app.listen(8080);
console.log('8080 este es el puerto mágico');

// http://localhost:8080/

/** Pasar datos a Vistas y Parciales.- Index.ejs
Vamos a definir algunas variables básicas y una lista para pasar a nuestra página 
de inicio. Vuelva a su archivo server.js y añada lo siguiente dentro de su 
ruta app.get('/').
Hemos creado una lista llamada mascots y una cadena sencilla llamada tagline. 
Vamos a entrar en nuestro archivo index.ejs para usarlas.*/

