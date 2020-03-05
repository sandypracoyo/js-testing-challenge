const sum = require('../src/02.js');

test('Test 02 untuk mengecek apakah mengembalikan penjumlahan dari dua nilai', () => {
	expect(sum(2, 2)).toBe(4);
});
