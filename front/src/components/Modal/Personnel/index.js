import React, { useState, useEffect } from 'react';
import './index.scss';

//RoomsConsumer.setFilter는 { query: GET_ALL_ROOMS, arguments: {} } <이런 방식으로 parameter를 줘야한다.
export default ({ setText }) => {
	const [adult, setAdult] = useState(0);
	const [child, setChild] = useState(0);
	const [baby, setBaby] = useState(0);

	useEffect(() => {
		setButtonText();
	});

	const personnel = [
		{ name: '성인', count: adult, setCount: setAdult },
		{ name: '어린이', count: child, setCount: setChild },
		{ name: '유아', count: baby, setCount: setBaby },
	];

	const decreaseGuest = (count, setCount) => () => {
		if (count === 0) return;
		setCount(count - 1);
	};

	const increaseGuest = (count, setCount) => () => {
		setCount(count + 1);
	};

	const setButtonText = () => {
		if (adult + child + baby === 0) setText({ text: '인원' });
		else {
			const text = `게스트${adult + child}명${
				baby === 0 ? '' : `,유아${baby}명`
			}`;
			setText({ text, params: { guest: adult + child } });
		}
	};

	const counterComponent = () =>
		personnel.map((data, index) => (
			<div className="Guest-div" key={index}>
				<span className="Guest-name">{data.name}</span>
				<span className="Guest-set-div">
					<button
						className="Decrease-button"
						onClick={decreaseGuest(data.count, data.setCount)}
					>
						-
					</button>
					<span>{data.count}</span>
					<button
						className="Increase-button"
						onClick={increaseGuest(data.count, data.setCount)}
					>
						+
					</button>
				</span>
			</div>
		));

	return <div>{counterComponent()}</div>;
};
