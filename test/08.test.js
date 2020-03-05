const arrayMirroring = require('../src/08.js');

test('Test 08 untuk  mem-mirror array yang di-inputkan', () => {
	expect(arrayMirroring([ 1, 2, 3 ])).toEqual([ 1, 2, 3, 3, 2, 1 ]);
});
