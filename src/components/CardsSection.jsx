import Card from './Card';
import '../styles/cards.css';

function CardsSection({ cards }) {
	return (
		<div className="card-grid">
			{cards.map((card) => {
				return <Card key={card.name} img={card.img} name={card.name} />;
			})}
		</div>
	);
}

export default CardsSection;
