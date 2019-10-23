import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import RoomItem from '../../components/RoomItem/index';
import { GET_ALL_ROOMS } from './query';
import './index.scss';

const RoomList = () => {
	const { loading, error, data } = useQuery(GET_ALL_ROOMS);
	let allRooms;

	if (loading) return <p>Loading...</p>;
	if (error) {
		return <p>Error!</p>;
	} else allRooms = data.getAllRooms;

	const makeRoomItem = rooms =>
		rooms.map(item => <RoomItem room={item} key={item.id} />);
	return (
		<div className="Room-list">
			<h2 className="Header-text">숙소{allRooms.length}개</h2>
			{makeRoomItem(allRooms)}
		</div>
	);
};

export default RoomList;
