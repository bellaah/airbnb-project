const { room }  = require("../models/index.js");

class Room {
    create(obj) {
        return room.create({
            title : obj.title,
            hostID : obj.hostID,
            star : obj.star,
            img : obj.img,
            price : obj.price,
            review : obj.review,
            capacity : obj.capacity,
            option : obj.option.join(''),
            info : obj.info.join('')
        })
        .then()
        .catch(err => console.log(err));
    }

    findRoomsByPrice(lowestPrice,highestPrice) {
        return room.findAll({
            where: {
                price: {
                    $and: {
                        $gte: lowestPrice,
                        $lte: highestPrice
                      }
                }
            }
        })
        .map(data => data.get({ plain: true }))
        .then()
        .catch(err => console.log(err));
    }

    findRoomsByCapacity(guest) {
        return room.findAll({
            where: {
                capacity: {
                    $gte : guest
                }
            }
        })
        .map(data => data.get({ plain: true }))
        .then()
        .catch(err => console.log(err));
    }

    findRoomsByDate(checkIn,checkOut) {
        return room.findAll({
            where: {
                
            }
        })
        .map(data => data.get({ plain: true }))
        .then()
        .catch(err => console.log(err));
    }


}

module.exports = Room;