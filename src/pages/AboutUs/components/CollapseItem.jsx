import {useState} from 'react';
import arrow from 'assets/down-arrow.png';
// import UpArrow from 'assets/up-arrow.png';

export default function CollapseItem({title, content}) {
	const [isOpen, setIsOpen] = useState(false);

	function toggleCollapse() {
		setIsOpen(!isOpen);
	}

	return (
		<div className='collapse-content'>
			<div className='collapse-title'>
				<h2>{title}</h2>
				<button 
                onClick={toggleCollapse}
                >
					<img
						className={`arrow ${isOpen ? 'rotateUp' : 'rotateDown'}`}
						src={arrow}
						alt='Flèche'
					/>
				</button>
			</div>
			{isOpen && <p className='collapse-text'>{content}</p>}
		</div>
	);
}