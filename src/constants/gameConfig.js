import { getCardImageUrl } from '../utils/dicebear.js';

const names = ['Alpha', 'Beta', 'Gamma'];

function deckGenerator(theme) {
	return names.map((nameItem) => ({
		name: nameItem,
		img: getCardImageUrl(theme, nameItem),
	}));
}

export default deckGenerator;
