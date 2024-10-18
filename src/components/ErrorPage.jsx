import {NavLink} from 'react-router-dom';

export default function ErrorPage() {
	return (
		<div>
			<div className='error-container'>
				<h1>404</h1>
				<p>Oups! La page que vous demandez n'existe pas.</p>
				<NavLink to='/'>Retourner sur la page d'accueil</NavLink>
			</div>
		</div>
	);
}
