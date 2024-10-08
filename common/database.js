const { Sequelize } = require('sequelize');
const config = require('../user-service/config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host, // This should now be 'db'
    dialect: config.dialect
});

module.exports = sequelize;