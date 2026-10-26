import CardsSection from '../components/CardsSection';
import deckGenerator from '../constants/gameConfig';
import { shuffle } from '../utils/shuffle';
import { useState } from 'react';

function PlayingScreen() {
	const [cards, setCards] = useState(() => deckGenerator('planets'));
	const [cardsMemory, setCardsMemory] = useState([]);
	const score = cardsMemory.length;

	const handleCardClick = (clickedCard) => {
		const isIncluded = cardsMemory.some(
			(card) => card.name === clickedCard.name
		);

		if (isIncluded) {
			return;
		}

		setCardsMemory((prevMemory) => [...prevMemory, clickedCard]);

		setCards(shuffle(cards));
	};

	return (
		<div>
			<h2>Memory Round</h2>
			<CardsSection cards={cards} onCardClick={handleCardClick} />
		</div>
	);
}

export default PlayingScreen;
