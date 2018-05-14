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
  },
  itemsInGame: {
    //normal for sequelize to add weird / and other special characters but it works
    type: Sequelize.ARRAY(Sequelize.JSON) //good way to store coordinates
  } //will not need getters or setters to parse object
});

module.exports = CustomMap;

//1)
//Consider Sequelize.JSONB - compresses objects as small as possible
//B for Binary format

//Geolocation

//Get world position - where you are when you save a game [lat, long]
//When you're near a world position, you're in the right zone to start a game
//Geo-fence Library - only alllowed to start the game when you're inside

//Instructions - take a picture and match up what the picture looks like so you know you're in the right spot

//QR code scanner on Expo - check kevin's permissions module

//2)
//Check github issues with OBJLoader

//3)
//Async storage is front end only
