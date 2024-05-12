async function regiones(){
    const url = "https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/b8575eb82dce974fd2647f46819a7568278396bd/comunas-regiones.json";
    const metodo = 'get'; // hacemos un metodo para solicitar cosas
    // llamas a api lista de regiones
    console.log('call service',url);
    const resp = await fetch(url, { //  hacemos un solicitud hhtp a la url y con el metodo get
        method: metodo,
    }).then((response) => {
        console.log(`response: ${response.status}`)
        // verificamos las respueta
        if(response.status == 200 ){
            console.log('Respuesta correcta'); 
            return response.json(); 
            // si la respuesta es correcta devolver un formato json
        }else{
            console.log('ERROR EN LA RESPUESTA')
        }
    }).then((data) => { // si la respuesta antes fue buena , se lee de forma data.json 
        console.log(`regiones: ${data.regiones}`); // imprime las regiones
        selectOneRegion = `<select id="lista-regiones" onclick="listarComunas()"
                        class="form-select my-3" aria-label="Select region">`;
        for (i = 0; i <data.regiones.length; i++){ // recorre cada region 
            console.log(`Region: ${data.regiones[i].region}`);
            console.log(`comunas: ${data.regiones[i].comunas}`);
            nombre = data.regiones[i].region;
            selectOneRegion = `${selectOneRegion} 
                               <option value="${i}">${nombre}</option>`; // anade una opcion al elemento 
                                                                        //select con el nombre de la region
        }
        labelRegion = `<label for="lista-regiones"  
                        class="form-label">REGIONES</label>`;// crea un elemento label para el elemento select
        selectOneRegion = `${labelRegion} ${selectOneRegion} </select>`; // convina label y select en una cadena de texto
        console.log(`selectOneRegion: ${selectOneRegion}`); // imprime la cadena de texto completa
        document.getElementById('regiones').innerHTML = selectOneRegion;// busca en el document el id regiones y le reempleaza el contendio con la cadena 

    }).catch((err) => { // para cuando la promesa se rechaza 
        // tomamos el error
        console.log(`ERROR:  ${err.message}`);// se imprime el error.
    })
}
async function listarComunas(){
    let region_id = undefined; // se declara como indefinido
try{
    region_id = document.getElementById('lista-regiones').value; // se carga el valro de la region, posicion
}catch(ex){
    region_id = 0;
}

    const url = "https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/b8575eb82dce974fd2647f46819a7568278396bd/comunas-regiones.json";
    const method = 'GET';
/* LLAMADO A API REST LISTAR REGIONES DIVISIÓN POLITICO ADMINISTRATIVA (DPA) */
    const resp = await fetch(url,{
    }).then((response) =>{
        if (response.status == 200) {
            console.log('RESPUESTA CORRECTA.');
            /* RETORNANDO RESPUESTA EN FORMATO JSON*/
            return response.json();
        } else {
            console.log('ERROR EN LA RESPUESTA DE LA API DPA');
            /* EN CASO DE ERROR SE PROPAGA Y ES CAPTURADO POR EL BLOQUE CATCH*/
            //throw new Exception('ERROR EN LA RESPUESTA DE LA API DPA');
        }
    }).then((data)=>{
        console.log(`region_id: ${region_id}`);
        let comunas = data.regiones[region_id].comunas; // se obtienen las comunas dependiendo de la id de la region 
        comunas.sort();
        console.log(`comunas: ${comunas}`);
        selectOneComunas = `<select id="lista-comunas" 
        class="form-select my-3" aria-label="Select comunas">`;
        for (i = 0; i < comunas.length; i++) {
            nombre = comunas[i];
            selectOneComunas = `${selectOneComunas} 
                            <option value="${i}">${nombre}</option>`;
        }
        labelComunas = `<label for="lista-comunas"
                        class = "form-label">COMUNAS</label>`;
        selectOneComunas = `${labelComunas} ${selectOneComunas}</select>`;
        console.log(`selectOneComunas: ${selectOneComunas}`);
        document.getElementById('comunas').innerHTML=selectOneComunas;
    }).catch((err) =>{
        /* SECCION PARA CAPTURAR ERRORES */
        console.log(`ERROR: ${err.message}`);
    });
}
regiones();
regiones();