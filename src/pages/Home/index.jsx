// import data from '@/data/logements.json'
import Card from './components/Card';
import Banner from '../../components/Banner';
import HomeBanner from 'assets/home-bg.png';

export default function HomePage() {
	return (
		<>
			<Banner
				imageUrl={HomeBanner}
				text={'Chez vous, partout et ailleurs'}
			/>
			<section className='card-container'>
				<Card />
			</section>
		</>
	);
}
