import data from '@/data/logements.json';

export default function Card() {
	return (
		<ul>
			{data.map(logement => (
				<li
					className='card'
					key={logement.id}>
						<img
							src={logement.cover}
							alt='Photo du logement'
						/>
					<p>{logement.title}</p>
				</li>
			))}
		</ul>
	);
}
