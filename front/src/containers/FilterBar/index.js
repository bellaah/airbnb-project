import React, { useState } from 'react';

import FilterButton from '../../components/FilterButton/index';
import Modal from '../../components/Modal/index';
import './index.scss';
import Calendar from './dateFilter';

const FilterBar = () => {
	const buttonAndModalBody = [
		{ buttonName: '날짜', modalBody: <Calendar /> },
		{ buttonName: '인원', modalBody: <p /> },
		{ buttonName: '숙소유형', modalBody: <p /> },
		{ buttonName: '가격', modalBody: <p /> },
	];
	const [selectNum, setSelected] = useState(null);

	const makeFilterButton = () =>
		buttonAndModalBody.map(({ buttonName, modalBody }, index) => {
			return (
				<div className="Button-and-modal">
					<FilterButton
						name={buttonName}
						click={onUpdate(index)}
						select={selectNum}
						id={index}
					/>
					{selectNum === index ? <Modal body={modalBody} /> : ''}
				</div>
			);
		});

	const onUpdate = id => () => setSelected(id);

	return (
		<div>
			<div className="Filter-bar">{makeFilterButton()}</div>
			{/* <Calendar /> */}
		</div>
	);
};

export default FilterBar;
