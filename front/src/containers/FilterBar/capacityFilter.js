import React, { useState } from 'react';
import './capacityFilter.scss';

const Capacity = ({ buttonText, setText }) => {
	const [adult, setAdult] = useState(0);
	const [child, setChild] = useState(0);
	const [baby, setBaby] = useState(0);

	const personnel = [
		{ name: '성인', count: adult, setCount: setAdult },
		{ name: '어린이', count: child, setCount: setChild },
		{ name: '유아', count: baby, setCount: setBaby },
	];

	const decreaseGuest = (count, setCount) => async () => {
		if (count == 0) {
			return;
		}

		setCount(count - 1);
		setButtonText();
	};

	const increaseGuest = (count, setCount) => async () => {
		setCount(count + 1);
		setButtonText();
	};

	const setButtonText = () => {
		if (adult + child + baby == 0) {
			setText(buttonText);
		}
		setText(`게스트${adult + child}명,유아${baby}명`);
	};

	const counterComponent = () =>
		personnel.map((data, index) => (
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

	return <div>{counterComponent()}</div>;
};

export default Capacity;
