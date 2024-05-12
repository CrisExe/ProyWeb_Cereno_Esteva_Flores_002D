function MostrarFormulario(){
    
    var formulario = document.getElementById("formulario");
    var fondo = document.getElementById("fondo-formulario");

    if (formulario.style.display === "" || formulario.style.display === "none") {
        formulario.style.display = "block";
        fondo.style.display = "flex";
        document.set
    }
    else {
        formulario.style.display = "none";
        fondo.style.display = "none";
    }

}
function OcultarFormulario(){
    var formulario = document.getElementById("formulario");
    var fondo = document.getElementById("fondo-formulario");
    formulario.style.display = "none";
    fondo.style.display = "none";
}

function MostrarCaja(e){
    //e.preventDefault();

    
    var id = e.currentTarget.id;  // Obtiene el id de la caja que se ha clickeado, la id la tiene el evento es deir e
    var detalle;

    switch(id){
        case "caja1":
            detalle = document.getElementById("detalle1"); 

            if (detalle.style.visibility === null || detalle.style.visibility === "" || detalle.style.visibility === "hidden") {
                detalle.style.visibility = "visible";
            }
            else {
                detalle.style.visibility = "hidden";
            }
            break;
        case "caja2":
            detalle = document.getElementById("detalle2");
        
            if (detalle.style.visibility === "" || detalle.style.visibility === "hidden") {
            detalle.style.visibility = "visible";
            }
            else {
            detalle.style.visibility = "hidden";
            }
            break;
        case "caja3":
            detalle = document.getElementById("detalle3");
        
            if (detalle.style.visibility === "" || detalle.style.visibility === "hidden") {
            detalle.style.visibility = "visible";
            }
            else {
            detalle.style.visibility = "hidden";
            }
            break;
        case "caja4":
            detalle = document.getElementById("detalle4");
        
            if (detalle.style.visibility === "" || detalle.style.visibility === "hidden") {
            detalle.style.visibility = "visible";
            }
            else {
            detalle.style.visibility = "hidden";
            }
            break;
        case "caja5":
            detalle = document.getElementById("detalle5");
        
            if (detalle.style.visibility === "" || detalle.style.visibility === "hidden") {
            detalle.style.visibility = "visible";
            }
            else {
            detalle.style.visibility = "hidden";
            }
            break;
        case "caja6":
            detalle = document.getElementById("detalle6");
        
            if (detalle.style.visibility === "" || detalle.style.visibility === "hidden") {
            detalle.style.visibility = "visible";
            }
            else {
            detalle.style.visibility = "hidden";
            }
            break;
        default:
            // Default code if id doesn't match any case
            console.log("ERROR: ID no encontrado en el switch de MostrarCaja()");
    }
}


// Obtén todas las estrellas
let stars = document.querySelectorAll('.bi-star');
let fullstars = document.querySelectorAll('.bi-star-fill');
stars.forEach((star, index) => { // Agrega un event listener a cada estrella
    star.addEventListener('click', () => {
        // Colorea todas las estrellas hasta la que fue clickeada
        for(let i = 0; i <= index; i++) {
            stars[i].style.display = "none";
            fullstars[i].style.display = "inline-block";
        }
    });
});
fullstars.forEach((fullstar, index) => { // Agrega un event listener a cada estrella llenada
    fullstar.addEventListener('click', () => {
        // descolorea todas las estrellas hasta la que fue clickeada
        for(let i = index; i <= 4; i++) {
            stars[i].style.display = "inline-block";
            fullstars[i].style.display = "none";
        }
    });
});


