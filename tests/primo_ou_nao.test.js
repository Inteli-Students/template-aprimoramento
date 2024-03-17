const primo_ou_nao = require('../primo_ou_nao');

test('confere o valor pago', () => {
    expect(primo_ou_nao(10)).toBe("não primo");
    expect(primo_ou_nao(17)).toBe("primo");
    expect(primo_ou_nao(3)).toBe("primo");
    expect(primo_ou_nao(1)).toBe("não primo");
    expect(primo_ou_nao(5)).toBe("primo");
    expect(primo_ou_nao(30022)).toBe("não primo");
    expect(primo_ou_nao(100)).toBe("não primo");
});
