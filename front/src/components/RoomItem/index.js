import React, { useState } from 'react';
import Star from './star.js';
import './index.scss';

export default ({ room }) => {
	const { img, type, title, info, option, star, review } = room;

	return (
		<div className="Room">
			<img src={img}></img>
			<div className="Room-description">
				<p>{type}</p>
				<h3>{title}</h3>
				<p>{info}</p>
				<p>{option}</p>
				<div className="Star-and-review">
					<Star>{star}</Star>
					<p>{review}</p>
					<button className="Reservation-btn">예약</button>
				</div>
			</div>
		</div>
	);
};
