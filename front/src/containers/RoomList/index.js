import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import RoomItem from '../../components/RoomItem/index';
import { GET_ALL_ROOMS } from './query';
import style from './style.scss';

const RoomList = () => {
	const { loading, error, data } = useQuery(GET_ALL_ROOMS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!(</p>;

	const makeRoomItem = data =>
		data.map(item => <RoomItem room={item}></RoomItem>);
	return (
		<div className="Room-list">
			<h2>숙소{data.getAllRooms.length}개</h2>
			{makeRoomItem(data.getAllRooms)}
		</div>
	);
};

export default RoomList;
