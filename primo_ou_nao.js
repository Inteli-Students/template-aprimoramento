function primo_ou_nao(num) {
    num = num
    // num = 13, por exemplo
    // TODO: retornar "primo" se o número for primo e "não primo" se o número não for primo
    // Dica: Deve-se considerar apenas os números inferiores a ele mesmo, e saber que ele é primo se for divisível apenas por 1 e por ele mesmo 
    // Dica: O número 1 não é primo
    if (num < 2) {
        return "não primo"
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return "não primo"
        }
    }
    return "primo"
}

module.exports = primo_ou_nao;