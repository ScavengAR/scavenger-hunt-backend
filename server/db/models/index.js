const Result = require('./Result');
const CustomMap = require('./CustomMap');
const Item = require('./Item');
const MapItem = require('./MapItem');

//Associations
CustomMap.belongsToMany(Item, { through: MapItem});
Item.belongsToMany(CustomMap, { through: MapItem});

module.exports = {
  Result,
  CustomMap,
  Item,
  MapItem
};
