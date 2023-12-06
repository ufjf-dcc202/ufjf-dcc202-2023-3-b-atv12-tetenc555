import {getEstoque,transacaoNoEstoque} from "./estoque.js";
document.entrada.addEventListener('submit',leFormulario);
const olJoao = document.querySelector("ol#joao");
const olMaria = document.querySelector("ol#maria");

atualizaTela();

function leFormulario(event){
    event.preventDefault();
    const quantidade= document.entrada.quantidade.valueAsNumber;
    const fruta= document.entrada.fruta.value;
    const origem=document.entrada.origem.value;
    const destino=document.entrada.destino.value;
    console.log(`${origem} tem ${quantidade} ${fruta} para ${destino}`);
    transacaoNoEstoque(origem,destino,fruta,quantidade);
    atualizaTela();
}

function atualizaTela(){
    const estoque = getEstoque();
    preencheLista(olJoao,estoque.joao);
    preencheLista(olMaria,estoque.maria);
}

function preencheLista(lista,estoqueDaPessoa)
{
    lista.innerHTML = "";
    for(let i=0; i<estoqueDaPessoa.length;i++)
    {
        const monte = estoqueDaPessoa[i];
        const li = document.createElement("li");
        li.textContent = `${monte.tipo}: ${monte.qtd}`;
        lista.append(li);
    }
}