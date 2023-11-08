const Restaurant = require('./Restaurant')
const Menu = require('./menu')
const Item = require('./item')


Menu.belongsTo(Restaurant, {
  foreignKey: 'restaurantId',
  onDelete: 'CASCADE',
});

Menu.belongsToMany(Item, {
  through: 'MenuItems',
  foreignKey: 'menuId',
  onDelete: 'CASCADE',
});

Item.belongsToMany(Menu, {
  through: 'MenuItems',
  foreignKey: 'itemId',
  onDelete: 'CASCADE',
});

module.exports = {
    Restaurant,
    Menu,
    Item
};