import AboutUsBanner from 'assets/about-us-bg.png';
import Banner from '@/components/Banner';
import Collapse from './components/Collapse';

export default function AboutUs() {
	return (
		<>
			<Banner imageUrl={AboutUsBanner} />
			<Collapse />
		</>
	);
}
