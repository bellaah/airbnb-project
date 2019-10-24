import React, { useState, createContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import RoomList from '../RoomList/index';
import FilterBar from '../FilterBar/index';
import { GET_ALL_ROOMS } from './query';

const RoomsContext = createContext();

const Main = () => {
	let allRooms;

	const [filter, setFilter] = useState({
		query: GET_ALL_ROOMS,
		params: {},
	});
	const { loading, error, data } = useQuery(filter.query, {
		variables: filter.params,
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;
	else {
		for (let key in data) {
			allRooms = data[key];
		}
	}

	return (
		<RoomsContext.Provider className="Main" value={{ setFilter }}>
			<FilterBar />
			<RoomList rooms={allRooms} />
		</RoomsContext.Provider>
	);
};

export { Main, RoomsContext };
