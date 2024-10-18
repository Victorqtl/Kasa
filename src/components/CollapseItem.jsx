import { useState, useRef } from 'react';
import arrow from 'assets/up-arrow.png';

export default function CollapseItem({title, content}) {
	const [isOpen, setIsOpen] = useState(false);
	const collapeDetails = useRef(null);

	function toggleCollapse() {
		setIsOpen(!isOpen);
	}

	return (
		<div className={`collapse-content ${isOpen ? 'open' : ''}`}>
			<div className='collapse-title'>
				<h2>{title}</h2>
				<button onClick={toggleCollapse}>
					<img
						className='arrow'
						src={arrow}
						alt='Flèche'
					/>
				</button>
			</div>
			<div
				ref={collapeDetails}
				className='collapse-details'
				style={{
					maxHeight: isOpen ? `${collapeDetails.current.scrollHeight}px` : '0px',
				}}>
				{content}
			</div>
		</div>
	);
}
