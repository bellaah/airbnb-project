import React, { useState } from 'react';
import Style from './index.scss';
import Star from './star.js';

const roomItem = () => {
	return (
		<div className="Room">
			<img src="https://a0.muscache.com/im/pictures/b31c28c6-8c43-4f3e-9cd4-c7f1b42c438c.jpg?aki_policy=large"></img>
			<div className="Room-description">
				<h3>LA VIE EN ROSE / Myeong-dong</h3>
				<p>인원 3명, 침실 1개 침대 2개 욕실 1개</p>
				<p>무선 인터넷 에어컨 주방 난방</p>
				<div className="Star-and-review">
					<Star>4.5</Star>
					<p>50</p>
					<button className="Reservation-btn">예약</button>
				</div>
			</div>
		</div>
	);
};

export default roomItem;
