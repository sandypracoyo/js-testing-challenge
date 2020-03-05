const isIsogram = require('../src/14.js');

test('Test 14 untuk mengecek fungsi mendeteksi isogram atau bukan.', () => {
	expect(isIsogram('gelas')).toBe(true);
	expect(isIsogram('makan')).toBe(false);
});
