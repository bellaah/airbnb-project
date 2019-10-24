import React, { useState, useContext } from 'react';
import { RoomsContext } from '../../containers/Main/index';
import './modal.scss';
import styled from 'styled-components';

export default ({ body, buttonText }) => {
	const roomsContext = useContext(RoomsContext);
	const BackDivStyle = styled.div`
		background-color: white;
		width: 100rem;
		height: 100rem;
		opacity: 0.7;
		position: fixed;
		left: 0;
	`;

	const getRoomsByFilter = () => {
		console.log(buttonText);
	};

	return (
		<div>
			<div className="Modal">
				<div className="Modal-div">
					{body}
					<button className="Save-button" onClick={getRoomsByFilter}>
						저장
					</button>
				</div>
			</div>
			<BackDivStyle />
		</div>
	);
};
