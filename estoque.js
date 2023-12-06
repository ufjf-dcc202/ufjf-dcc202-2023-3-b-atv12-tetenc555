let estoque ={
    'joao':[
        {'tipo': 'maca', 'qtd': 1},
        {'tipo': 'pera', 'qtd': 2},
],
    'maria':[
        {'tipo': 'maca', 'qtd': 1},
        {'tipo': 'banana', 'qtd': 2},
],
};

function getEstoque(){
    return structuredClone(estoque);
}

function transacaoNoEstoque(origem,destino,tipo,quantidade)
{
    if(destino==='pomar')
    {
        const pessoa =estoque[origem]
        for (let i=0;i<estoque[origem].length;i++)
        {
            const monte = pessoa[i];
            if(monte.tipo === tipo)
            {
                monte.qtd -= Math.min(quantidade,monte.qtd);
            }
        }    
    }
}

export {getEstoque,transacaoNoEstoque};