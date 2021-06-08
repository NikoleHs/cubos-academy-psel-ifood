function solucao(largura, altura) {
    //seu codigo aqui
    if (altura > largura) {
        console.log("RETRATO");
    }
    if (largura > altura) {
        console.log("PAISAGEM");
    }
    if (altura === largura) {
        console.log("QUADRADA");
    }
}