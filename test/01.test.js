const charLength = require('../src/01.js');

test('Test hasilnya adalah panjang karakter', () => {
	expect(charLength('halo')).toBe(4);
});
