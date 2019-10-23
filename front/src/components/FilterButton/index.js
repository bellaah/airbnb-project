import React, { useState } from 'react';
import styled from 'styled-components';

const FilterButton = ({ name, click, select, id }) => {
	const ButtonStyle = styled.button`
		border: 1px solid #ebebeb;
		border-radius: 0.3rem;
		padding: 0.5rem 0.7rem;
		font-size: 0.9rem;
		margin: 0.5rem 0.3rem;
		background-color: ${select == id ? '#008489' : 'white'};
		color: ${select == id ? 'white' : 'black'};

		&:hover {
			background-color: ${select == id ? '#006C70' : '#ebebeb'};
			color: ${select == id ? 'white' : '#484848'};
		}
	`;
	return <ButtonStyle onClick={click}>{name}</ButtonStyle>;
};

export default FilterButton;
