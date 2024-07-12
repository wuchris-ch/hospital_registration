const sequelize = require('../../../common/database');
const User = require('./user');

sequelize.sync({ force: true }) // change true later to avoid data loss each restart
    .then(() => {
        console.log('Database & tables created!');
    });

module.exports = {
    User
};