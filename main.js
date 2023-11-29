document.entrada.addEventListener('submit',leFormulario);


function leFormulario(event){
    event.preventDefault();
    const quantidade= document.entrada.quantidade.value;
    const fruta= document.entrada.fruta.value;
    const pessoa=document.entrada.origem.value;

    console.log(`${pessoa} tem ${quantidade} ${fruta}`);
}