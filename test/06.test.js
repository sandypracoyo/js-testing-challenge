const repeatString = require('../src/06.js');

test('Test 06 untuk mengulangi string sebanyak parameter yang di inputkan', () => {
	expect(repeatString('Makan! ', 3)).toBe('Makan! Makan! Makan! ');
});
