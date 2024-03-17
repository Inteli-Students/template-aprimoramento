const valor_pago = require('../valor_pago');

test('confere o valor pago', () => {
    expect(valor_pago(1, 1)).toBe(1);
    expect(valor_pago(10, 10)).toBe(100);
    expect(valor_pago(30, 5)).toBe(150);
});
