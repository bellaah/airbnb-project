import React, { useState, createContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import RoomList from '../RoomList/index';
import FilterBar from '../FilterBar/index';
import {
	GET_ALL_ROOMS,
	FILTER_BY_DATE,
	FILTER_BY_CAPACITY,
	FILTER_BY_PRICE,
} from './query';

const RoomsContext = createContext();

const Main = () => {
	const [filter, setFilter] = useState({ query: GET_ALL_ROOMS, args: {} });

	const { loading, error, data } = useQuery(filter.query(filter.args));
	let allRooms;

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;
	else allRooms = data.getAllRooms;

	//setFilter를 넘겨줘서 query를 바꿀수 있게 한다.
	return (
		<RoomsContext.Provider className="Main" value={{ setFilter }}>
			<FilterBar />
			<RoomList rooms={allRooms} />
		</RoomsContext.Provider>
	);
};

export { Main, RoomsContext };
