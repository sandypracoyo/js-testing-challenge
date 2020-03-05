const symmetrical = require('../src/09.js');

test('Test 09 untuk mendeteksi apakah suatu value simetris atau tidak.', () => {
	expect(symmetrical('malam')).toBe(true);
	expect(symmetrical('taat')).toBe(true);
	expect(symmetrical('tidur')).toBe(false);
	expect(symmetrical(123)).toBe(false);
	expect(symmetrical(108801)).toBe(true);
	expect(symmetrical(8001008)).toBe(true);
});
