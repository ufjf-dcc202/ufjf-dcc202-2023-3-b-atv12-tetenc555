let estoque ={
    'joao':[
        {'tipo': 'maca', 'qtd': 1},
        {'tipo': 'maca', 'qtd': 2},
],
    'maria':[
        {'tipo': 'maca', 'qtd': 1},
        {'tipo': 'maca', 'qtd': 2},
],
};

function getEstoque(){
    return structedClone(estoque);
}

export {getEstoque};