import {Star} from 'lucide-react';

export default function Rating({rating}) {
	const totalStarsArray = [1, 2, 3, 4, 5];
	return (
		<div className='rating'>
			{totalStarsArray.map((star, index) => (
				<Star
					key={index}
					src={Star}
					alt='Étoile'
					fill={index <= rating ? '#ff6060' : 'lightgrey'}
					strokeWidth={0}
				/>
			))}
		</div>
	);
}
