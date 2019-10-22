import React from 'react';

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import RoomList from './containers/RoomList/index';
import Modal from './components/Modal/index';
import FilterButton from './components/FilterButton/index';
import style from './App.scss';

const client = new ApolloClient({
	link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App-main">
				<FilterButton />
				<RoomList />
			</div>
		</ApolloProvider>
	);
}

export default App;
