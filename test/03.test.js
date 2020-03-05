const mebiToKibi = require('../src/03.js');

test('Test 03 untuk mengubah mebi ke kibi', () => {
	expect(mebiToKibi(1)).toBe(1024);
});
