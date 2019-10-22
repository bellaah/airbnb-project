import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import RoomItem from '../../components/RoomItem/index';
import { GET_ALL_ROOMS } from './query';

const RoomList = () => {
	const { loading, error, data } = useQuery(GET_ALL_ROOMS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!(</p>;

	const makeRoomItem = data =>
		data.map(item => <RoomItem room={item}></RoomItem>);
	return <div className="Room-list">{makeRoomItem(data.filterByCapacity)}</div>;
};

export default RoomList;
