const Room = require("../dao/room.js");
const roomData = require("./roomData.js");
const room = new Room();

roomData.forEach(elem => {
    room.create(elem);
});