const sequelize = require('../../../common/database');
const User = require('./user');

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database & tables created!');
    });

module.exports = {
    User
};