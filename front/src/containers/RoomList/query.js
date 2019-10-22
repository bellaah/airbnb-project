import gql from 'graphql-tag';

export const GET_ALL_ROOMS = gql`
	query {
		filterByCapacity(guest: 3) {
			id
			title
			hostID
			star
			img
			price
			review
			capacity
			option
			info
		}
	}
`;
