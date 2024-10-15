import CollapseItem from '@/components/CollapseItem';

export default function Collapse() {
	return (
		<div className='collapse-container'>
			<CollapseItem
				title='Fiabilité'
				content={
					<p className='collapse-text'>
						Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux
						logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
					</p>
				}
			/>
			<CollapseItem
				title='Respect'
				content={
					<p className='collapse-text'>
						La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire
						ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
					</p>
				}
			/>
			<CollapseItem
				title='Service'
				content={
					<p className='collapse-text'>
						La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque
						interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de
						bienveillance.
					</p>
				}
			/>
			<CollapseItem
				title='Sécurité'
				content={
					<p className='collapse-text'>
						La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque
						logement correspond aux critères de sécurité établis par nos services. En laissant une note
						aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards
						sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos
						hôtes.
					</p>
				}
			/>
		</div>
	);
}
