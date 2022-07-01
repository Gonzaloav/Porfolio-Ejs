/**  Valid image file types for browsers: 
https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
https://caniuse.com/?search=webp */

// Mime types de los ficheros aceptados como imagenes en HTML.
const validHtmlImageFormats = [
    "image/apng",
    "image/avif",
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/webp",
]
// Almacenará la información recopilada sobre el fichero.
const imagesData = []
let imagesReady = 0

/**  Obtenemos acceso en el DOM a los elementos HTML que deseamos controlar 
 desde este script.*/
const input = document.querySelector('#photos_input')
const imagePreviewArea = document.querySelector('#img_preview')
const imageDataInput = document.querySelector("#photos_data_input")
const submitButton = document.querySelector("#submit_button")

/** Añade información del tamaño de la imagen.
Se ejecuta una vez finalice la carga de la imagen en el elemento img.*/
 
function imageLoadHandler (imageHTMLElement, imageIdx) {
    let ratio
    switch (
        (imageHTMLElement.naturalWidth / imageHTMLElement.naturalHeight).toFixed(2)
    ) {
        case (4/3).toFixed(2):
            ratio = "4/3"
            break;
        case (3/4).toFixed(2):
            ratio = "3/4"
            break;
        case (2/3).toFixed(2):
            ratio = "2/3"
            break;
        case (3/2).toFixed(2):
            ratio = "3/2"
            break;
        case (1):
            ratio = "1/1"
            break;
        case (16/9).toFixed(2):
            ratio = "16/9"
            break;                         
        default:
            ratio = "cust"
            break;
    }
    imagesData[imageIdx].ratio = ratio
    imagesReady++
    if ( imagesReady === input.files.length ) {
        imageDataInput.value = JSON.stringify(imagesData)
        submitButton.disabled = false
    }
}

function proccesImage(image, imageIdx) {

    const imageData = {};

    const imageThumb = document.createElement("img");
    imagePreviewArea.appendChild(imageThumb)

// Obtiene una URL válida para el contenido del fichero
    const encodedFile = URL.createObjectURL(image)

// Cuando la imagen se cargue, añadirá información sobre el tamaño de la misma.
    imageThumb.addEventListener("load", ()=>imageLoadHandler(imageThumb, imageIdx))

    // Asigna el contenido del fichero a la imagen.
    imageThumb.src = encodedFile

// Obtiene información sobre el fichero y lo muestra en el elemento párrafo.
    imageData.fileName = image.name
    imageData.primaryMimeType = image.type.split("/",1)[0]
    imageData.validHtmlImageIdx = validHtmlImageFormats.findIndex( item =>item === image.type)
    imageData.bytes = image.size
    imageData.mimeType = image.type
    imageData.isImage = imageData.primaryMimeType === "image"
    imageData.isValidWebImage = imageData.validHtmlImageIdx > 0
    imagesData.push(imageData)
}

/** Se ejecuta cuando el usuario selecciona un fichero.*/
function selectFileHandler () {

    imagesReady = 0;
    imagePreviewArea.innerHTML="";
    submitButton.disabled = true;

    [...input.files].forEach(
        (image,idx) => {
            proccesImage(image, idx)
        }
    );
}


/**  Iniciar la actualización del contenido de los elementos 
cada vez que el usuario selecciona un fichero.*/
input.addEventListener("change",selectFileHandler);