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
let stars = document.querySelectorAll('.bi-star'); //stars es un arreglo con los elementos de clase bi-star, estrellas vacias

let fullstars = document.querySelectorAll('.bi-star-fill'); //fullstars es un arreglo con los elementos de clase bi-star-fill, estrellas llenas
stars.forEach((star, index) => { // Agrega un event listener a cada estrella, star es la estrella clickeada como elemento e index la posicion de la estrella en el arreglo
    star.addEventListener('click', () => { //al detectar un click hara lo de abajo
        // Colorea todas las estrellas hasta la que fue clickeada
        for(let i = 0; i <= index; i++) { //recorre todas las estrellas hasta la clickeada, de izquierda a derecha borra las vacias y pone las llenas, la cantidad de estrellas correspondientes
            stars[i].style.display = "none"; //oculta la estrella vacia
            fullstars[i].style.display = "inline-block"; //muestra la estrella llena
        }
    });
});
fullstars.forEach((fullstar, index) => { // Agrega un event listener a cada estrella llenada
    fullstar.addEventListener('click', () => { //al hacer el click hara lo de abajo
        // descolorea todas las estrellas hasta la despues de la clickeada
        for(let i = index+1; i <= 4; i++) { //recorre las estrellas desde despues de la clickeada, termina hasta que termine todas las estrellas, el tamaño del arreglo es 5 pero empieza en 0, por eso determinamos hasta 4
            stars[i].style.display = "inline-block"; //muestra la estrella vacia
            fullstars[i].style.display = "none"; //oculta la estrella llena
        }
    });
});

