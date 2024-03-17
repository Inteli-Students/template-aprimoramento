const media_altura = require('../media_altura');

test('confere o valor pago', () => {
    expect(media_altura(1.30, 1.40, 1.50, 1.60, 1.70)).toBe("1.50");
    expect(media_altura(1.85, 1.80, 1.90, 1.80, 1.90)).toBe("1.85");
    expect(media_altura(1.50, 1.50, 1.50, 1.50, 1.50)).toBe("1.50");
});