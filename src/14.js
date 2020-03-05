function isIsogram(word) {
	return !/(.).*\1|\d/i.test(word);
}

module.exports = isIsogram;
