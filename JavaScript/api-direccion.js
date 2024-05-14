
//------------------------------------------------------------------------------------------------------------------------------
async function leerArchivo() { //funcion que lee el archivo productos.json y devuelve un mensaje
    //leer un archivo JSON en el navegador, puedes hacerlo utilizando la API Fetch
    
    const url = "https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/b8575eb82dce974fd2647f46819a7568278396bd/comunas-regiones.json";
    const obtener = 'get'; // hacemos un metodo para solicitar cosas
    // llamas a api lista de regiones
    
    
    const respuesta_api = await fetch(url, { //  solicitamos el estado de la respuesta, y se espera a obtener antes de seguir con el code
        method: obtener,
    })
    try{
        if (respuesta_api.status!=200){   //si la respuesta no es 200, es decir, la api indico que no se pudo obtener el archivo, se mostrara un mensaje de error dsp
            throw new Error("HTTP error " + respuesta_api.status); //Muestra el porque no se pudo obtener el archivo por parte de la api
        }
        console.log(`Respuesta: ${respuesta_api.status}`) //debug
        return respuesta_api.json(); //si no hay porblemas, se devuelve el archivo en formato JSON
    }
    catch(respuesta_api) {  //si hay un error en la lectura del archivo por un link caido o etc, y da un error de codigo en la throw o api.json se mostrara un mensaje de error
        console.log("Error al leer el archivo JSON.");
    };

}
    
    


function ComprobarSelect(){    //comprueba que categoria esta seleccionada, y si está la opcion cargada de la funcion mostrarProducto
    let region_select=document.getElementById("Region").value;
    if (region_select=="" || region_select==null || region_select==undefined){
        console.log("Region no seleccionada");
        return false;
    }else{
        console.log("Validacion correcta");
        return true;
    }
}


async function MostrarComuna() {  //funcion que muestra los productos solo si hay una categoria seleccionada
    try{
        if (ComprobarSelect()==true){
            const basedatos = await leerArchivo() //espera a que la funcion leerArchivo termine y guarde el archivo en la variable basedatos
            htmlComuna=`<option id="comuna" value="" selected="" disabled="">Escoja su Comuna</option>`;
            
            console.log(document.getElementById("Region").value);
            console.log(ArrayRegion);

            let regionString=document.getElementById("Region").value;
            console.log(regionString);
            console.log(ArrayRegion.indexOf(regionString));
            const regionIndex=ArrayRegion.indexOf(regionString);
            
            for (let j = 0; j < basedatos.regiones[regionIndex].comunas.length; j++) {
                htmlComuna=htmlComuna+`<option value="${basedatos.regiones[regionIndex].comunas[j]}">${basedatos.regiones[regionIndex].comunas[j]}</option>`;

            }
            document.getElementById("Comuna").innerHTML=htmlComuna;
        }
    } catch (basedatos){}; //si hay un error en la lectura del archivo, se mostrara un mensaje de error de la funcion leerArchivo
}
async function MostrarRegion() {  //funcion que muestra las categorias, solo si no hay una categoria seleccionada
    try{
        if (ComprobarSelect()==false){
            
            const basedatos = await leerArchivo() //espera a que la funcion leerArchivo termine y guarde el archivo en la variable basedatos
            htmlRegion=`<option id="region" value="" selected="" disabled="">Escoja su Region</option>`;
            htmlComuna=`<option id="comuna" value="" selected="" disabled="">Escoja su Comuna</option>`;
            document.getElementById("Comuna").innerHTML=htmlComuna;
            for (let i = 0; i < basedatos.regiones.length; i++) {
                htmlRegion=htmlRegion+`<option value="${basedatos.regiones[i].region}">${basedatos.regiones[i].region}</option>`;
                ArrayRegion.push(basedatos.regiones[i].region);
            }
            document.getElementById("Region").innerHTML=htmlRegion;
            MostrarComuna(ArrayRegion);
        }
    }
    catch (basedatos){}
};

let regiones = document.getElementById('Region'); //selecciona el elemento con id categoria <select>
console.log(document.getElementById('Region')); //debug
regiones.addEventListener('change', MostrarComuna); //agrega un event listener al elemento de id categoria que al cambiar ejecuta la funcion MostrarProducto <select>

let ArrayRegion=[];

MostrarRegion();

//#selection Al llamar la funcion MostrarRegion no tiene porblemas de conseguir el valor del elemento llamado, que es 0, pero depsues de cambiar el seleccionable, 