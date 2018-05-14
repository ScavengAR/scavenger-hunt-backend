const Sequelize = require('sequelize');
const db = require('../db')

const MapItem = db.define('mapItem', {
  location: {
    type: Sequelize.STRING
  }
});

// module.exports = MapItem;

