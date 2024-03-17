function valor_pago(quantidade, valor_unitario) {
    quantidade = quantidade;
    // quantidade = 10, por exemplo
    valor_unitario = valor_unitario;
    // valor_unitario = 5, por exemplo
    // TODO: Implementar a função para calcular o valor total a ser pago
    let total = quantidade * valor_unitario;
    return total;
}

module.exports = valor_pago;
