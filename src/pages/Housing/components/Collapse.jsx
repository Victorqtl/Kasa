import CollapseItem from '@/components/CollapseItem';

export default function Collapse({housing}) {
	return (
		<div className='collapse-container collapse-container-2'>
			<CollapseItem
				title='Description'
				content={<p className='collapse-text'> {housing.description} </p>}
			/>
			<CollapseItem
				title='Équipements'
				content={
					<ul className='collapse-text'>
						{housing.equipments.map((equipment, index) => (
							<li key={index}>{equipment}</li>
						))}
					</ul>
				}
			/>
		</div>
	);
}
