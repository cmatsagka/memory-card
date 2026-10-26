export function getCardImageUrl(theme, seed) {
	const url = `https://api.dicebear.com/10.x/${theme}/svg?seed=${seed}`;

	return url;
}
