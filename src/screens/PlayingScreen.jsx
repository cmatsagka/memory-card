import CardsSection from '../components/CardsSection';
import deckGenerator from '../constants/gameConfig';

function PlayingScreen() {
	const cards = deckGenerator('planets');

	return (
		<div>
			<h2>Memory Round</h2>
			<CardsSection cards={cards} />
		</div>
	);
}

export default PlayingScreen;
