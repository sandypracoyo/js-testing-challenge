function arrayMirroring(numberList) {
	const a = [ ...numberList ].reverse();
	return numberList.concat(a);
}

module.exports = arrayMirroring;
