function par_ou_impar(num) {
    num = num
    // num = 13, por exemplo
    // TODO: retornar "par" se o número for par e "ímpar" se o número for ímpar
    if (num % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

module.exports = par_ou_impar;
