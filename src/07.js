function repeatLetter(text, times = 1) {
	const b = [ ...text ];
	const c = [];

	b.forEach((e) => {
		c.push(e.repeat(times));
	});
	return c.join('').replace(' ', '');
}

module.exports = repeatLetter;
