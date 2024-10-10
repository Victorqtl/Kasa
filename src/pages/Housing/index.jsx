import {useParams} from 'react-router-dom';
import data from '@/data/logements.json';

export default function Apartment() {
	const {id} = useParams();
	const logement = data.find(logement => logement.id === id);

	return (
		<div>
			<h1>{logement.title}</h1>
			<p>{logement.description}</p>
		</div>
	);
}
