import gql from 'graphql-tag';

const GET_ALL_ROOMS = gql`
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

const FILTER_BY_DATE = gql`
	query FilterByDate($checkIn: String!, $checkOut: String!) {
		filterByDate(checkIn: $checkIn, checkOut: $checkOut) {
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

const FILTER_BY_CAPACITY = gql`
	query FilterByCapacity($guest: Int!) {
		filterByCapacity(guest: $guest) {
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

const FILTER_BY_PRICE = ({ lowestPrice, highestPrice }) => gql`
	query FilterByPrice($lowestPrice: Int!, $highestPrice: Int!) {
		filterByPrice(lowestPrice: $lowestPrice, highestPrice: $highestPrice) {
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
