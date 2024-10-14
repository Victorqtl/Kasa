// import data from '@/data/logements.json';
import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

export default function Card() {
	const [data, setData] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/data/housing.json');
			const responseData = await response.json();
			setData(responseData);
		}
		fetchData();
	}, []);
	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<ul>
			{data.map(housing => (
				<li
					className='card'
					key={housing.id}>
					<NavLink to={`/logement/${housing.id}`}>
						<img
							src={housing.cover}
							alt='Photo du logement'
						/>
						<p>{housing.title}</p>
					</NavLink>
				</li>
			))}
		</ul>
	);
}