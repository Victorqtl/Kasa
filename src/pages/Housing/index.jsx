import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import HousingInfos from './components/HousingInfos';
import SlideShow from './components/SlideShow';


export default function Apartment() {
	const {id} = useParams();

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

	const housing = data.find(housing => housing.id === id);

	return (
		<>
			<SlideShow housing={housing} />
			<HousingInfos housing={housing} />
		</>
	);
}
