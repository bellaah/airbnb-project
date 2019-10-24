import React, { useState } from 'react';

import FilterButton from '../../components/FilterButton/index';
import Modal from '../../components/Modal/index';
import './index.scss';
import Calendar from './dateFilter';
import Capacity from './capacityFilter';

const FilterBar = () => {
	const [dateButtonText, setDateButtonText] = useState('날짜');
	const [capacityButtonText, setCapacityButtonText] = useState('인원');
	const [typeButtonText, setTypeButtonText] = useState('숙소유형');
	const [priceButtonText, setPriceButtonText] = useState('가격');

	const buttonAndModalBody = [
		{
			buttonName: dateButtonText,
			setText: setDateButtonText,
			modalBody: (
				<Calendar ButtonText={dateButtonText} setText={setDateButtonText} />
			),
		},
		{
			buttonName: capacityButtonText,
			setText: setCapacityButtonText,
			modalBody: (
				<Capacity
					ButtonText={capacityButtonText}
					setText={setCapacityButtonText}
				/>
			),
		},
		{
			buttonName: typeButtonText,
			setText: setTypeButtonText,
			modalBody: <p>h</p>,
		},
		{
			buttonName: priceButtonText,
			setText: setPriceButtonText,
			modalBody: <p>h</p>,
		},
	];

	const [selectNum, setSelected] = useState(null);

	const FilterButtonComponent = () =>
		buttonAndModalBody.map(({ buttonName, modalBody, setText }, index) => (
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

	return <div className="Filter-bar">{FilterButtonComponent()}</div>;
};

export default FilterBar;
