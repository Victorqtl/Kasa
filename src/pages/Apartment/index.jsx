import { Link, Outlet, useParams } from "react-router-dom";


export default function Apartment() {
    const {id} = useParams()
	return (
		<div>
            <Outlet />
			<nav>
				<Link to='/'>Accueil</Link>
				<Link to='/a-propos'>À propos</Link>
			</nav>
			<h1>Appartement : {id}</h1>
		</div>
	);
}
