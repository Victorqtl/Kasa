import data from '@/data/logements.json';
import {NavLink} from 'react-router-dom';

export default function Card() {
	return (
		<ul>
			{data.map(logement => (
				<li
					className='card'
					key={logement.id}>
					<NavLink to={`/logement/${logement.id}`}>
						<img
							src={logement.cover}
							alt='Photo du logement'
						/>
						<p>{logement.title}</p>
					</NavLink>
				</li>
			))}
		</ul>
	);
}
