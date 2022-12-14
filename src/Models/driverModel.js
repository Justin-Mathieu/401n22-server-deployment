const sequelize = require('sequelize');


function driver(db) {
    return db.define('driver', {
        name: sequelize.DataTypes.STRING,
        age: sequelize.DataTypes.STRING,

    });
}

module.exports = {
    driver,
};
