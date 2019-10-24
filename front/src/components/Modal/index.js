import React, { useState } from 'react';
import './index.scss';
import styled from 'styled-components';

const Modal = ({ body }) => {
	const BackDivStyle = styled.div`
		background-color: white;
		width: 100rem;
		height: 100rem;
		opacity: 0.7;
		position: fixed;
		left: 0;
	`;

	return (
		<div>
			<div className="Modal">
				<div className="Modal-div">
					{body}
					<button className="Save-button">저장</button>
				</div>
			</div>
			<BackDivStyle />
		</div>
	);
};

export default Modal;
