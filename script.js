const apiKey = 'd3c39f57206d5904890771c822ffaac3';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function consumoConfetch(url){
        try{
            const pos = await fetch(url);
            console.log(`la peticion a la api se completo correctamente con status: ${pos.status}`);
            return await pos.json();
        }
        catch(error){
            console.error(`fallo la peticion a la api con error: ${error.message}`);
        }
}

const respuestallamado = consumoConfetch(apiUrl);
/*
const boton = document.querySelector("button");
boton.onclick = () => cambiar(); 

function cambiar() {
    const ciudad = document.querySelector("input");
    console.log(ciudad);
 // for(dato of respuestallamado){


  //}
}
*/

