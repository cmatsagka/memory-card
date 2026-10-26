import CardsSection from '../components/CardsSection';

function PlayingScreen({ cards }) {
	return (
		<div>
			<h2>Memory Round</h2>
			<CardsSection cards={cards} />
		</div>
	);
}

export default PlayingScreen;
