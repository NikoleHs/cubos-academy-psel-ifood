function solucao(tempo, distancia) {
    //seu codigo aqui
    if (tempo < 5) {
        preco = 6 * 100;
        console.log(preco);
    } else if (tempo >= 5 && tempo <= 60) {
        preco1 = (tempo * 100);
        preco2 = (distancia * 50);
        preco = preco1 + preco2;
        console.log(preco);
    } else {
        if (distancia < 100) {
            preco = distancia * 200;
            console.log(preco);
        } else {
            preco = 150 * distancia;
            console.log(preco);
        }
    }

}