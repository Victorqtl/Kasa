import Header from './header';
import Footer from './footer';
import {NavLink} from 'react-router-dom';

export default function ErrorPage() {
	return (
		<div>
			<Header />

			<div className='error-container'>
				<h1>404</h1>
				<p>Oups! La page que vous demandez n'existe pas.</p>
				<NavLink to='/'>Retourner sur la page d'accueil</NavLink>
			</div>

			<Footer />
		</div>
	);
}
