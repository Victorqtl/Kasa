import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import HousingInfos from './components/HousingInfos';
import SlideShow from './components/SlideShow';

export default function Apartment() {
	const {id} = useParams();
	const navigate = useNavigate();
	const [housing, setHousing] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/data/housing.json');
			const responseData = await response.json();
			const currentHousing = responseData.find(housing => housing.id === id);
			if (currentHousing) {
				setHousing(currentHousing);
			} else {
				navigate('/404');
			}
		}
		fetchData();
	}, []);
	if (!housing) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<SlideShow housing={housing} />
			<HousingInfos housing={housing} />
		</>
	);
}
