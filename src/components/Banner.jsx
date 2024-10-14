const Banner = ({imageUrl, text}) => {
	return (
		<div className='banner'>
			<div className='image-container'>
				<img
					src={imageUrl}
					alt='Bannière'
				/>
			</div>
			<h1>{text}</h1>
		</div>
	);
};

export default Banner;
