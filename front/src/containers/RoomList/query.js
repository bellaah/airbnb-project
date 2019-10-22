import gql from 'graphql-tag';

export const GET_ALL_ROOMS = gql`
	query {
		getAllRooms {
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
