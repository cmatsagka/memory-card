import CardsSection from '../components/CardsSection';
import deckGenerator from '../constants/gameConfig';
import { shuffle } from '../utils/shuffle';
import { useState } from 'react';

function PlayingScreen({ theme, level, onGameOver }) {
	const [cards, setCards] = useState(() => deckGenerator(theme, level));
	const [cardsMemory, setCardsMemory] = useState([]);

	const handleCardClick = (clickedCard) => {
		const isIncluded = cardsMemory.some(
			(card) => card.name === clickedCard.name
		);

		if (isIncluded) {
			onGameOver(cardsMemory.length);
			return;
		}

		setCardsMemory((prevMemory) => [...prevMemory, clickedCard]);
		setCards(shuffle(cards));
	};

	return (
		<div>
			<h2 className="score">Score: {cardsMemory.length}</h2>
			<CardsSection cards={cards} onCardClick={handleCardClick} />
		</div>
	);
}

export default PlayingScreen;
