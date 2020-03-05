function censor(text, censoredWords, censorSymbol = '#') {
	return text.split(/\b/).map((word) => {
		return censoredWords.includes(word.toLowerCase()) ? censorSymbol.repeat(word.length) : word;
	}).join('');
}
module.exports = censor