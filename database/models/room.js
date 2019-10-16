module.exports = function(sequelize, dataTypes) {
    const room = sequelize.define("room", {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            hostID: {
                type: dataTypes.STRING,
                allowNull: false
            },
            img: {
                type: dataTypes.STRING,
                allowNull: false
            },
            title: {
                type: dataTypes.STRING,
                allowNull: false
            },
            price: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            capacity: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            star: {
                type: dataTypes.DOUBLE
            },
            review: {
                type: dataTypes.INTEGER
            }
        },
        {
            timestamps: false
        }
    );
  
    room.associate = (models) => {
        room.belongsTo(models.user, {
            foreignKey: "hostID"
        });
    };
    return room;
};