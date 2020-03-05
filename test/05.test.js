const isPrime = require('../src/05.js');

test('Test 05 untuk mengecek bilangan prima', () => {
	expect(isPrime(5)).toBe(true);
	expect(isPrime(4)).toBe(false);
});
