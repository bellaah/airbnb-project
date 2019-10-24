import React from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import { Main } from './containers/Main/index';
import './App.scss';

const client = new ApolloClient({
	link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Main />
		</ApolloProvider>
	);
}

export default App;
