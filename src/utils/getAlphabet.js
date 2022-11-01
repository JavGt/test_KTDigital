export const getAlphabet = position => {
	if (position === undefined || position < 0)
		return Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	return alphabet[position].toUpperCase();
};
