const quantidade_inteli = require('../quantidade_inteli');

test('confere o valor pago', () => {
    expect(quantidade_inteli(["Inteli", "USP"])).toBe(1);
    expect(quantidade_inteli(["Inteli", "USP", "Inteli", "USP", "Inteli", "USP", "Inteli", "FGV"])).toBe(4);
    expect(quantidade_inteli(["USP", "FGV", "UNICAMP"])).toBe(0);
});
