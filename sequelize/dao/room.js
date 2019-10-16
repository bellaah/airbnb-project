const { room }  = require("../models/index.js");

class Room {
    create(obj) {
        obj.option = obj.option.join(' ');
        obj.info = obj.info.join(' ');

        return room.create(obj)
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

    findRoomsByDate(checkIn,checkOut) {     //미완성
        
        return room.findAll({
            where: {
                
            }
        })
        .map(data => data.get({ plain: true }))
        .then()
        .catch(err => console.log(err));
    }

    changeStringToDate(str) {
        const yyyy = end_ymd.substr(0,4);
        const mm = end_ymd.substr(5,2);
        const dd = end_ymd.substr(8,2);                        
        
        return new Date(yyyy, mm-1, dd);
    }


}

module.exports = Room;