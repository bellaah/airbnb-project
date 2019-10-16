const Room = require("../dao/room.js");
const roomData = require("./roomData.js");
const room = new Room();

roomData.forEach(elem => {
    elem.hostID = "bella";
    elem.review = Math.floor(Math.random() * 100) + 1; 
    room.create(elem);
});
