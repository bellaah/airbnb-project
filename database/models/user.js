module.exports = function(sequelize, dataTypes) {
    const user = sequelize.define("users", {
        id: {
            type: dataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }
    });
    return user;
};