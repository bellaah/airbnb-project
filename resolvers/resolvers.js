const Room = require("../database/dao/room.js");
const room = new Room();

const resolvers = {
    Query: {
        name: (_,{name}) => name
    },
    Mutation: {
        addRoom: (_,obj) => {
            console.log(obj);
            room.create(obj);
        },
        filterByPrice: async(_,{lowestPrice,highestPrice}) => {
            return room.findRoomsByPrice(lowestPrice,highestPrice);
        }
    }
};

export default resolvers;