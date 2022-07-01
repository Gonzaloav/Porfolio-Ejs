Presentación propuestas proyectos

Para presentar tu propuesta proporciona la siguiente información

## 1. Título

Zalo Aller@Photographer

## 2. Descripción

```
Quiero crear mi propia página web para mostrar mis trabajos como fotógrafo. Donde lo que se dé más énfasis es en mi portafolio. Aunque Me gustaría incluir una parte,  adicional con artículos relacionados con la fotografía, para que sea más amena la web.
```

## 3. Necesidad que soluciona

```
	Mi necesidad de mostrar mi portafolio fotográfico al  mundo.
```

## 4. Destinatarios

    Aficionados y profesionales a la fotografía. Tanto por la parte del portafolio como por los artículos que se presentarían.

## 5. Mockups

> La web llevaría al: Porfolio / Inicio / Ariculos fotografía / Sobre mi / Contacto / Libro de visitas. Cada pág. abajo en una esquina tendría el simbolo de Instagran que le llevaría a mi porfolio que es abierto dentro de esta red social.

    + Inicio = Con un fondo con fotos que cambian cada 20 segundos. (Un bucle de 4 fotos, por ejemplo.)  Sobre las fotos que serian un fondo. tendría Mi apodo como fotógrafo; Y etiquetas  en la parte superior de: Porfolio, Articulos fotografía, Sobre mi, contacto, inicio y libro de visitas.

    + Libro de visitas = tendria un formulario  con un botón "Añadir comentario", que llevaría al formulario y este se ocultaria con un click  "Ocultar formulario" que tendría:
    Una frase reseñada: "tu dirección de correo electronico no será publicada".  Un comentario, nombre, correo electrónico, verificación ( una suma sencilla) y un botón de enviar. Un recuadro donde aceptar el aviso legal y la política de publicidad. La fecha se pondría tras enviar el comentario.

    + Contacto = Un formulario con: Tu Nombre; Asunto; Tu Email; Mensaje.

    + Sobre Mi = Un texto sobre cómo y porqué me dedico a la fotografía. Un folio nada más.

    + Articulos fotografía = Donde incluiría artículos relacionados con la fotografía. Con un resumen de varios artículos donde te lleva al artículo en grande. Y este te lleve de regreso.

    + El portafolio = básicamente se incluye cuatro estilos de fotografía. Retrato; Paisaje; Fauna; y Composición o conceptual. El retrato y pasaje se dividiría a su vez en grupos y subgrupos. Las fotos tendrían una pequeña descripción.

    Ejemplo: Paisaje – Galicia – Ortigueira. O Paisajes – Galicia – Faros.

    - Hacer un bucle de 5 segundos por foto; con fotos relacionas de la misma región. (Iniciar reproducción). O sea, por ejemplo que se vea las 20 fotos de x tema con un intervalo de 5 segundos por foto. A los dos vueltas el bucle se pararía. Y a mayores, que se pueda hacer a mano.  Insercando unas flechas a los lados de la fotografías para ir hacia adelante o hacia atras, < 3 de 25 > o haciendo click en cada foto.

## Ejemplos a seguir.-

