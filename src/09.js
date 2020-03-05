function symmetrical(value) {
	const a = Array.from(value.toString()).reverse('').join('');
	const b = value.toString();
	return a === b;
}

module.exports = symmetrical;
