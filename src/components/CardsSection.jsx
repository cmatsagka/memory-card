import Card from './Card';
import '../styles/cards.css';

function CardsSection({ cards, onCardClick }) {
	return (
		<div className="card-grid">
			{cards.map((card) => {
				return (
					<Card
						key={card.name}
						img={card.img}
						name={card.name}
						onClick={() => onCardClick(card)}
					/>
				);
			})}
		</div>
	);
}

export default CardsSection;
