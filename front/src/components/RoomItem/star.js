import React from 'react';
import styles from './star.scss';

const starRate = props => {
	const rate = (props.children / 5) * 100;
	const style = {
		backgroundImage: `linear-gradient(90deg, #fc0 ${rate}%, #fff ${rate}%)`,
	};
	return (
		<div style={style} className="Star-rate">
			★★★★★
		</div>
	);
};

export default starRate;
