import CardsSection from '../components/CardsSection';
import deckGenerator from '../constants/gameConfig';
import { shuffle } from '../utils/shuffle';
import { useEffect, useState } from 'react';
import '../styles/PlayingScreen.css';

function PlayingScreen({ theme, level, onGameOver, onWin, onScoreUpdate }) {
	const [cards, setCards] = useState(() => deckGenerator(theme, level));
	const [cardsMemory, setCardsMemory] = useState([]);

	useEffect(() => {
		if (onScoreUpdate) {
			onScoreUpdate(cardsMemory.length);
		}
	}, [cardsMemory, onScoreUpdate]);

	const handleCardClick = (clickedCard) => {
		const isIncluded = cardsMemory.some(
			(card) => card.name === clickedCard.name
		);

		if (isIncluded) {
			onGameOver(cardsMemory);
			return;
		}

		const newMemory = [...cardsMemory, clickedCard];

		if (newMemory.length === cards.length) {
			onWin(newMemory);
			return;
		}

		setCardsMemory(newMemory);
		setCards(shuffle(cards));
	};

	return (
		<div className="playing-screen">
			<CardsSection cards={cards} onCardClick={handleCardClick} />
		</div>
	);
}

export default PlayingScreen;
