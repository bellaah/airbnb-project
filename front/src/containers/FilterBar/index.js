import React, { useState } from 'react';

import FilterButton from '../../components/FilterButton/index';
import Modal from '../../components/Modal/index';
import './index.scss';
import Calendar from './dateFilter';
import Capacity from './capacityFilter';

const FilterBar = () => {
	const buttonAndModalBody = [
		{ buttonName: '날짜', modalBody: <Calendar /> },
		{ buttonName: '인원', modalBody: <Capacity name="인원" /> },
		{ buttonName: '숙소유형', modalBody: <p>h</p> },
		{ buttonName: '가격', modalBody: <p>h</p> },
	];
	const [selectNum, setSelected] = useState(null);

	const makeFilterButton = () =>
		buttonAndModalBody.map(({ buttonName, modalBody }, index) => (
			<div className="Button-and-modal">
				<FilterButton
					name={buttonName}
					click={selectUpdate(index)}
					select={selectNum}
					id={index}
				/>
				{selectNum === index ? <Modal body={modalBody} /> : ''}
			</div>
		));

	const selectUpdate = id => () => {
		if (selectNum === id) {
			setSelected(null);
		} else {
			setSelected(id);
		}
	};

	return <div className="Filter-bar">{makeFilterButton()}</div>;
};

export default FilterBar;
