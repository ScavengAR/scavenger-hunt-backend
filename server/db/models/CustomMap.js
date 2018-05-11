const Sequelize = require('sequelize');
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
<<<<<<< HEAD
  },
  itemsOnMap: {
    type: Sequelize.TEXT,
    allowNull: true
=======
>>>>>>> master
  }
});

module.exports = CustomMap;
