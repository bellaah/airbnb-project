import React, { useState } from 'react';
import './capacityFilter.scss';

const Capacity = ({ name }) => {
	const [allCount, setAllCount] = useState(0);
	const [adult, setAdult] = useState(0);
	const [child, setChild] = useState(0);
	const [baby, setBaby] = useState(0);

	const dataInfo = [
		{ name: '성인', count: adult, setCount: setAdult },
		{ name: '어린이', count: child, setCount: setChild },
		{ name: '유아', count: baby, setCount: setBaby },
	];

	const decreaseGuest = (count, setCount) => () => {
		if (count == 0) {
			return;
		}
		setAllCount(allCount - 1);
		setCount(count - 1);
	};

	const increaseGuest = (count, setCount) => () => {
		setAllCount(allCount + 1);
		setCount(count + 1);
	};

	const counterComponents = dataInfo.map((data, index) => (
		<div className="Guest-div" key={index}>
			<span className="Guest-name">{data.name}</span>
			<span className="Guest-set-div">
				<button
					className="Increase-button"
					onClick={decreaseGuest(data.count, data.setCount)}
				>
					-
				</button>
				<span>{data.count}</span>
				<button
					className="Decrease-button"
					onClick={increaseGuest(data.count, data.setCount)}
				>
					+
				</button>
			</span>
		</div>
	));

	return <div>{counterComponents}</div>;
};

export default Capacity;
