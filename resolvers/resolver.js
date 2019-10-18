const Room = require("../sequelize/dao/room.js");
const Reservation = require("../sequelize/dao/reservation.js");
const User = require("../sequelize/dao/user.js");
const { getToken, isTokenValid } = require('../utils/jwt.js');
const reservation = new Reservation();
const room = new Room();
const user = new User();

const resolvers = {
    Query: {
        filterByPrice: (_,{lowestPrice,highestPrice}) => {
            return room.findRoomsByPrice(lowestPrice,highestPrice);
        },

        filterByCapacity: (_,{guest}) => {
            return room.findRoomsByCapacity(guest);
        },

        // 날짜는 "2019.10.16"과 같은 형태의 String으로 받는다.
        filterByDate: (_,{checkIn,checkOut}) => {
            return room.findRoomsByDate(checkIn,checkOut);
        }
    },
    Mutation: {
        addRoom: (_,{data}) => {
            room.create(data);
        },

        reserveRoom: (_,reservationData) => {
            return reservation.create(reservationData);
        },

        cancelReservation: (_,{roomID, guestID}) => {
            return reservation.delete(roomID, guestID);
        },

        signUp: (_,userData) => {
            return user.create(userData);
        },

        login: (_,userData) => {
            return getToken(userData);
        },

        checkToken: (_,{token}) => {
            return isTokenValid(token);
        }
    }
};

export default resolvers;