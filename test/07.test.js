const repeatLetter = require('../src/07.js');

test('Test 07 untuk mengulangi huruf sebanyak parameter yang di inputkan', () => {
	expect(repeatLetter('Hello World!', 2)).toBe('HHeelllloo WWoorrlldd!!');
});
