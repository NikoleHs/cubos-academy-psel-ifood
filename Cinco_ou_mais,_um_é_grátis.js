function solucao(precos) {
    //seu codigo aqui
    let menor = precos[0];
    let x = 0;
    if (precos.length >= 5) {
        for (i = 0; i < precos.length; i++) {
            if (precos[i] < menor) {
                menor = precos[i];
            }
        }
        for (i = 0; i < precos.length; i++) {
            x = x + precos[i];
        }
        x = x - menor;
    } else {
        for (i = 0; i < precos.length; i++) {
            x = x + precos[i];
        }
    }
    console.log(x);
}