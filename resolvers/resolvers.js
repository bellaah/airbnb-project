const Room = require("../database/dao/room.js");
const room = new Room();

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
        }
    }
};

export default resolvers;