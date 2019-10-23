import React, { useState } from 'react';
import './index.scss';
import styled from 'styled-components';

const Modal = ({ body }) => {
	return (
		<div className="Modal">
			<div className="Back-div" />
			<div className="Modal-div">{body}</div>
		</div>
	);
};

export default Modal;
