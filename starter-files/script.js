// API
const API_ENDPOINT = 'https://yesno.wtf/api';

let button = document.getElementById("button");
let answer =document.getElementById("answer");
let input = document.getElementById("input");
let error = document.getElementById("error")

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */



async function fetchAnswer() {
    let promesa = fetch(API_ENDPOINT);

    promesa
    .then((response)=>{
        response.json().then(async (data)=>{ 
            answer.innerText=data.answer;      
            await new Promise(resolve => setTimeout(resolve, 3000)); // esperar 3 segundos
            answer.innerText="";
            input.value="";

        })
        .catch(
            (mal) => {console.log("promesa con el json"+mal);}
        );
    })
    .catch((err)=>{console.log("Existió un problema con la solicitud "+ err);});

}//fechAnswer

function validarInput() {
    if(input.value.length < 3){
        console.log("entra la if");
        error.innerText="Ingresa una pregunta válida";
        input.focus;
        return false;
    }else{
        console.log("entra al else" );
        return true;
    }
}//Validar Input 


button.addEventListener("click", function(event) {
    event.preventDefault();
    error.innerText="";

    if (validarInput()){
        fetchAnswer();
    }
})//addEventListener del boton 