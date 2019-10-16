const Room = require("../database/dao/room.js");
const room = new Room();

const resolvers = {
    Query: {
        filterByPrice: (_,{lowestPrice,highestPrice}) => {
            return room.findRoomsByPrice(lowestPrice,highestPrice);
        },

        filterByCapacity: (_,{guest}) => {
            return room.findRoomsByCapacity(guest);
        }
    },
    Mutation: {
        addRoom: (_,obj) => {
            room.create(obj);
        }
    }
};

export default resolvers;