import React, { useState } from 'react';

import FilterButton from '../../components/FilterButton/index';
import { Modal, Calendar, Personnel } from '../../components/Modal/index';
import Header from '../../components/Header/index';
import './index.scss';

export default () => {
	const [dateButtonText, setDateButtonText] = useState({
		text: '날짜',
		params: { checkIn: '', checkOut: '' },
	});
	const [capacityButtonText, setCapacityButtonText] = useState({
		text: '인원',
		params: { guest: 0 },
	});
	const [typeButtonText, setTypeButtonText] = useState({
		text: '숙소유형',
		params: {},
	});
	const [priceButtonText, setPriceButtonText] = useState({
		text: '가격',
		params: { lowestPrice: '', highestPrice: '' },
	});
	const [selectNum, setSelected] = useState(null);

	const buttonAndModalBody = [
		{
			buttonText: dateButtonText,
			setText: setDateButtonText,
			modalBody: <Calendar setText={setDateButtonText} />,
		},
		{
			buttonText: capacityButtonText,
			setText: setCapacityButtonText,
			modalBody: <Personnel setText={setCapacityButtonText} />,
		},
		{
			buttonText: typeButtonText,
			setText: setTypeButtonText,
			modalBody: <p>h</p>,
		},
		{
			buttonText: priceButtonText,
			setText: setPriceButtonText,
			modalBody: <p>h</p>,
		},
	];

	const selectUpdate = id => () => {
		if (selectNum === id) {
			setSelected(null);
		} else {
			setSelected(id);
		}
	};

	const FilterButtonComponent = () =>
		buttonAndModalBody.map(({ buttonText, modalBody }, index) => (
			<div className="Button-and-modal">
				<FilterButton
					name={buttonText}
					click={selectUpdate(index)}
					select={selectNum}
					id={index}
				/>
				{selectNum === index ? (
					<Modal body={modalBody} buttonText={buttonText} />
				) : (
					''
				)}
			</div>
		));

	return (
		<div className="Header-div">
			<Header />
			<div className="Filter-bar">{FilterButtonComponent()}</div>
		</div>
	);
};
