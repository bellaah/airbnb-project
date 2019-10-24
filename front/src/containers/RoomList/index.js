import React from 'react';

import RoomItem from '../../components/RoomItem/index';
import './index.scss';

export default ({ rooms }) => {
	const makeRoomItem = rooms =>
		rooms.map(item => <RoomItem room={item} key={item.id} />);

	return (
		<div className="Room-list">
			<h2 className="Header-text">숙소{rooms.length}개</h2>
			{makeRoomItem(rooms)}
		</div>
	);
};
