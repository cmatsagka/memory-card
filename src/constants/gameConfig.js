import { getCardImageUrl } from '../utils/dicebear.js';

const names = [
	'One',
	'Two',
	'Three',
	'Four',
	'Five',
	'Six',
	'Seven',
	'Eight',
	'Nine',
];

const levelCounts = { easy: 3, medium: 6, hard: 9 };

function deckGenerator(theme, level) {
	const count = levelCounts[level] || 3;

	return names.slice(0, count).map((nameItem) => ({
		name: nameItem,
		img: getCardImageUrl(theme, nameItem),
	}));
}

export default deckGenerator;
