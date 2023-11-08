const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Item = db.define('Item', {
  name: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.NUMBER,
  },
  vegetarian: {
    type: DataTypes.BOOLEAN,
  
  },
});

module.exports = Item;