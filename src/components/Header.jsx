import { NavLink } from "react-router-dom";
import Logo from 'assets/logo.png';

export default function Header() {
	return (
		<header>
            <img src={Logo} alt="Logo Kaza" />
			<nav>
				<NavLink to='/'>Accueil</NavLink>
				<NavLink to='/a-propos'>À propos</NavLink>
			</nav>
		</header>
	);
}
