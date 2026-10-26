function Card({ img, name, onCardClick }) {
	return (
		<div className="card" onClick={onCardClick}>
			<img src={img} alt={name} />
			<p>{name}</p>
		</div>
	);
}

export default Card;
