export function shuffle(array) {
	const newArray = [...array];

	for (let i = newArray.length - 1; i >= 1; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
}
