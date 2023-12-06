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

export {getEstoque};