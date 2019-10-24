import gql from 'graphql-tag';

const GET_ALL_ROOMS = () => gql`
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

const FILTER_BY_DATE = (checkIn, checkOut) => gql`
	query {
		filterByDate(checkIn: checkIn, checkOut: checkOut) {
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

const FILTER_BY_CAPACITY = guest => gql`
	query {
		filterByCapacity(guest: guest) {
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

const FILTER_BY_PRICE = (lowestPrice, highestPrice) => gql`
	query {
		filterByPrice(lowestPrice: lowestPrice, highestPrice: highestPrice) {
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

export { GET_ALL_ROOMS, FILTER_BY_DATE, FILTER_BY_CAPACITY, FILTER_BY_PRICE };
