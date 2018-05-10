const Result = require('./Result');
const User = require('./User')
const CustomMap = require('./CustomMap');
const Item = require('./Item');
const MapItem = require('./MapItem');

//Associations
CustomMap.belongsToMany(Item, { through: MapItem});
Item.belongsToMany(CustomMap, { through: MapItem});

module.exports = {
  User,
  Result,
  CustomMap,
  Item,
  MapItem
};
