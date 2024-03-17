function media_altura(altura1, altura2, altura3, altura4, altura5) {
    altura1 = altura1;
    altura2 = altura2;
    altura3 = altura3;
    altura4 = altura4;
    altura5 = altura5;
    // altura = 1.70, por exemplo
    // TODO: calcular a média das alturas, retornando o valor com duas casas decimais
    let media_altura = (altura1 + altura2 + altura3 + altura4 + altura5) / 5;
    return media_altura.toFixed(2);
}

module.exports = media_altura;