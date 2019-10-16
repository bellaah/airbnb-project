module.exports = function(sequelize, dataTypes) {
    const user = sequelize.define("user", {
            id: {
                type: dataTypes.STRING,
                primaryKey: true
            },
            name: {
                type: dataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    );
    return user;
};