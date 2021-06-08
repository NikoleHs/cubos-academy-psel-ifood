function solucao(letra, palavras) {
    //seu codigo aqui
    let cont = 0;
    for (i = 0; i < palavras.length; i++) {
        if (!palavras[i].startsWith(letra)) {
            cont++;
        }
    }
    console.log(cont);
}