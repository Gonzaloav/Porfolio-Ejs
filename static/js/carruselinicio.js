

const images = [ 
    "/static/imagenes/inicio/paisaje.jpg", 
    "/static/imagenes/inicio/fauna.jpg",
    "/static/imagenes/inicio/retrato.jpg",
    "/static/imagenes/inicio/conceptual.jpg"
];

let selectedIndex = 0;
let selectedImage = images[0];

const selectNewImage = (images, next = true) => {
    
    const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;

    const nextIndex = next ? condition  ? selectedIndex + 1 : 0 : condition ? selectedIndex - 1 : images.length - 1;

    setSelectedImage(images[nextIndex]);
    selectedIndex = nextIndex;
    console.log(
        "nextIndex , selectedIndex ,selectedImage",
        selectedIndex,
        nextIndex,
        selectedImage,
    );
};

const previous = () => {
    console.log("Previous <-");
    selectNewImage(images, false);
};

const next = () => {
    console.log("Next ->");
    selectNewImage(images);
};

function setSelectedImage (newImage) {
    const img = document.querySelector("#carrusel")
    img.src = newImage
}


setInterval(() => {
    selectNewImage(images);
}, 3000);
        
document.querySelector("#nextButton").addEventListener("click",next)
document.querySelector("#previousButton").addEventListener("click",previous)
