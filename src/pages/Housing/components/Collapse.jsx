import CollapseItem from '@/components/CollapseItem';

export default function Collapse({housing}) {
	return (
		<div className='collapse-container collapse-container-2'>
			<CollapseItem
				title='Description'
				content={housing.description}
			/>
			<CollapseItem
				title='Équipements'
				content={
					<ul>
						{housing.equipments.map((equipment, index) => (
							<li key={index}>{equipment}</li>
						))}
					</ul>
				}
			/>
		</div>
	);
}
