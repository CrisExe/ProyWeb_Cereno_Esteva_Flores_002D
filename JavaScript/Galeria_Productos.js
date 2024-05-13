async function Galeria_Productos() { //una funcion asincrona

/*
Las funciones async en JavaScript son utilizadas para trabajar con operaciones asíncronas,
es decir, operaciones que pueden no completarse inmediatamente, como las solicitudes a una API,
la lectura de archivos, las operaciones de base de datos, etc.

Cuando marcas una función con la palabra clave async, esto significa que la función siempre devolverá una promesa.
Las promesas son objetos que representan el estado final de una operación asíncrona.

El uso de async y await hace que el código asíncrono sea más fácil de leer y escribir. 
await sólo puede ser usado dentro de una función async y hace que la ejecución de la función se pause hasta que la 
promesa se resuelva.
*/
}

//------------------------------------------------------------------------------------------------------------------------------
async function leerArchivo() { //funcion que lee el archivo productos.json y devuelve un mensaje
    //leer un archivo JSON en el navegador, puedes hacerlo utilizando la API Fetch
    
    return fetch('../Json productos/Productos.json')        
    //
    
        .then(response => {  //despues de resivir la respuesta de fetch, ejecuta una pequeña funcion que verifica si la respuesta esta bien o arrojo error
            if (!response.ok) {  //si la respuesta no esta bien, arroja un error
                console.log(response); //muestra en consola la respuesta 
                throw new Error("HTTP error " + response.status); //arroja un error en formato xhr
            }
            return response.json(); //si la respuesta esta bien, devuelve el archivo
        })
        .catch(function() {   //si hay un error en la lectura del archivo al principio, devolvera un mensaje de error y no se caera el programa
            console.log("Error al leer el archivo JSON.");
        });


}


function ComprobarSelect(){    //comprueba que categoria esta seleccionada, y si está la opcion cargada de la funcion mostrarProducto
    let categoria_select=document.getElementById("categoria").value;
    if (categoria_select=="" || categoria_select==null || categoria_select==undefined){
        console.log("Categoria no seleccionada");
        return false;
    }else{
        console.log("Categoria seleccionada");
        console.log(categoria_select);
        return true;
    }
    
}


async function MostrarProducto() {  //funcion que muestra los productos solo si hay una categoria seleccionada
    try{
        if (ComprobarSelect()==true){
            const basedatos = await leerArchivo() //espera a que la funcion leerArchivo termine y guarde el archivo en la variable basedatos
            htmlProducto=``;
            i=document.getElementById("categoria").value;
            for (let j = 0; j < basedatos.Productos[i].Tipo.length; j++) {
                htmlProducto=htmlProducto+`<option value="${j}">${basedatos.Productos[i].Tipo[j]}</option>`;
                console.log(basedatos.Productos[i].Tipo[j]); //debug
            }
            document.getElementById("producto").innerHTML=htmlProducto;
        }


    } catch (basedatos){}; //si hay un error en la lectura del archivo, se mostrara un mensaje de error de la funcion leerArchivo
}
async function MostrarCategoria() {  //funcion que muestra las categorias, solo si no hay una categoria seleccionada
    try{
        if (ComprobarSelect()==false){
            const basedatos = await leerArchivo() //espera a que la funcion leerArchivo termine y guarde el archivo en la variable basedatos
            htmlCategoria=``;
            console.log(basedatos.Productos.length); //debug
            for (let i = 0; i < basedatos.Productos.length; i++) {
                htmlCategoria=htmlCategoria+`<option value="${i}">${basedatos.Productos[i].Categoria}</option>`;
                console.log(basedatos.Productos[i].Categoria); //debug
            }
            document.getElementById("categoria").innerHTML=htmlCategoria;
            console.log(htmlCategoria); //debug
            MostrarProducto();
        }
    }
    catch (basedatos){}
};

let categoria = document.getElementById('categoria'); //selecciona el elemento con id categoria <select>
console.log(document.getElementById('categoria')); //debug
categoria.addEventListener('change', MostrarProducto); //agrega un event listener al elemento de id categoria que al cambiar ejecuta la funcion MostrarProducto <select>


MostrarCategoria(); //llama a la funcion MostrarCategoria




