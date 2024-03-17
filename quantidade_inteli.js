function quantidade_inteli(lista) {
    lista = lista;
    // lista = ["Inteli", "FGV", "Inteli" "Insper", "FIAP", "Mackenzie", "USP", "Inteli"], por exemplo
    // TODO: contar quantas vezes a palavra "Inteli" aparece na lista
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === "Inteli") {
            contador++;
        }
    }
    return contador;
}

module.exports = quantidade_inteli;
