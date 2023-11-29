document.entrada.addEventListener('submit',leFormulario);
const olJoao = document.querySelector("ol#joao");
const olMaria = document.querySelector("ol#maria");


function leFormulario(event){
    event.preventDefault();
    const quantidade= document.entrada.quantidade.valueAsNumber;
    const fruta= document.entrada.fruta.value;
    const origem=document.entrada.origem.value;
    const destino=document.entrada.destino.value;
    console.log(`${origem} tem ${quantidade} ${fruta} para ${destino}`);
}