import CardsSection from '../components/CardsSection';
import deckGenerator from '../constants/gameConfig';
import { useState } from 'react';

function PlayingScreen() {
	const [cards, setCards] = useState(() => deckGenerator('planets'));
	const [cardsMemory, setCardsMemory] = useState([]);

	const handleCardClick = (clickedCard) => {
		setCardsMemory((prevMemory) => {
			const updated = [...prevMemory, clickedCard];

			return updated;
		});
	};

	return (
		<div>
			<h2>Memory Round</h2>
			<CardsSection cards={cards} onCardClick={handleCardClick} />
		</div>
	);
}

export default PlayingScreen;
