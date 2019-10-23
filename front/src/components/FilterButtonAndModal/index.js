import React, { useState } from 'react';
import './index.scss';
import Modal from '../Modal/index';
import FilterButton from '../FilterButton/index';

const FilterButtonAndModal = props => {
	const [modalIsOpen, setModal] = useState(false);

	const openOrCloseModal = () => {
		modalIsOpen ? setModal(false) : setModal(true);
	};

	return (
		<div className="Button-and-modal">
			<FilterButton name={props.buttonName} click={openOrCloseModal} />
			{modalIsOpen ? <Modal /> : ''}
		</div>
	);
};

export default FilterButtonAndModal;
