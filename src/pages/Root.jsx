import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Root() {
	return (
		<div className='app-container'>
			<Header />
			<main className='content'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
