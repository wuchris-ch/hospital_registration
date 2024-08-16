const { DataTypes } = require('sequelize');
const sequelize = require('../../../common/database');

const Doctor = sequelize.define('Doctor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    specialty: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Doctor;
