import React, { useState } from 'react';

import { Modal, Calendar, Personnel } from '../../components/Modal/index';
import FilterButton from '../../components/FilterButton/index';
import Header from '../../components/Header/index';
import './index.scss';

export default () => {
	const [dateButtonText, setDateButtonText] = useState({ text: '날짜' });
	const [capacityButtonText, setCapacityButtonText] = useState({ text: '인원' });
	const [priceButtonText, setPriceButtonText] = useState({ text: '가격' });
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
			buttonText: priceButtonText,
			setText: setPriceButtonText,
			modalBody: <p></p>,
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
			<div className="Button-and-modal" key={index}>
				<FilterButton text={buttonText} click={selectUpdate(index)} select={selectNum} id={index} />
				{selectNum === index ? (
					<Modal body={modalBody} buttonText={buttonText} setModal={setSelected} />
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