Enlaces a [google] (
https://portfolio.davidduchemin.com/index)  
Para la Galería o Portafolio.

Enlaces a [google] (
http://josebruiz.com/)  
Para el Blog, contacto y Sobre mí.

Enlaces a [google] (
https://www.franciscoruano.com/)
libro de visitas.

hEnlaces a [google] (
https://martabreto.com/)
Para página de inicio

1. Inicio.- 4 fotos bucle / Parte estática / temporizador.

2. Parte estatica.- Nombre / botones ( parte superior: Porfolio / Inicio / Ariculos fotografía / Sobre mi / Contacto / Libro de visitas ) Y Enlace a Instagram en la parte inferior derecha.

3. Articulos fotografía.- Parte estática /Fecha / titulo / Resumen / Noticia ampliada / fotos / quizás una descripcion fotos.

4. Sobre mi.- Parte estática / Texto / foto autoretrato/ curriculum.

5. Contacto.- Parte estática / Formulario / Tu Nombre / Asunto / Tu Email / Mensaje.

6. Libro de visitas.- fecha / nombre / boton "añidir comentario - ocultar formulario" / formulario ( nombre / comentario / correo electronico / verificación / aceptar privicidad / boton enviar )

7. Porfolio .- Parte estática / botones / sub botones / sub de sub botones / fotos pequeñas / fotos grandes / temporizador / simbolos /

## 6 Cookies (Endpoint).-

Get Login = Entrada para modificar o agregar Articulos, fotos, componentes...
Post Mensaje = Agregar componentes, datos.
Put = Actualizar algo existente
Delet = Borrar algún comentario u componente.

200 Ok Todo bien.
201
400 Error Usuario al introducir datos.
401 No está autorizado.
404 Usuario no Existente.
500 Error del servidor.

- Las partes 2 (parte estática) y 4 (Sobre mí) no requiere de cookies, el resto sí.

- La parte 1 (Incio) solo utiliza cookies para Inciar sesión, con un solo usuario con su contraseña. Para agregar.

- La parte 2 (Articulos de fotografía) solo se utilizaría cookies para incrementar el número de artículos. y enviar articulos. ( POST MENSAJE, GET MENSAJE, PUT).

- La parte 5 (Contacto) se utilizaría cookies para enviar el formulario a mi correo. (POST MENSAJE).

- La parte 6 (Libro de visitas) Se utilizaría cookies para enviar el formulario y recibir los mensajes y que queden en esa misma html al poco tiempo de ser recibido. (POST MENSAJE Y GET MENSAJE, DELET).

- Parte 7 (Porfolio) se utilizaria para agregar nuevos componentes y fotos de los dos tamaños con una descripción. Ulilizado solo un usuario y su contraseña. (POST MENSAJE, PUT, DELET).

## 7 Datos:

1. Bucles = En la Página Inico (4 fotos, 20 segundos) de forma automática; y en el Porfolio ( x fotos, 5 segundos) Solo las fotos grandes pueden entrar en un bucle pinchando en la parte estatica del portafolio. Dando opción a pararse.

2. Formulario = Para contacto y otro para libro de visitas.

3. Fotos = Tendría dos tamaños. La grande puede verse en bucle. La pequeña horizontalmente tendría 3 fotos por linea. Y haciendo un clic ampliaría la foto. Y una descripción.

4. Temporizador = Libro de visitas cada vez que escriban un comentario a través del formulario.

5. Botones = Para interactuar por cada página (parte estática). Un boton para Articulos de fotografía para verlo integro o para regresar al resumen.

Para el profolio su página principal tiene en un lateral cuatro botones; cada botón tiene una fotografía agregada.

## 8.- ¿Cómo definir los objetos desde el punto de vista de JavaScript?

1. Articulos de fotografía .- {
   Titulo: <h2>"Proporción Áurea: Que es y como aplicarla en tus fotos"</h2>,
   Contenido Resumido: Texto 1 párrafo.  
    Subtitulos: <h3>  
    Contenido: "Texto."
   Imagenes: Nombre + ruta (<img alt ="fibonacci"  src = "Img/Blog/espiral-1462x1477.jpg"/> )  
   }

2. Porfolio.-
   Fotografía {
   Descripción: Pais:
   Región:
   Lugar concreto:
   Comentario:
   Imagen: Nombre: alt
   ruta : src
   }

3. Libro visitas.-

   Formulario {
   Nombre:
   Correo electrónico:
   comentario:
   }

   Comentario: {
   Nombre:
   Comentario: Texto,
   Fecha: (Día/Mes/año)
   }

4. Contacto.-

   Formulario {
   Tu Nombre:
   Asunto:  
    Tu Email:
   Mensaje:
   }

GET lOGIN.- Libro visitas y Contacto (formulario) / (500 - 200 - 400)

POST LOGIN.- Entrada personal (solo yo) / (201 - 500 - 400)

GET MENSAJES.- Articulos fotografía / Libro visitas / Porfolio (500 - 200 - 404)

POST MENSAJE.- Articulos de fotografía / Porfolio / Libro visitas / contacto (500 - 201 - 400 )

PUT.- Articulos de fotografía / Porfolio / (500 - 400 - 201)

DELET.- Porfolio / libro visitas / Articulos de fotografìa (500 - 400 -201)

---

VISTAS.- Galeria.- (onClick, setView)

1.  Miniaturas = onClik, setcurrentPhoto, setView = Foto.
2.  Carrusel = onClik, setcurrentPhoto, setView = Foto.
3.  Fotos = incluye descripción.
4.  Portada = incluye descripción.
5.  . view = Miniaturas - Carrusel - Fotos.
    . showdescription = true / false.
    . photos = [{}]
    . currentPhoto = 1.

6.  Enlaces a [google] (
    https://techclub.tajamar.es/componentes-libres-en-react-para-imagenes-y-video/)
    web para carrusel general.
7.  Enlaces a [google] (
    https://react-bootstrap.github.io/components/carousel/)
    componente carrusel.
8.  Enlaces a [google] (
    http://neptunian.github.io/react-photo-gallery/)
    React Photo Gallery
9.  Enlaces a [google] (
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes)
    Tamaños imagenes javascript

10. Enlaces a [google] (
    https://expressjs.com/es/starter/static-files.html)

11. Enlaces a [google] (
    https://www.npmjs.com/package/mmmagic)
    Ver si es una imagen // npm install mmmagic

12. Enlaces a [google] (
    https://www.npmjs.com/package/image-size?Cachedget)
    Para saber el tamaño de la imagen // npm install image-size --save

13. Enlaces a [google] (
    https://imagemagick.org/index.php)
    Editor de imagenes completo desde el código.

14. Enlaces a [google] (
    https://www.escuelafrontend.com/articulos/rutas-react-router6)
    Extructura de rutas.

---

Instalaciones.-

1.  npm install sqlite3 (backend).
2.  npm install jsonschema (backend).
3.  npm install react-router-dom (frontend).
4.  npx create-react-app . (frontend).
5.  npm init -y (backend).
6.  npm install express (backend).
7.  npm install image-size --save.
8.  npm install --save styled-components (frontend).

---

- GeekFORCE: Cómo conseguir el trabajo que quieres en IT
  https://www.youtube.com/watch?v=8cIe4q8dgkM&t=2626s

- Chequear patrones en javascript
  https://jstherightway.org/es-es/

- eventos relacionados con programar
  https://events.codemotion.com/conferences/online/2022/online-tech-conference-2022-spanish-edition-spring

  Mañana 12/5 a las 17:00 conferencia Diseñando código: una intro a patrones de diseño
  https://events.codemotion.com/conferences/online/2022/online-tech-conference-2022-spanish-edition-spring/agenda

- CSS3.- boton
  https://codepen.io/dp_lewis/pen/WNZQzN
  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
  https://japatonic.com/ar/

- Menu acordeon
  https://codepen.io/MrsColombo/pen/mEeQwy

- cursos varios y de python
    https://es.coursera.org/learn/interactive-python-1
    https://es.coursera.org/

-----------------------------------------
 - Cómo usar EJS para crear una plantilla de su aplicación Node
 https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-es

 https://www.npmjs.com/package/ejs

 ---------------------------------------------
  - Documentacion   MONGO base datos
  https://www.mongodb.com/docs/drivers/node/current/

  https://www.mongodb.com/docs/drivers/node/current/usage-examples/

  https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/
  
  https://www.mongodb.com/docs/drivers/node/current/quick-reference/

  https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp
  -----------------------------
  
