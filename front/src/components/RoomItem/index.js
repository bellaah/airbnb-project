import React, { useState } from 'react';
import Style from './index.scss';
import Star from './star.js';

const RoomItem = ({ room }) => {
	return (
		<div className="Room">
			<img src={room.img}></img>
			<div className="Room-description">
				<p>{room.type}</p>
				<h3>{room.title}</h3>
				<p>{room.info}</p>
				<p>{room.option}</p>
				<div className="Star-and-review">
					<Star>{room.star}</Star>
					<p>{room.review}</p>
					<button className="Reservation-btn">예약</button>
				</div>
			</div>
		</div>
	);
};

export default RoomItem;
