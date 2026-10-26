function Card({ img, name }) {
	return (
		<div className="card">
			<img src={img} alt="name" />
			<p>{name}</p>
		</div>
	);
}

export default Card;
