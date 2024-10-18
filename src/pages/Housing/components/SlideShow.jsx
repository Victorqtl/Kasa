import RightArrow from '/src/assets/right-arrow.png';
import LeftArrow from '/src/assets/left-arrow.png';
import {useState} from 'react';

export default function SlideShow({housing}) {
	const housingPictures = housing.pictures;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const handlePrev = () => {
		if (!isAnimating) {
			setIsAnimating(true);
			setCurrentIndex(index => (index - 1 + housingPictures.length) % housingPictures.length);
		}
	};

	const handleNext = () => {
		if (!isAnimating) {
			setIsAnimating(true);
			setCurrentIndex(index => (index + 1) % housingPictures.length);
		}
	};

	const handleAnimationEnd = () => {
		setIsAnimating(false);
	};

	return (
		<div className='slideshow-container'>
			{housingPictures.length > 1 && (
				<button
					className='left-arrow'
					onClick={handlePrev}>
					<img
						src={LeftArrow}
						alt='Flèche gauche'
					/>
				</button>
			)}
			{housingPictures.length > 1 && (
				<button
					className='right-arrow'
					onClick={handleNext}>
					<img
						src={RightArrow}
						alt='Flèche droite'
					/>
				</button>
			)}
			<div
				className={`slide ${isAnimating ? 'slide-enter' : ''}`}
				onAnimationEnd={handleAnimationEnd}
				key={currentIndex}>
				<img
					src={housingPictures[currentIndex]}
					alt='Photo du logement'
				/>
				{housingPictures.length > 1 && <p>{`${currentIndex + 1} / ${housingPictures.length}`}</p>}
			</div>
		</div>
	);
}
