const { room,Sequelize }  = require("../models/index.js");
const Op = Sequelize.Op;

class Room {
    create(obj) {
        obj.option = obj.option.join(' ');
        obj.info = obj.info.join(' ');

        return room.create(obj)
            .then(res => true)
            .catch(err => {
                console.log(err);
                return false;
            });
    }

    findRoomsByPrice(lowestPrice,highestPrice) {
        const condition = {
            where: {
                price: {
                    [Op.and]: {
                        [Op.gte]: lowestPrice,
                        [Op.lte]: highestPrice
                      }
                }
            }
        };
        return this.findAll(condition);
    }

    findRoomsByCapacity(guest) {
        const condition =  {
            where: {
                capacity: {
                    [Op.gte] : guest
                }
            }
        };
        return this.findAll(condition);
    }

    findRoomsByDate(reservedRoom) {  
        return room.findAll({
            where: { 
                id: { 
                    [Op.notIn]: reservedRoom
                } 
            }
        });
    }

    findAll(condition) {
        return room.findAll(condition)
            .map(data => data.get({ plain: true }))
            .catch(err => console.log(err));
    }

}

module.exports = Room;