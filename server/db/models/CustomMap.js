const Sequelize = require('sequelize');
const db = require('../db');

const CustomMap = db.define('customMap', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  geolocation: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  instructions: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  customItems: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: [],
    allowNull: false
  }
});

module.exports = CustomMap;
