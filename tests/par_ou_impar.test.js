const par_ou_impar = require('../par_ou_impar');

test('confere se o número é par', () => {
    expect(par_ou_impar(2)).toBe("par");
    expect(par_ou_impar(4)).toBe("par");
    expect(par_ou_impar(600)).toBe("par");
    expect(par_ou_impar(1)).toBe("ímpar")
    expect(par_ou_impar(111)).toBe("ímpar")
});
