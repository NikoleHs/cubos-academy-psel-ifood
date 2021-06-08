function solucao(produtos) {
    //seu codigo aqui
    let percentual = 0;
    let somaTopLinha = 0;
    let somaProdutos = 0;
    let resultado = {
        totalTop: 0,
        percentual: 0
    };

    for (i = 0; i < produtos.length; i++) {
        somaProdutos += produtos[i]["preco"];
        if (produtos[i]["preco"] > 10000)
            resultado.totalTop += produtos[i]["preco"]; //verificar
    }
    resultado.percentual = resultado.totalTop / somaProdutos;
    console.log(resultado);
}