
function Carruselinico () {
    const images = [ 
        "/static/imagenes/inicio/paisaje.jpg", 
        "/static/imagenes/inicio/fauna.jpg",
        "/static/imagenes/inicio/retrato.jpg",
        "/static/imagenes/inicio/conceptual.jpg"
    ];
    let selectedIndex = 0;
    let selectedImage = images[0];
  
    const selectNewImage = (selectedIndex, images, next = true) => {
     
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
  
      const nextIndex = next ? condition  ? selectedIndex + 1 : 0 : condition ? selectedIndex - 1 : images.length - 1;
  
      setSelectedImage(images[nextIndex]);
      selectedIndex = nextIndex;
      console.log(
        "nextIndex , selectedIndex ,selectedImage",
        selectedIndex,
        nextIndex,
        selectedImage,
        setSelectedImage(images[nextIndex])
      );
    };
  
    const previous = () => {
      selectNewImage(selectedIndex, images, false);
    };
  
    const next = () => {
      selectNewImage(selectedIndex, images);
    };
  
    function setSelectedImage (newImage) {
        const img = document.querySelector("#carrusel")
        img.src = newImage
    }

    function start () {
        setInterval(() => {
            selectNewImage(selectedIndex, images);
        }, 3000);
            return () => clearInterval(interval);
    }
        
    document.addEventListener("load", start)
}
    