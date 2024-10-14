import Collapse from './Collapse';
import Rating from './Rating';

export default function HousingInfos({housing}) {
	return (
		<>
			<div className='infos-container'>
				<div className='infos-header'>
					<div className='left-content'>
						<h1>{housing.title}</h1>
						<p>{housing.location}</p>
						<div className='tags'>
							{housing.tags.map(tag => (
								<p>{tag}</p>
							))}
						</div>
					</div>
					<div className='right-content'>
						<div className='host'>
							<p>{housing.host.name}</p>
							<img
								src={housing.host.picture}
								alt="Photo de l'host"
							/>
						</div>
						<Rating rating={housing.rating} />
					</div>
				</div>
				<Collapse housing={housing} />
			</div>
		</>
	);
}
