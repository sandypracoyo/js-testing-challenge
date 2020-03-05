const isLeapYear = require('../src/04.js');

test('Test 04 untuk cek tahun kabisat', () => {
	expect(isLeapYear(2020)).toBe(true);
	expect(isLeapYear(2007)).toBe(false);
});
