import React from 'react';
import styled from 'styled-components';
import './star.scss';

export default props => {
	const rate = (props.children / 5) * 100;

	const StarStyle = styled.div`
		background-image: linear-gradient(90deg, #fc0 ${rate}%, #fff ${rate}%);
	`;

	return <StarStyle className="Star-rate">★★★★★</StarStyle>;
};
