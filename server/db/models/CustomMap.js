const Sequelize = require('sequelize');
const DataTypes = require('sequelize/lib/data-types');
const db = require('../db');

const CustomMap = db.define('customMap', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
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
    type: DataTypes.ARRAY(DataTypes.JSON),
    defaultValue: [],
    allowNull: false
  }
});

module.exports = CustomMap;
