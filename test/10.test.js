const censor = require('../src/10.js');

test('Test 10 untuk sensor kata yang di-inputkan', () => {
	expect(censor('Saya ingin makan nasi goreng.', [ 'saya', 'nasi' ])).toBe('#### ingin makan #### goreng.');
});
