export default function SlideShow({housing}) {
	return (
		<div className="slideshow-container">
			{housing.pictures.map(picture => (
				<img
					src={picture}
					alt='Photo du logement'
				/>
			))}
		</div>
	);
}
