function Card({ img, name }) {
	return (
		<div>
			<img src={img} alt="name" />
			<p>{name}</p>
		</div>
	);
}

export default Card;
